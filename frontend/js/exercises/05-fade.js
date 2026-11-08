// «Затухание» — единственная анимация, которая НЕ использует transform!
// Она меняет opacity (прозрачность): 1 — фигура видна, 0.15 — почти исчезла.
// Это важно понять: transform двигает/крутит/масштабирует,
// а opacity управляет только "видимостью".

window.Exercises = window.Exercises || [];
window.Exercises.push({
  id: 'fade',
  title: '5. Затухание',
  desc: 'Фигура становится прозрачной и возвращается.',
  cssProperty: 'opacity',
  techDesc: 'opacity управляет прозрачностью. 1 - полностью видимый, 0.15 - почти прозрачный.',
  shapeClass: 'shape-circle',
  animationClass: 'running-fade',
  shapeStyle: { '--shape-color': '#14b8a6', '--anim-duration': '2s' }
});
