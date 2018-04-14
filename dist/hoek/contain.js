'use strict';

var Hoek = require('hoek');

Hoek.contain('aaa', 'a', { only: true }); // true
Hoek.contain([{ a: 1 }], [{ a: 1 }], { deep: true }); // true
Hoek.contain([1, 2, 2], [1, 2], { once: true }); // false
Hoek.contain({ a: 1, b: 2, c: 3 }, { a: 1, d: 4 }, { part: true }); // true

console.log(Hoek.contain('aaaaa', 'a', { only: true }));
console.log(Hoek.contain([1, 2, 2, 3], [1, 2, 2, 3]));
//# sourceMappingURL=contain.js.map