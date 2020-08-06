let canvas= document.getElementById('draw1');
let ctx=canvas.getContext('2d');
ctx.moveTo(62,242);
const p1=[
    187,32,429,480,365,133
];
ctx.bezierCurveTo(...p1);
ctx.stroke();