# BFC

[参考](https://juejin.im/post/68449035447267491980)

BFC（Block Formatting Context）直译为“块级格式化范围”。是 W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用
当涉及到可视化布局的时候，Block Formatting Context 提供了一个环境，HTML 元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成 BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个 BFC 就是一个独立的行政单位的意思。
也可以说 BFC 就是一个作用范围。可以把它理解成是一个独立的容器，并且这个容器的里 box 的布局，与这个容器外的毫不相干

## 怎样才能形成 BFC

- float 的值不能为 none
- overflow 的值不能为 visible
- display 的值为 table-cell, table-caption, inline-block 中的任何一个
- position 的值不为 relative 和 static
- display 为 flex/inline-flex 的直接子元素
- display 为 grid/inline-grid 的直接子元素

## BFC 的约束规则

- 内部的 Box 会在垂直方向上一个接一个的放置
- 垂直方向的距离有 margin 决定(属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠，与方向无关)
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
- BFC 的区域不会与 float 的元素区域重叠
- 计算 BFC 的高度时，浮动子元素也参与计算
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

## BFC 的作用

1. 不和浮动元素重叠
2. 清除元素内部浮动
3. 防止垂直 margin 重叠
