/* ================================================================
   01-rotate.js — упражнение «Вращение»
   ================================================================ */
   window.Exercises = window.Exercises || [];
   window.Exercises.push({
    id: 'rotate',
    title: '1. Вращение',
    desc: 'Фигура вращается вокруг своей оси.',
    cssProperty: 'transform: rotate()',
    techDesc: 'Свойство transform поворачивает элемент. Задаётся угол от 0° до 360°, создавая полный оборот.',
    shapeClass: 'shape-square',
    animationClass: 'running-rotate',
    shapeStyle: {
      '--shape-color': '#3b82f6',
      '--anim-duration': '2s'
    }
   });

