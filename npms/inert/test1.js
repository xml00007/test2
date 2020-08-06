const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'selenium'),
        },
    },
});

const provision = async () => {
    await server.register(Inert);

    const webRoot = Path.join(__dirname, '../statics');
    console.log(webRoot);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: webRoot,
                redirectToSlash: false,
                listing: true,
                index: false,
            },
        },
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();
