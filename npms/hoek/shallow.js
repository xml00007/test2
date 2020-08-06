const Hoek = require('hoek');
let acc = {a: {b: 1, c: 2, d: {e: 3}}};

let shallow = Hoek.shallow(acc);

if (shallow) {

}
shallow.a.b = 3;
console.log(shallow);
console.log(acc);
