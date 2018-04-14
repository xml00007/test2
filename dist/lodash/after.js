'use strict';

var _ = require('lodash');
var saves = ['profile', 'settings'];

var done = _.after(saves.length, function () {
  console.log('done saving!');
});

var i = 0;
_.forEach(saves, function (type) {
  i++;
  print({ 'type': type, 'complete': done });
  console.log(i, type);
});

print({ 'type': 123, 'complete': done });

function print(data) {
  setTimeout(function () {
    console.log(JSON.stringify(data));
    return { status: 200 };
  }, 1000);
}
//# sourceMappingURL=after.js.map