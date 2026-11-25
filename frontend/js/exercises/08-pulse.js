// «Пульсация» — две анимации в одной!
// В keyframes меняются одновременно transform: scale() И background-color.
// Это пример того, что в одной анимации можно анимировать несколько
// свойств сразу — браузер сам синхронизирует их во времени.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'pulse',
    title: '8. Пульсация',
    desc: 'Фигура пульсирует и меняет цвет.',
    cssProperty: 'transform: scale() + background-color',
    techDesc: 'Здесь мы одновременно увеличиваем размер через scale() и меняем цвет фона в середине анимации.',
    shapeClass: 'shape-circle',
    animationClass: 'running-pulse',
    shapeStyle: { '--shape-color': '#a855f7', '--anim-duration': '1.5s' }
});
