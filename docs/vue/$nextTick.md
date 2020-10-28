[官网介绍](https://cn.vuejs.org/v2/api/#Vue-nextTick)

1. 更新数据后，想要使用 js 对新的视图进行操作时。
2. 如果要在 created()钩子函数中进行的 DOM 操作，由于 created()钩子函数中还未对 DOM 进行任何渲染，所以无法直接操作，需要通过\$nextTick()来完成。

```js
created () {
    this.$nextTick(()=>{
        this.$refs.myP.innerText = "1111"
    })
}
```

一些深入的思考
https://www.jianshu.com/p/7861c7abd717
https://blog.csdn.net/a380776767/article/details/80050332
