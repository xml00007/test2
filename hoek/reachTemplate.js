const Hoek = require('hoek');
let chain = 'a.b.c';
let obj = {a: {b: {c: 1}}};

console.log(Hoek.reachTemplate(obj, '1+{a.b.c}=2'));