/**
 * Created by Arthur on 2017/6/17.
 */

const {count} = require('./count');
setTimeout(function() {
  console.log('read count after 1000ms in commonjs is', count);
}, 8000);