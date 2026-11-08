// «Быстрое вращение» — финал, собирает приёмы из предыдущих упражнений.
// 1. Скорость: в style.css длительность умножается на 0.5 — вдвое быстрее.
// 2. Цвет: меняется ПЛАВНО, в течение всего оборота (from → to),
//    а не скачком в середине, как в пульсации.
// Тоже пример "комбинированной" анимации: rotate + background-color.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'spin',
    title: '10. Быстрое вращение',
    desc: 'Фигура быстро крутится и меняет цвет.',
    cssProperty: 'transform: rotate() + background-color',
    techDesc: 'Комбинация вращения rotate() и смены цвета. Мы также уменьшили время анимации, чтобы оно крутилось быстрее.',
    shapeClass: 'shape-square',
    animationClass: 'running-spin',
    shapeStyle: { '--shape-color': '#8b5cf6', '--anim-duration': '1s' }
});
