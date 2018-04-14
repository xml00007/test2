'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server({ port: 8001, host: 'localhost' });
console.log(server.start.toLocaleString());
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at: ' + server.info.uri);
});
//# sourceMappingURL=test2.js.map