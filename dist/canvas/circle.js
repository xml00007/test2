'use strict';

var canvas = document.getElementById('draw1');
var ctx = canvas.getContext('2d');
ctx.arc(250, 150, 100, 0, Math.PI); // 2* 就是圆形了
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.closePath();
ctx.stroke();
//# sourceMappingURL=circle.js.map