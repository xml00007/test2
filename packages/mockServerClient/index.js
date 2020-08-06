/**
 * Created by Arthur on 2017/7/14.
 */


var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient, // MockServer client
    proxyClient = mockServer.proxyClient; // proxy client


mockServerClient("localhost", 1080).
    mockSimpleResponse('/somePath', { name: 'value' }, 203);