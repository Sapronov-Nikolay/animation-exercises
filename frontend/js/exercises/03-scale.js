// «Масштабирование» — изменение размера.
// scale(1) — обычный размер, scale(1.5) — в полтора раза больше.
// Фигура — круг, чтобы рост был заметнее и симпатичнее.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'scale',
    title: '3. Масштабирование',
    desc: 'Фигура плавно увеличивается и уменьшается.',
    cssProperty: 'transform: scale()',
    techDesc: 'scale(1.5) означает "увеличь элемент в 1.5 раза". Мы чередуем обычный размер и увеличенный.',
    shapeClass: 'shape-circle',
    animationClass: 'running-scale',
    shapeStyle: { '--shape-color': '#0ea5e9', '--anim-duration': '1.5s' }
});
