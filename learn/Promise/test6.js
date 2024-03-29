function throwError(value) {
  // 抛出异常
  throw new Error('33');
}

// <1> onRejected不会被调用
function badMain(onRejected) {
  return Promise.resolve(42).then(throwError, onRejected);
}

// <2> 有异常发生时onRejected会被调用
function goodMain(onRejected) {
  return Promise.resolve(42).then(throwError).catch(onRejected);
}

// 运行示例
// badMain(function() {
//   console.log('BAD');
// });
goodMain(function(err) {
  console.log(err);
  console.log('GOOD');
});