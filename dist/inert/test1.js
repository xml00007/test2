'use strict';

var Path = require('path');
var Hapi = require('hapi');
var Inert = require('inert');

var server = new Hapi.Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'selenium')
        }
    }
});

var provision = async function provision() {
    await server.register(Inert);

    var webRoot = Path.join(__dirname, '../statics');
    console.log(webRoot);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: webRoot,
                redirectToSlash: false,
                listing: true,
                index: false
            }
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();
//# sourceMappingURL=test1.js.map