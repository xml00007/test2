'use strict';

// const p = {
//   then: function(cb, errcb) {
//     cb(42);
//     errcb('111');
//   },
// };
//
// p.then(function(v1) {
//   console.log(v1);
// }, function(v2) {
//   console.log(v2);
// });
//
let rejectedTh = {
  then: function then(resolve, cc) {
    cc('123');
  }
};

let rej = Promise.resolve(rejectedTh).catch(function (d) {
  return console.log(d);
});
//# sourceMappingURL=test3.js.map