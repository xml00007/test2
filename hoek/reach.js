const Hoek = require('hoek');
// let chain = 'a.b.c';
// let obj = {a: {b: {c: 1}}};
//
// Hoek.reach(obj, chain); // returns 1

let chain = 'a.b.-1.0.c';
let obj = {a: {b: [2, 3, [{c: 7}]]}};

Hoek.reach(obj, chain); // returns 6
console.log(Hoek.reach(obj, chain));
