'use strict';

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log('\u4E3B\u8FDB\u7A0B ' + process.pid + ' \u6B63\u5728\u8FD0\u884C');

  // 衍生工作进程。
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('\u5DE5\u4F5C\u8FDB\u7A0B ' + worker.process.pid + ' \u5DF2\u9000\u51FA');
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是一个 HTTP 服务器。
  http.createServer(function (req, res) {
    res.writeHead(200);
    console.log(process.pid);
    res.end('hello world\n');
  }).listen(8000);

  console.log('\u5DE5\u4F5C\u8FDB\u7A0B ' + process.pid + ' \u5DF2\u542F\u52A8');
}
//# sourceMappingURL=cluster.js.map