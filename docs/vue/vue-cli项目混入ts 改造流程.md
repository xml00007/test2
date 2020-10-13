## 混入 ts 过程记录

1. yarn add typescript --dev
2. yarn add @vue/cli-plugin-typescript --dev

   yarn add vue-class-component --dev
   yarn add vue-property-decorator --dev

## 辅助生成声明文件

yarn add dts-gen -g

https://segmentfault.com/a/1190000011520912

TS (TypeScript)区别于 JS (JavaScript)一个最大的不同是 TS 增加了类型。当一些 TS 代码要使用 JS 包的时候，最好这些 JS 包都有类型介绍，比如这个变量是什么类型，那个函数参数的什么类型，返回什么类型参数等等，这个 Type Declaration File 有点像是 C++的头文件，定义了 JS 包的接口信息，这个文件的后缀是.d.ts

如果让我们从头手写一个 JS 包的.d.ts 文件会比较痛苦，因为 JS 包本身就写得很乱，有定义了很多对象，有时候要理清他们之间的关系就是头疼的事情，特别是如果 JS 包很大的话，那基本上很花时间了。

那么有两个解决方案，在 npm 包管理中，有一类@types/package 的包，就是别人已经写好了的对应 package 的.d.ts 文件。我们只用使用 npm install --save @types/package 就行了。
这个网站能搜到@types 包含了哪些 JS 的包，一些常用的基本都有
https://microsoft.github.io/TypeSearch/
如果这上面没有，一些比较冷门的 JS 包怎么办呢？
那就得自己写，自己写可以参考 TS 官网关于怎么写的说明文档
https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
另外我发现一个很好的工具 dts-gen，
https://github.com/Microsoft/dts-gen
根据它的说明，安装好了之后，它会针对目标 JS 包自动生成一个最基本款的.d.ts 文件，帮你理清目标 JS 包的结构，自己在对于这个文件做进一步的细化和修改。
这个特别好，但是有时候对于一些特别复杂的 JS 包，它会抛出异常，目前看是 bug 了，总之比没有强很多
