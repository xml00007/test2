# Object.defineProperty VS Proxy

上面已经知道 Object.defineProperty 对数组和对象的表现是一致的，那么它和 Proxy 对比存在哪些优缺点呢？

1. Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象。
由于 Object.defineProperty 只能对属性进行劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。而 Proxy 直接代理对象，不需要遍历操作。

2. Object.defineProperty对新增属性需要手动进行Observe。
由于 Object.defineProperty 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用 Object.defineProperty 进行劫持。

也正是因为这个原因，使用vue给 data 中的数组或对象新增属性时，需要使用 vm.$set 才能保证新增的属性也是响应式的。

## Object.defineProperty缺点

+ Object.defineProperty需要遍历所有的属性，这就造成了如果vue对象的data/computed/props中的数据规模庞大，那么遍历起来就会慢很多。
+ 同样，如果vue对象的data/computed/props中的数据规模庞大，那么Object.defineProperty需要监听所有的属性的变化，那么占用内存就会很大。
+ 无法监听es6的Set、WeakSet、Map、WeakMap的变化；
+ 无法监听Class类型的数据；
+ 属性的新加或者删除也无法监听；
+ 数组元素的增加和删除也无法监听。（如果之前对应的索引已经被监听，则删除也能被监听到）


<!-- Object.defineProperty 在数组中的表现和在对象中的表现是一致的，数组的索引就可以看做是对象中的 key 。

通过索引访问或设置对应元素的值时，可以触发 getter 和 setter 方法
通过 push 或 unshift 会增加索引，对于新增加的属性，需要再手动初始化才能被 observe 。
通过 pop 或 shift 删除元素，会删除并更新索引，也会触发 setter 和 getter 方法。
所以， Object.defineProperty 是有监控数组下标变化的能力的，只是vue2.x放弃了这个特性。 -->


(https://www.ctolib.com/topics-142835.html)[https://www.ctolib.com/topics-142835.html]
