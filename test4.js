let a = [
  {a: 1, b: 2},
  {a: 2, b: 2},
  {a: 3, b: 2},
  {a: 1, b: 2},
  {a: 6, b: 2},
];

a = a.sort((d1, d2) => {
  return d1.a > d2.a;
});

console.log(a);

const c = 1 || '';
console.log(c);

const a1 = `<tr>
        <td>funcName:</td>
        <td>{funcName}</td>
    </tr>`;
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
