const Hoek = require('hoek');

const default1 = {url: 'www.github.com', port: '8000', debug: true};

const config = Hoek.applyToDefaults(
    default1,
    {
      port: '3000', admin: true,
    }
);
console.log(config);
