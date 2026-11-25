// «Дрожание» — быстрые рывки влево-вправо.
// Скорость задана хитро: в style.css стоит calc(var(--anim-duration) * 0.3).
// Мы передаём базовую 1.4s, а CSS сам умножит её на 0.3 — получится 0.42s.
// Итого дрожание в 3+ раза быстрее остальных анимаций — иначе оно не читается как тряска.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'shake',
    title: '7. Дрожание',
    desc: 'Фигура быстро дёргается влево-вправо.',
    cssProperty: 'transform: translateX()',
    techDesc: 'translateX() двигает по горизонтали. Меняя значения с плюса на минус, мы создаем эффект тряски.',
    shapeClass: 'shape-square',
    animationClass: 'running-shake',
    shapeStyle: { '--shape-color': '#eab308', '--anim-duration': '1.4s' }
});
