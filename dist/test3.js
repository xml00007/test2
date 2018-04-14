'use strict';

// const a = [1, 2];
// a.valueOf = function() {
//   return '3';
// };
//
// const b = [3, 4];
// b.valueOf = function() {
//   return 5;
// };
//
// console.log(+a + b);
//
// const c = '3.14';
// console.log(typeof (c - 0));
//
// const d = {
//   a: '1',
//   toString: function() {
//     return this.a;
//   },
// };
//
// const e = {
//   a: '2',
//   toString: function() {
//     return this.a;
//   },
// };
//
// console.log(e - d);
// // console.log('222' - '21');
// // console.log(true + true);
// //
// // console.log(!!42);
// // console.log(!!{});
// // console.log(!!'222');
// // console.log(!!0);
// // console.log(!!null);
// // console.log(!!undefined);
// // console.log(!!'');
// //
// // console.log(1 || null);
// // console.log(null || '2');
// // console.log(1 && undefined);
// //
// // console.log('' == null);
// // console.log('' == undefined);
// // console.log(undefined == null);
// // console.log(null == undefined);
// // console.log(null == false);
// // console.log(null == '2');
// //
// // console.log('------------------------------------------------------');
// // console.log(0 == false);
// // console.log('0' == false);
// // console.log('' == false);
// // console.log('' == 0);
// // console.log('' == []);
// // console.log(0 == []);
// //
// // console.log(parseInt(''));
// // console.log(typeof String(0));
// //
// // console.log('-----------------------------------------------------------');
// // console.log(Boolean(1));
// // console.log(Boolean(0));
// // console.log(+new Date());
// // console.log(new Date());
// //
// // console.log(~9);
// // console.log(~-1);
// //
// // console.log(parseInt('ss2'));
// //
// // console.log(typeof (parseInt('ss2') + '4'));
//
// function aaa({a = 0, b}) {
//   try {
//     console.log(b);
//     const c = {
//       b: b,
//       a,
//     };
//     console.log(c);
//     cc(c);
//
//   } catch (err) {
//     console.log(err instanceof Error);
//   }
// }
//
// function cc(data) {
//   console.log(111111111);
//   console.log(data);
//   console.log(JSON.stringify(data));
// }
//
// aaa({a: 1});

// let a;
// let b = 'b'
//
// console.log({a,b})

// let a = {a: 1, b: undefined};
// console.log(a);
//
// let b = a;
// console.log(b);

var tasks = [];

var _loop = function _loop(i) {
  tasks.push(function () {
    console.log('>>> ' + i);
  });
};

for (var i = 0; i < 3; i++) {
  _loop(i);
}
// tasks.forEach((item) => item());
tasks[0]();
tasks[1]();
tasks[2]();
tasks[2]();

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log('>>> ' + i);
//   }, 1000);
// }
//
// for (let i = 0; i < 5; i++) {
//   let i = 'abc';
//   console.log(i);
// }

function ReplyResult(message) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.assign({}, message, { result: result });
}

var result = {
  data: 200
};

console.log(ReplyResult({ code: 200, result: 1 }, {}));
//# sourceMappingURL=test3.js.map