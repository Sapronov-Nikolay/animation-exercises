// Морфинг формы
window.Exercises = window.Exercises || [];
window.Exercises.push({
  id: 'morph',
  title: '15. Морфинг формы',
  desc: 'Фигура плавно меняет свои углы',
  cssProperty: 'border-radius',
  techDesc: 'Мы анимируем свойство border-radius от квадрата до круга и обратно, создавая эффект "живой" формы',
  shapeClass: 'shape-square',
  animationClass: 'running-morph',
  shapeStyle: { '--shape-color': '#10b981', '--anim-duration': '3s' }
});
