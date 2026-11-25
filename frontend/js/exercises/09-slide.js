// «Скольжение» — движение от края до края сцены.
// Сдвиг большой: ±50px при размере фигуры 60px. Значит, фигура
// частично ВЫЕЗЖАЕТ за границы сцены. Но сцена (.scene в style.css)
// имеет overflow: hidden — всё лишнее обрезается, и это выглядит красиво.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'slide',
    title: '9. Скольжение',
    desc: 'Фигура скользит от края до края.',
    cssProperty: 'transform: translateX()',
    techDesc: 'Сдвигаем элемент по горизонтали на большое расстояние (-50px и +50px), чтобы он двигался через всю сцену.',
    shapeClass: 'shape-square',
    animationClass: 'running-slide',
    shapeStyle: { '--shape-color': '#06b6d4', '--anim-duration': '2s' }
});
