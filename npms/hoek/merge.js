const Hoek = require('hoek');
let target = {a: 1, b: 2, c: {d: 1}};
let source = {a: 0, c: {e: 3, d: [2, 3]}};
let source2 = {a: null, c: 5};

// Hoek.merge(target, source); // results in {a: 0, b: 2, c: 5}
// Hoek.merge(target, source2); // results in {a: null, b: 2, c: 5}
// Hoek.merge(target, source2, false); // results in {a: 1, b: 2, c: 5}
//
// let targetArray = [1, 2, 3];
// let sourceArray = [4, 5];
//
// Hoek.merge(targetArray, sourceArray); // results in [1, 2, 3, 4, 5]
// Hoek.merge(targetArray, sourceArray, true, false); // results in [4, 5]

console.log(Hoek.merge(target, source));

