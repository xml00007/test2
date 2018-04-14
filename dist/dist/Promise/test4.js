'use strict';

// let pp = new Promise(function(resolve, rejected) {
//   console.log(44);
//   // resolve('5555');
//   rejected('44444');
// });

// console.log(pp);

var p = Promise.resolve(ssss());

p.then(function (dd) {
  console.log(dd);
  throw new Error('ddd');
  // console.log(JSON.stringify(dd));
}, function (er) {
  console.log('55555');
  console.log(er);
}).catch(function (err) {
  console.log('66666666');
  console.log(err);
});

// process.on('unhandledRejection', function(err, p) {
//   console.error('catch exception:', err.stack);
// });

function ssss() {
  var a = void 0;
  a = b;
  return 1;
}
//# sourceMappingURL=test4.js.map
//# sourceMappingURL=test4.js.map