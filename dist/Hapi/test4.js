'use strict';

var Hapi = require('hapi');
var Inert = require('inert'); // 静态资源访问插件

// Create a server with a host and port
var server = Hapi.server({
    host: 'localhost',
    port: 8000
});

server.register();

server.register(require('inert'), function (err) {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/html',
        handler: function handler(request, reply) {
            reply.file('./public/hello.html');
        }
    });
});

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function handler(request, h) {
        return 'hello world';
    }
});

// Start the server
async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
//# sourceMappingURL=test4.js.map