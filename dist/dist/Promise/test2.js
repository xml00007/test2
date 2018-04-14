'use strict';

// const p4 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('EE');
//   }, 0);
//   console.log('E1');
//   resolve('B');
//   console.log('E2');
// });

var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('DD');
  }, 0);
  console.log('D1');
  resolve('p3');
  console.log('D2');
});

var p1 = new Promise(function (resolve, reject) {
  console.log('C1');
  resolve('p1');
  console.log('C2');
});

var p2 = new Promise(function (resolve, reject) {
  resolve('A');
});

// setTimeout(function() {
//   console.log('D');
// }, 0);

p1.then(function (v) {
  console.log(v);
  return p3;
  // setTimeout(function() {
  //   console.log('E');
  // }, 0);
}).then(function (v) {
  console.log('sss' + v);
});

// p2.then(function(v) {
//   console.log(v);
// });
//# sourceMappingURL=test2.js.map
//# sourceMappingURL=test2.js.map