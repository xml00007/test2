'use strict';

var canvas = document.getElementById('draw1');
var ctx = canvas.getContext('2d');
ctx.moveTo(200, 10);
ctx.lineTo(350, 110);
ctx.lineTo(100, 110);
ctx.closePath();
ctx.fillStyle = 'blue';
ctx.fill();
// ctx.lineWidth=5;
// ctx.strokeStyle='red';
// ctx.stroke();
//# sourceMappingURL=p1.js.map