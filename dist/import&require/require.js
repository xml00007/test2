'use strict';

/**
 * Created by Arthur on 2017/6/17.
 */

var _require = require('./count'),
    count = _require.count;

setTimeout(function () {
  console.log('read count after 1000ms in commonjs is', count);
}, 8000);
//# sourceMappingURL=require.js.map