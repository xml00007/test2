'use strict';

var Hoek = require('hoek');
var chain = 'a.b.c';
var obj = { a: { b: { c: 1 } } };

console.log(Hoek.reachTemplate(obj, '1+{a.b.c}=2'));
//# sourceMappingURL=reachTemplate.js.map