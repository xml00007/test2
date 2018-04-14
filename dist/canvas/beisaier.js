'use strict';

var canvas = document.getElementById('draw1');
var ctx = canvas.getContext('2d');
ctx.moveTo(62, 242);
var p1 = [187, 32, 429, 480, 365, 133];
ctx.bezierCurveTo.apply(ctx, p1);
ctx.stroke();
//# sourceMappingURL=beisaier.js.map