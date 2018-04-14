'use strict';
/**
 * 路由配置
 */
// const Joi = require('@nirvana/nirvana-sdk/libs/joi');// 数据验证库

Object.defineProperty(exports, "__esModule", {
    value: true
});
var controller = require('./controller');
var _ = require('lodash');
var debug = require('nirvana-logger')('app:router');

var routeConfig = [{
    method: 'GET',
    path: '/hello',
    config: {
        auth: false,
        description: '按手机号码查询用户资料',
        notes: '按手机号码查询用户资料',
        validate: {
            // payload: Joi.object({
            //     mobiles: Joi.array().items(Joi.string().required().example('13300008888'))
            // }).unknown()
        }
    },
    handler: controller.hello
}];

// export function register(server, pathPrefix = '') {
//     // swagger 配置项 description 显示 handler 函数名称
//     const _routeConfigWithMethod = routeConfig.map((item) => {
//         item.config = _.merge({}, item.config, {
//             tags: ['api', 'user'],
//             description: item.handler.name + '() ' + item.config.description,
//         });
//         // 路径前辍
//         item.path = pathPrefix + item.path;
//         return item;
//     });
//     _routeConfigWithMethod.forEach((route) => server.route(route));
// }

var routes = exports.routes = routeConfig.map(function (item) {
    item.config = _.merge({}, item.config, {
        tags: ['api', 'user'],
        description: item.handler.name + '() ' + item.config.description
    });
    // 路径前辍
    item.path = '' + item.path;
    return item;
});
//# sourceMappingURL=route.js.map