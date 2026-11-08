// «Переворот» — вращение вокруг ВЕРТИКАЛЬНОЙ оси.
// Ключевая разница с rotate(): у rotateY() есть буква Y — ось ординат.
// Фигура как будто крутится "к нам спиной и обратно", как монетка.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'flip',
    title: '2. Переворот',
    desc: 'Фигура переворачивается вокруг вертикальной оси.',
    cssProperty: 'transform: rotateY()',
    techDesc: 'Функция rotateY() вращает элемент вокруг вертикальной оси (как будто вы крутите монетку).',
    shapeClass: 'shape-square',
    animationClass: 'running-flip',
    shapeStyle: { '--shape-color': '#8b5cf6', '--anim-duration': '2s' }
});
