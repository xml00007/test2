/**
 * Created by Arthur on 2017/7/6.
 */
const sum = require('../sum');

test('adds 1 + 2 to equal 3', ()=> {
  expect(sum(1, 2)).toBe(3);
});