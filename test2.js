//
// const Hoek = require('hoek');
//
// const dd = {url : "www.github.com", port : "8000", debug : true};
//
// const config = Object.assign(dd, {port : "3000", admin : true,abc:{a:1,c:{d:2}}});
//
// console.log(JSON.stringify(config));
// // In this case, config would be { url: 'www.github.com', port: '3000', debug: true, admin: true
//

console.log(typeof null);

console.log(typeof [1, 2, 3] === Array);

// let c = new Array(3);
// console.log(c[0]);

const a = 'asdf';
console.log(Array.prototype.join.call(a, '-'));

Array.prototype.map.call(a, function(v) {
  console.log(v);
});

console.log(42..toFixed(3));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log(void 1);

