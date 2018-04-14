'use strict';

var canvas = document.getElementById('draw1');
var ctx = canvas.getContext('2d');
//  内轴
ctx.arc(250, 150, 30, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.lineWidth = 15;
ctx.stroke();
// 外轴
ctx.beginPath();
ctx.arc(250, 150, 100, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.lineWidth = 15;
ctx.stroke();
ctx.translate(250, 150);
//  辐条
for (var i = 0; i < 12; i++) {
  ctx.rotate(2 * Math.PI * 1 / 11);
  ctx.moveTo(30, 0);
  ctx.lineTo(100, 0);
  // ctx.strokeStyle='red';
  ctx.lineWidth = 10;
}
ctx.stroke();
//  轮齿
for (var _i = 0; _i < 12; _i++) {
  ctx.rotate(2 * Math.PI * 1 / 11);
  ctx.moveTo(120, -10);
  ctx.lineTo(120, 10);
  ctx.lineTo(110, 14);
  ctx.lineTo(110, -14);
  ctx.closePath();
  // ctx.strokeStyle='red';
  ctx.lineWidth = 10;
}
ctx.stroke();
//# sourceMappingURL=chilun.js.map