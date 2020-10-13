## new 操作符的几个作用

new 操作符会返回一个对象，所以我们需要在内部创建一个对象
这个对象，也就是构造函数中的 this，可以访问到挂载在 this 上的任意属性，这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来，返回原始值需要忽略，返回对象需要正常处理

回顾了这些作用，我们就可以着手来实现功能了

```js
function create(Con, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, args);
  return result instanceof Object ? result : obj;
}
```

复制代码这就是一个完整的实现代码，我们通过以下几个步骤实现了它：

1. 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
2. 然后内部创建一个空对象 obj 因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeOf 将两者联系起来。这段代码等同于 obj.**proto** = Con.prototype
3. 将 obj 绑定到构造函数上，并且传入剩余的参数
4. 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值

接下来我们来使用下该函数，看看行为是否和 new 操作符一致

```js
function Test(name, age) {
  this.name = name;
  this.age = age;
}
Test.prototype.sayName = function () {
  console.log(this.name);
};
const a = create(Test, 'yck', 26);
console.log(a.name); // 'yck'
console.log(a.age); // 26
a.sayName(); // 'yck'
```
