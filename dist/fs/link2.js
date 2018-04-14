'use strict';

/**
 * Created by 高乐天 on 17/5/19.
 */

var fs = require('fs');
var path = require('path');
var rootPath = process.cwd();
var log = console.log;

var packages = ['packages', 'dependency', 'submodule'];
var scope = 'node_modules/@nirvana';

// 返回相对路径
var relativePath = function relativePath(dir) {
  var from = path.normalize(rootPath + '/' + scope);
  var to = dir;
  return path.relative(from, to);
};

function shell(cmd) {
  return require('child_process').execSync(cmd, { encoding: 'utf-8' });
}

function linkSync(packages) {
  // delete @nirvana
  shell('rm -rf ' + scope);
  // recreate @nirvana dir
  shell('mkdir -p ' + scope);

  packages = packages.map(function (item) {
    return path.normalize(rootPath + '/' + item);
  }).filter(function (item) {
    return fs.existsSync(item);
  });
  log(packages);
  // const jsonPaths = shell(`find ${packages.join(' ')} -name package.json -type f`)
  // .trim().split('\n')
  // .filter(item => {
  //   let name = require(item).name;
  //   return name[0] === '@';
  // });
  //
  // jsonPaths.forEach(jsonPath => {
  //   const dirPath = path.dirname(jsonPath);
  //   const srcPath = `${dirPath}/src`;
  //   const dirName = path.basename(dirPath);
  //
  //   const linkPath = path.normalize(`${scope}/${dirName}`);
  //   const target = fs.existsSync(srcPath) ? `${relativePath(srcPath)}` : `${relativePath(dirPath)}`;
  //
  //   fs.symlinkSync(target, linkPath, 'dir');
  //
  //   log(`${linkPath} --> ${target}`);
  // });
}

linkSync(packages);
//# sourceMappingURL=link2.js.map