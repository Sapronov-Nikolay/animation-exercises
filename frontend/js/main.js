/* ================================================================
   main.js — "Дирижер" страницы
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('exercises-container');
  const list = window.Exercises || [];
  if (list.length === 0) {
    console.warn('Список упражнений пуст! Возможно упражнения не прогрузились');
    return;
  }

  /* Если карточки прогрузились, то по сути мы ставим задачу простроить карточки */
  list.forEach(buildCard);

/*  ================================================================
    ФУНКЦИЯ buildCard(config) — строит ОДНУ карточку
    ================================================================ */
  function buildCard(config) {
    const card = document.createElement('div');
    card.className = 'exercises-card'; // Переменная карточки из CSS

    // card.innerHTML = `...` - записывает внутрь целаю разметку.
    card.innerHTML = `
      <h2>${config.title}</h2>
      <!-- Серый блок с обучающим описанием. Стили - класс .tech-info в style.css -->
      <div class="tech-info">
        <p>${config.desc}</p>
        <p><strong>CSS:</strong> <code>${config.cssProperty}</code></p>
        <p style="margin-top: 5px; font-size: 1.0em; opacity: 0.8;">${config.techDesc}</p>
      </div>

      <!-- "Сцена" - тёмное поле, где будет двигаться фигура.
           data-shape - это data-атрибут: наша собственная пометка,
           по которой ниже удобно найти именно эту фигуру через querySelector -->
      <div class="scene">
        <div class="shape ${config.shapeClass}" data-shape></div>
      </div>

      <!-- Блок управления: две кнопки и текст статуса.
           data-state="stopped" снова data-атрибут, стартовое состояние -->
      <div class="controls">
        <button class="btn-start">Старт</button>
        <button class="btn-stop">Стоп</button>
        <span class="status" data-state="stopped">ОСТАНОВЛЕНО</span>
      </div>
    `;

    /* Теперь найдем фигуру ВНУТРИ нашей карточки. */
    const shape = card.querySelector('[data-shape]');

    /* if (config.shapeStyle) — проверка "а есть ли вообще индивидуальные стили?". */
    if (config.shapeStyle) {
      Object.entries(config.shapeStyle).forEach(([key, value]) => {
        shape.style.setProperty(key, value);
      });
    }

    /* Находим элементы управления внутри этой же карточки. */
    const startBtn = card.querySelector('.btn-start');
    const stopBtn = card.querySelector('.btn-stop');
    const status = card.querySelector('.status');

    /* Функция для того, чтобы отличать активна ли кнопка? */
    function setButtonStates(running) {
      startBtn.classList.toggle('is-inactive', running);
      startBtn.classList.toggle('is-active', !running);
      stopBtn.classList.toggle('is-inactive', !running);
      stopBtn.classList.toggle('is-active', running);
    }

    /* ================================================================
       ЛОГИКА КНОПКИ "СТАРТ"
       ================================================================ */
    startBtn.addEventListener('click', () => {
      shape.classList.add(config.animationClass);
      status.dataset.state = 'running';
      status.textContent = 'ВЫПОЛНЯЕТСЯ';
      setButtonStates(true);
    });

    /* ================================================================
       ЛОГИКА КНОПКИ "СТОП"
       ================================================================ */
    stopBtn.addEventListener('click', () => {
      shape.classList.remove(config.animationClass);
      status.dataset.state = 'stopped';
      status.textContent = 'ОСТАНОВЛЕНО';
      setButtonStates(false);
    });

    /* ФИНАЛЬНЫЙ ШАГ: добавляем собранную карточку на страницу. */
    setButtonStates(false);
    container.appendChild(card);
  }
});
