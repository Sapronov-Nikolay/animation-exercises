// «Отскок» — прыжок вверх-вниз.
// Три интересных момента:
// 1. translateY(-60px) — минус означает ВВЕРХ (ось Y растёт вниз).
// 2. В style.css у этой анимации особая кривая скорости
//    cubic-bezier(0.28, 0.84, 0.42, 1) — резкий взлёт и мягкое приземление.
// 3. Длительность 2.2s — чуть быстрее обычного, чтобы прыжок был бодрым.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'bounce',
    title: '6. Отскок',
    desc: 'Фигура подпрыгивает вверх и возвращается.',
    cssProperty: 'transform: translateY()',
    techDesc: 'Функция translateY() двигает элемент вверх/вниз. Отрицательное значение (-60px) поднимает его вверх.',
    shapeClass: 'shape-circle',
    animationClass: 'running-bounce',
    shapeStyle: { '--shape-color': '#ef4444', '--anim-duration': '2.2s' }
});
