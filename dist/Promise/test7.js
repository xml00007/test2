"use strict";

let p = new Promise(function (resolve, rejected) {
  // throw  new Error('ddd');
  let a = void 0;
  a = b;
  resolve(42);
});

p.then(function (dd) {
  console.log(dd);
}, function (err) {
  console.log(2222);
  console.log(err);
}).catch(function (err) {
  console.log(11111);
  console.log(err);
});
//# sourceMappingURL=test7.js.map