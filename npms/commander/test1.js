const program = require('commander');
// const inquirer = require('inquirer');
// const chalk = require('chalk');
// program.command('module').alias('m').description('创建新的模块').option('-a, --name [moduleName]', '模块名称').action(option => {
//   console.log('Hello World');
//   //为什么是Hello World 给你个眼神，自己去体会...
// });
//
// program.parse(process.argv);

program
.command('setup [env]')
.description('run setup commands for all envs')
.option("-s, --setup_mode [mode]", "Which setup mode to use", 'modetest')
.action(function(env, options){
  let mode = options.setup_mode || "normal";
  env = env || 'all';
  console.log('setup for %s env(s) with %s mode', env, mode);
});
program.parse(process.argv);