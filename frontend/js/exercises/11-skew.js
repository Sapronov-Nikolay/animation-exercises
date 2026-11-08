// «Наклон» — искажение формы, а не движение или поворот.
// skewX() перекашивает фигуру по горизонтали: углы смещаются,
// но сам элемент стоит на месте. В отличие от rotate() фигура
// НЕ крутится — она именно деформируется, как желе.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'skew',
    title: '11. Наклон',
    desc: 'Фигура перекашивается влево и вправо.',
    cssProperty: 'transform: skewX()',
    techDesc: 'skewX() наклоняет элемент по горизонтали: 20deg сдвигает верхнюю грань вправо, -20deg — влево. Фигура стоит на месте, но деформируется.',
    shapeClass: 'shape-square',
    animationClass: 'running-skew',
    shapeStyle: { '--shape-color': '#f97316', '--anim-duration': '1.5s' }
});
