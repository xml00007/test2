const Hoek = require('hoek');
let nestedObj = {
  w: /^something$/ig,
  x: {
    a: [1, 2, 3],
    b: 123456,
    c: new Date(),
  },
  y: 'y',
  z: new Date(),
};

let copy = Hoek.clone(nestedObj);

copy.x.b = 100;

console.log(copy.y); // results in 'y'
console.log(nestedObj.x.b); // results in 123456
console.log(copy.x.b); // results in 100
