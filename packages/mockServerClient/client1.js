/**
 * Created by Arthur on 2017/7/14.
 */


/*File: client1.js*/
var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient, // MockServer client
    proxyClient = mockServer.proxyClient; // proxy client

var remote = mockServerClient('localhost', 1080),
    remoteProxy = proxyClient('localhost', 1090);

// 使用之前清除服务器里边已经注册的 mockup 信息，因为可能会影响当前测试结果或者开发结果呢。
remote.reset();

// 简单的设置想要的response信息
// curl -X POST http://localhost:1080/api/demo
remote.mockSimpleResponse('/api/demo', { name: 'value'}, 203);

// 精确的设置想要的response消息，会参考输入的情况来判断怎么跑
// curl -X POST 'http://localhost:1080/api/demo2?test=true' -d someBody
remote.mockAnyResponse({
  'httpRequest': {
    'method': 'POST',
    'path': '/api/demo2',
    'queryStringParameters': [
      {
        'name': 'test',
        'values': [ 'true' ]
      }
    ],
    'body': {
      'type': "STRING",
      'value': 'someBody'
    }
  }, /*httpRequest*/
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({name: 'value'}),
    'delay': {
      'timeUnit': 'MILLISECONDS',
      'value': 250
    }
  }, /*httpResponse*/
  'times': {
    'remainingTimes': 1,
    'unlimited': false
  }
});