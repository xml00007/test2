'use strict';

const Hapi = require('hapi');
import {routes} from './route';

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

// Add the route
// server.route({
//     method: 'GET',
//     path: '/hello',
//     handler: function(request, h) {
//         return 'hello world';
//     }
// });

// 注册路由
routes.map(route => {
    server.route(route);
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
