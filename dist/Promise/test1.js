'use strict';

//
//
// function Set (ms) {
//   return promise = new Promise(function(resolve, rejecte) {
//     setTimeout(resolve,ms,'done')
//   })
// }
//
//
// function Set1 (ms) {
//   return promise = new Promise(function(resolve, rejecte) {
//     setTimeout(rejecte,ms,'filed')
//   })
// }
//
//
// Set(2000).then((data)=>{
//   console.log(data);
//   return Set1(5000);
// }).then((data)=>{
//   console.log(data+'=====>1');
// },(err)=>{
//   console.log(err+'=====>3');
// }).catch((err)=>{
//   console.log(err+'=====>2');
// })
//


let promise = Promise.resolve('foo');
promise.then(function (data) {
  console.log(data);
});
//# sourceMappingURL=test1.js.map