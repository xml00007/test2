"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deg2rad = Math.PI / 180;

var Vector2 = function Vector2() {
  var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Vector2);

  this.x = _x;
  this.y = _y;
};

// lines  平分的份数
// gear 是否有齿轮  1 有 0 没有  2 。。


function drawShap() {
  var lines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var radian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var centerLine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var gear = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gearHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 20;
  var center = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : { x: 250, y: 250 };

  var canvas = document.getElementById("draw1");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    //ctx.clearRect(0, 0, 1000, 500);
    var points = [];
    for (var a = 0; a < lines; a++) {
      var ang = a * (360 / lines * deg2rad);
      ang += offset * deg2rad; //  无效
      var x = Math.cos(ang) * radian + center.x; //  获取x 坐标
      var y = Math.sin(ang) * radian + center.y; //  获取y 坐标   算出散布在圆上 以radian为半径，center为圆心 总数为lines的点位置
      points.push({
        x: x,
        y: y
      });
      // 齿轮
      if (gear && a % 2 == 0) {
        // gearHeight为正数 则画出齿轮凸起部分 否则为凹槽部分
        if (gear == 1) {
          var halfx = Math.cos(ang + 180 / lines * deg2rad) * (radian + gearHeight) + center.x;
          var halfy = Math.sin(ang + 180 / lines * deg2rad) * (radian + gearHeight) + center.y;
          points.push({ x: halfx, y: halfy });
        }
        //  画出齿轮凹槽部分
        if (gear == 2) {
          var halfx1 = Math.cos(ang - 1 * deg2rad) * (radian + 50) + center.x;
          var halfy1 = Math.sin(ang - 1 * deg2rad) * (radian + 50) + center.y;
          points.push({
            x: halfx1,
            y: halfy1
          });
          var halfx2 = Math.cos(ang + (360 / lines + 1) * deg2rad) * (radian + gearHeight) + center.x;
          var halfy2 = Math.sin(ang + (360 / lines + 1) * deg2rad) * (radian + gearHeight) + center.y;
          points.push({
            x: halfx2,
            y: halfy2
          });
        }
      }
    }
    ctx.beginPath();
    for (var b = 0; b < points.length; b++) {
      var s = points[b];
      var e = points[b + 1 >= points.length ? 0 : b + 1];
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(e.x, e.y);

      if (centerLine /*  && (b % 2 == 0) */) {
          //斜线
          ctx.moveTo(e.x, e.y);
          //中心线
          ctx.moveTo(center.x, center.y);
          ctx.lineTo(e.x, e.y);
        }
    }
    ctx.stroke();
  }
}

(function () {
  // 基本多边形
  drawShap(3, 0, 50, false, 0, 100, { x: 50, y: 50 });
  drawShap(4, 0, 50, false, 0, 100, { x: 50, y: 150 });
  drawShap(5, 0, 50, false, 0, 100, { x: 50, y: 250 });
  drawShap(6, 0, 50, false, 0, 100, { x: 50, y: 350 });
  drawShap(16, 0, 50, false, 0, 100, { x: 50, y: 450 }); //  前五个gear=0 只画出相应的点数 最后连接起来
  drawShap(36, 0, 50, false, 1, -10, { x: 50, y: 580 }); //  总共36份 gear=1  gearHeight=-10 画出均分的18个凹槽点 连接成为齿轮
  // 齿轮
  drawShap(24, 0, 50, false, 1, 10, { x: 200, y: 100 }); // 总共24份
  drawShap(24, 0, 50, true, 1, 10, { x: 200, y: 260 });
  drawShap(24, 0, 50, false, 1, -10, { x: 200, y: 460 });
  drawShap(24, 0, 50, false, 1, -10, { x: 200, y: 620 });
  drawShap(24, 0, 50, false, 1, -10, { x: 200, y: 620 });
  // 双边齿轮
  drawShap(36, 0, 50, false, 2, 50, { x: 400, y: 100 });
  drawShap(36, 0, 10, false, 2, 60, { x: 400, y: 400 });

  drawShap(8, 0, 100, true, 0, 50, { x: 400, y: 700 });
  // Sawtooth();
  // let i = 0;
  // setInterval(function() {
  //   ++i;
  //   drawShap(16, i * 1, 100, true, 0, 10)
  // }, 1000 / 30)
})();

//   原理： 方法的整体是计算出所有的点，再按顺序连接为线，最终完成图形
//  如第六个 drawShap(36, 0, 50, false, 1, -10, {x: 50, y:580})
//  先找到第一个位于圆上的点 放入数组
//  找到第一个位于凹槽的点 放入数组
//  找到第二个圆上的点  放入数组
//  ...
//  最终找到36个位于圆上的点和18个凹槽点 按顺序连接成为一个齿轮

// lines 边长数
//  offset 暂没用到
//  radian 半径
//  centerLine 是否有中心线
// gear 是否带有凸起或者凹槽
// gearHeight 为正则为凸起 为负则为凹槽
//  center 图形中心点位置
//# sourceMappingURL=letian.js.map