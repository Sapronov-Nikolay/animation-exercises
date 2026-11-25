
import java.io.File;
import java.time.Duration;
import java.util.List;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.qameta.allure.Description;
import io.qameta.allure.Step;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.jupiter.api.Assertions.*;

public class AnimationExercisesTest {
    // URL по умолчанию: автоматически вычисляется из расположения теста.
    // Можно переопределить из консоли:
    // mvn test -Durl=http://localhost:8000
    // mvn test -Durl=file:///любой/другой/путь/index.html
    private static final String BASE_URL = System.getProperty("url", buildDefaultUrl());
    
    private static String buildDefaultUrl() {
        // ../frontend/index.html относительно папки tests, откуда Maven запускает тесты.
        File frontend = new File("../frontend/index.html");
        return frontend.getAbsoluteFile().toURI().toString();
    }
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    @BeforeEach
    void SetUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }
    
    @AfterEach
    void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
    
    @Test
    @DisplayName("Проверка запуска и остановка всех анимаций")
    @Description("Скрипт сам находит все карточки на странице, нажимает Старт/Стоп и проверяет статусы и активность кнопок")
    @Step("1. Проделываем ряд действий на странице")
    void testAllAnimationExercises() {
        driver.get(BASE_URL);
        List<WebElement> cards = driver.findElements(By.className("exercises-card"));
        assertFalse(cards.isEmpty(), "на странице не найдено ни одного упражнения!");
        System.out.println("На странице найдено упражнений: " + cards.size());
        
        for (WebElement card : cards) {
            String title = card.findElement(By.tagName("h2")).getText();
            checkExercise(title, card);
        }
    }
    
    // @Step - это аннотация Allure. Она делает так, чтобы в отчете этот метод
    // выглядел как отдельный красивый шаг: "Проверяем упражнение: 1. Вращение"
    @Step("Проверяем управление: {title}")
    private void checkExercise(String title, WebElement card) {
        // Ищем элементы внутри конкретной карточки (card.findElement)
        WebElement startBtn = card.findElement(By.className("btn-start"));
        WebElement stopBtn = card.findElement(By.className("btn-stop"));
        WebElement status = card.findElement(By.className("status"));
        WebElement shape = card.findElement(By.cssSelector("[data-shape]"));
        
        // --- 1. ПРОВЕРКА СТАРТОВОГО СОСТОЯНИЯ ---
        assertEquals("stopped", status.getDomAttribute("data-state"),
            "Начальный data-state != 'stopped' у " + title);
        assertEquals("ОСТАНОВЛЕНО", status.getText().toUpperCase(),
            "Начальный текст статуса неверный у " + title);
        
        assertTrue(startBtn.getDomAttribute("class").contains("is-active"),
            "Старт должен быть is-active в начале у " + title);
        assertTrue(stopBtn.getDomAttribute("class").contains("is-inactive"),
            "Стоп должен быть is-inactive в начале у " + title);
        
        // --- 2. НАЖАТИЕ "СТАРТ" ---
        startBtn.click();
        
        // Ждём, пока JS обновит атрибут data-state на "running"
        wait.until(ExpectedConditions.attributeToBe(status, "data-state", "running"));
        
        assertEquals("running", status.getDomAttribute("data-state"),
            "data-status != 'running' после Старт у " + title);
        assertEquals("ВЫПОЛНЯЕТСЯ", status.getText().toUpperCase(),
            "Текст статуса не сменился на 'ВЫПОЛНЯЕТСЯ' у " + title);
        
        assertTrue(shape.getDomAttribute("class").contains("running-"),
            "На фигуре нет класса 'running-*' после Старт у " + title);
        assertTrue(startBtn.getDomAttribute("class").contains("is-inactive"),
            "На фигуре нет класса 'running-*' после Старт у " + title);
        assertTrue(stopBtn.getDomAttribute("class").contains("is-active"),
            "На фигуре нет класса 'running-*' после Старт у " + title);
        
        // --- 2. НАЖАТИЕ "СТОП" ---
        stopBtn.click();
        
        // Ждем возврата атрибута data-state в "stopped"
        wait.until(ExpectedConditions.attributeToBe(status, "data-state", "stopped"));
        
        assertEquals("stopped", status.getDomAttribute("data-state"),
            "data-state != 'stopped' после Стоп у " + title);
        assertEquals("ОСТАНОВЛЕНО", status.getText().toUpperCase(),
            "Текст статуса не вернулся в 'ОСТАНОВЛЕНО' у " + title);
        
        // Проверяем, что класс running-* УДАЛИЛСЯ с фигуры
        assertFalse(shape.getDomAttribute("class").contains("running-"),
            "Класс 'running-*' остался на фигуре после Стоп у " + title);
        assertTrue(startBtn.getDomAttribute("class").contains("is-active"),
            "Старт не вернул is-active после Стоп у " + title);
        assertTrue(stopBtn.getDomAttribute("class").contains("is-inactive"),
            "Стоп не вернул is-inactive после Стоп у " + title);
    }
}
