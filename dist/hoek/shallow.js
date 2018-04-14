'use strict';

var Hoek = require('hoek');
var acc = { a: { b: 1, c: 2, d: { e: 3 } } };

var shallow = Hoek.shallow(acc);

if (shallow) {}
shallow.a.b = 3;
console.log(shallow);
console.log(acc);
//# sourceMappingURL=shallow.js.map