// «Свечение» — анимация тени вместо движения.
// Первое упражнение в наборе, где НЕ используется transform.
// Фигура стоит на месте, но вокруг неё разгорается зелёный ореол.
// Заодно демонстрируем rgba-цвет с переменной прозрачностью.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'glow',
    title: '12. Свечение',
    desc: 'Вокруг фигуры разгорается светящийся ореол.',
    cssProperty: 'box-shadow',
    techDesc: 'box-shadow рисует тень. Меняя её размер и прозрачность (rgba), мы заставляем свечение «дышать». Это первое свойство не из transform — и оно тяжелее для браузера.',
    shapeClass: 'shape-circle',
    animationClass: 'running-glow',
    shapeStyle: { '--shape-color': '#4ade80', '--anim-duration': '2s' }
});
