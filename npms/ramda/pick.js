const R = require('ramda');

let a = R.pick(['a', 'd'])({a: 1, b: 2, c: 3, d: 4});
console.log(a);