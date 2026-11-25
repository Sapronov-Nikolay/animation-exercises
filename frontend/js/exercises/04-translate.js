// «Смещение» — фигура обходит углы сцены.
// Анимация имеет 4 ключевые точки (25%, 50%, 75%) — поэтому фигура
// двигается не туда-сюда, а ПО КВАДРАТУ: вправо, вниз, влево, домой.

window.Exercises = window.Exercises || [];
window.Exercises.push({
    id: 'translate',
    title: '4. Смещение',
    desc: 'Фигура движется по углам сцены.',
    cssProperty: 'transform: translate()',
    techDesc: 'translate(40px, 40px) сдвигает элемент на 40 пикселей вправо и на 40 вниз. Мы задаем координаты углов.',
    shapeClass: 'shape-square',
    animationClass: 'running-translate',
    shapeStyle: { '--shape-color': '#f59e0b', '--anim-duration': '3s' }
});
