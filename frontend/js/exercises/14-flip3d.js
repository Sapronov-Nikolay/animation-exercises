// Файл 3D-переворот фигуры
window.Exercises = window.Exercises || [];
window.Exercises.push({
  id: 'flip3d',
  title: '14. 3D Переворот',
  desc: 'Фигура вращается в трёхмерном пространстве.',
  cssProperty: 'transform: perspective() rotateX().',
  techDesc: 'perspective() создаёт иллюзию глубины, а rotateX() возвращает элемент по горизонтальной оси, как буд-то он падает на нас.',
  shapeClass: 'shape-square',
  animationClass: 'running-flip3d',
  shapeStyle: { '--shape-color': '#8b5cf6', '--anim-duration': '2s' }
});
