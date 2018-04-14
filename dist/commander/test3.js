'use strict';

var program = require('commander');

program.version('0.1.0').arguments('<cmd> [env] [qwe]').action(function (cmd, env, qwe) {
  console.log(cmd, env, qwe);
});
program.parse(process.argv);
//# sourceMappingURL=test3.js.map