'use strict';

var xlsx = require('node-xlsx').default;

var array = [[1, 2, 3], [2, 3, 4]];

// const buffer = xlsx.build([{name: 'testsheet', data: array}]); // Returns a buffer


var data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }; // A1:A4
var option = { '!merges': [range] };

var buffer = xlsx.build([{ name: "mySheetName", data: data }], option);
//# sourceMappingURL=test2.js.map
//# sourceMappingURL=test2.js.map