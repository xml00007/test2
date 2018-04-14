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

let m = {
  then: function(a, b) {
    setTimeout(function() {
      let a;
      a = n;
      a(2);
      b(1);
    }, 1000);
  },
};

Promise.resolve(m).then(function(msg) {
  console.log(msg);
}).catch(function(err) {
  console.log(1111);
  console.log(err);
}).done(function(rr) {
  console.log(55555);
  console.log(rr);
});