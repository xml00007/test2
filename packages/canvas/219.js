let canvas = document.getElementById('draw1');
let ctx = canvas.getContext('2d');
ctx.translate(100, 100);

// 绘制十个正方形
for (let i = 0; i<=10;i++)
{
ctx.rotate(2*Math.PI*1/9);
ctx.rect(0,0,60,60);
}
ctx.stroke();