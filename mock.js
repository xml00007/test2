
/**
 * Created by Arthur on 2017/7/5.
 */

const Mock= require('mockjs/dist/mock');
let data = Mock.mock({
  //list|1-10 数组元素个数随机范围， id|+2 属性值递增, age|20-30数值随机范围
  // test|3.2-5 3.xx-3.xxxxx 整数位3，小数位位数范围为2-5
  //'yourname|2-4': 'alice-' 重复字符串的次数范围2-4
  //常规真实数据格式，@name @color @url @first @last

  'list|1-10': [
      {'id|+2': 100 , 'age|20-30': 100}],
  'name': '@name',
  'color': '@color',
  'url': '@url',
  'email': '@email',
  'friends|3': [{name: '@name'}],
  'price|10-20.2-5': 11,
  'cost|10-20.3': 11,
  'test|3.2-5': 52,
  'yourname|2-4': 'alice-'
});

console.log(JSON.stringify(data, null, 2));
