const Hoek = require('hoek');

let defaults = {
  server: {
    host: 'localhost',
    port: 8000,
  },
  name: 'example',
};

let options = {server: {port: 8080}};

let config = Hoek.applyToDefaultsWithShallow(defaults, options, ['server']);
// let config = Hoek.applyToDefaultsWithShallow(defaults, options);  // 报错

console.log(config);
config.server.port = 10000;
console.log(config);
console.log(options);
console.log(defaults);
