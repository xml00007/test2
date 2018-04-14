// good 日志插件配置
const goodOption = {
    ops: {
        interval: 1000,
    },
    reporters: {
        myConsoleReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{log: '*', response: '*'}],
            },
            {
                module: 'good-console',
            }, 'stdout',
        ],
    },
};

module.exports = {
    goodOption
}