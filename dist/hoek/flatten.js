'use strict';

var Hoek = require('hoek');
var array = [1, [2, 3]];

var flattenedArray = Hoek.flatten(array); // results in [1, 2, 3]

array = [1, [2, 3, [7, 8]]];
target = [4, [5]];

flattenedArray = Hoek.flatten(array, target); // results in [4, [5], 1, 2, 3]
console.log(flattenedArray);
//# sourceMappingURL=flatten.js.map