'use strict';

var Hoek = require('hoek');

var default1 = { url: 'www.github.com', port: '8000', debug: true };

var config = Hoek.applyToDefaults(default1, {
    port: '3000', admin: true
});
console.log(config);
//# sourceMappingURL=applyToDefaults.js.map