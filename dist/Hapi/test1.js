'use strict';

var Hapi = require('hapi');
var Dogwater = require('dogwater');
var Memory = require('sails-memory');

var server = new Hapi.Server({ port: 3000 });
// server.connection();

// server.route({
//     method: 'get',
//     path: '/dogs/{id}',
//     handler: function (request, reply) {
//         const Dogs = request.collections().dogs;
//         reply(Dogs.findOne(request.params.id));
//     }
// });

// server.register({
//     register: Dogwater,
//     options: {
//         adapters: {
//             memory: Memory
//         },
//         connections: {
//             simple: {adapter: 'memory'}
//         }
//     }
// }, (err) => {
//
//     if (err) {
//         throw err;
//     }
// });

// Define a model using a connection declared above
// server.dogwater({
//     identity: 'dogs',
//     connection: 'simple',
//     attributes: {name: 'string'}
// });

// server.start((err) => {
//     if (err) {
//         throw err;
//     }
//     // Add some records
//     console.log('1111111')
//     // const Dogs = server.collections().dogs;
//     //
//     // Dogs.create([
//     //     {name: 'Guinness'},
//     //     {name: 'Sully'},
//     //     {name: 'Ren'}
//     // ]).then(() => {
//     //         console.log(`Go find some dogs at ${server.info.uri}`);
//     //     })
//     //     .catch((err) => {
//     //
//     //         console.error(err);
//     //     });
// });

server.initialize(function (err) {
    if (err) console.log(err);
    console.log(1111111);
});
//# sourceMappingURL=test1.js.map