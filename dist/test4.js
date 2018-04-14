'use strict';

var a = [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 3, b: 2 }, { a: 1, b: 2 }, { a: 6, b: 2 }];

a = a.sort(function (d1, d2) {
  return d1.a > d2.a;
});

console.log(a);

var c = 1 || '';
console.log(c);

var a1 = '<tr>\n        <td>funcName:</td>\n        <td>{funcName}</td>\n    </tr>';
console.log(a1.replace('{funcName}', 1111111111));

console.log(Date.now());

switch ('1') {
  case 1:
    console.log(1);
    break;

  case '1':
    console.log(2);
    break;

  default:
    break;
}
//# sourceMappingURL=test4.js.map