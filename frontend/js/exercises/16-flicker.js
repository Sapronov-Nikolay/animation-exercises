// «Мерцание» — быстрое мигание с масштабированием времени через calc().
window.Exercises = window.Exercises || [];
window.Exercises.push({
  id: 'flicker',
  title: '16. Мерцание (Неон)',
  desc: 'Фигура быстро мерцает, как неисправная неоновая лампа',
  cssProperty: 'opacity + box-shadow + calc()',
  techDesc: `Резкость достигается через calc(var(--anim-duration) * 0.2): базовая длительность ужимается
  в пять раз, поэтому мигание получается быстрым без правки самого упражнения.
  Рваный ритм неоновой лампы дают резкие скачки opacity и box-shadow.`,
  shapeClass: 'shape-circle',
  animationClass: 'running-flicker',
  shapeStyle: { '--shape-color': '#06b6d4', '--anim-duration': '4s' }
});
