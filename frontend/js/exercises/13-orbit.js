// Фигура орбита
window.Exercises = window.Exercises || [];
window.Exercises.push({
  id: 'orbit',
  title: '13. Орбита',
  desc: 'Фигура вращается по кругу.',
  cssProperty: 'transform: rotate() translateX()',
  techDesc: 'Мы одновременно вращаем элемент и сдвигаем его в сторону. в сумме это заставляет фигуру двигаться по круговой орбите.',
  shapeClass: 'shape-circle',
  animationClass: 'running-orbit',
  shapeStyle: {
    '--shape-color': '#f43f5e', '--anim-duration': '2s'
  }
});
