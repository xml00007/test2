# instanceOf

> instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

实现一下 instanceof

- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null

```js
function myInstanceof(left, right) {
  let prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) return false;
    if (prototype === left) return true;
    left = left.__proto__;
  }
}
```

> instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

- 语法：object instanceof constructor
- 参数：object（要检测的对象.）constructor（某个构造函数）
- 描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

```js
function Parent(value) {
  this.val = value;
}
Parent.prototype.getValue = function () {
  console.log(this.val);
};

function Child(value) {
  Parent.call(this, value);
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const child = new Child(1);

child.getValue(); // 1
child instanceof Parent; // true

var index = 1;
function myInstanceof(left, right) {
  let prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    index++;
    console.log('index===>', index);
    if (left === null || left === undefined) return false;
    if (prototype === left) return true;
    left = left.__proto__;
  }
}
```
