"use strict";

// let p = new Promise(function(resolve, rejected) {
//   setTimeout(function() {
//     // resolve('w');
//     throw Error('eeee');
//     rejected('ww');
//   }, 1000);
// });
//
// p.then(function(msg) {
//   console.log(msg);
// }).catch(function(err) {
//   console.log(111);
//   console.log(err);
// });

var m = {
  then: function then(a, b) {
    setTimeout(function () {
      var a = void 0;
      a = n;
      a(2);
      b(1);
    }, 1000);
  }
};

Promise.resolve(m).then(function (msg) {
  console.log(msg);
}).catch(function (err) {
  console.log(1111);
  console.log(err);
}).done(function (rr) {
  console.log(55555);
  console.log(rr);
});
//# sourceMappingURL=test5.js.map
//# sourceMappingURL=test5.js.map