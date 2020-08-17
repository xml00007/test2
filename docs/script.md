## defer 属性

为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对`<script>`元素加入defer属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。

```js
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

上面代码中，只有等到 DOM 加载完成后，才会执行a.js和b.js。

defer属性的运行流程如下:

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有defer属性的`<script>`元素。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`元素加载的外部脚本。
4. 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。

>有了defer属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的脚本文件在DOMContentLoaded事件触发前执行（即刚刚读取完`</html>`标签），而且可以保证执行顺序就是它们在页面上出现的顺序。

对于内置而不是加载外部脚本的script标签，以及动态生成的script标签，defer属性不起作用。另外，使用defer加载的外部脚本不应该使用document.write方法。

## async 属性

解决“阻塞效应”的另一个方法是对`<script>`元素加入async属性。

```js
<script src="a.js" async></script>
<script src="b.js" async></script>
```

async属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有async属性的script标签。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`标签中的外部脚本。
4. 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
5. 脚本执行完毕，浏览器恢复解析 HTML 网页。

>async属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用async属性的脚本文件里面的代码，不应该使用document.write方法。

### 结论

defer属性和async属性到底应该使用哪一个？

- 一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，后者不起作用，浏览器行为由async属性决定。

- async 脚本在script文件下载完成后会立即执行,并且其执行时间一定在 window的load事件触发之前。这意味着多个async脚本很可能不会按其在页面中的出现次序顺序执行。

- 与此相对，浏览器确保多个 defer 脚本按其在HTML页面中的出现顺序依次执行,且执行时机为DOM解析完成后，document的DOMContentLoaded 事件触发之前。

### 参考 

- [解决“阻塞效应”-解决脚本文件下载阻塞网页渲染的问题](https://www.cnblogs.com/whdaichengxu/p/11302048.html)
- [HTML5`<script>`元素async,defer异步加载](https://www.cnblogs.com/xiangxiao/p/6822782.html)

## preload

> preload 不会阻塞 windows 的 onload 事件，除非，preload资源的请求刚好来自于会阻塞 window 加载的资源。

```js
var link = document.createElement("link");
link.href = "myscript.js";
link.rel = "preload";
link.as = "script";
document.head.appendChild(link);
```

上面这段代码可以让你预先加载脚本，下面这段代码可以让脚本执行

```js
var script = document.createElement("script");
script.src = "myscript.js";
document.body.appendChild(script);
```

```html
<link rel="preload" as="script" href="async_script.js"
      onload="var script = document.createElement('script'); script.src = this.href; document.body.appendChild(script);">
```

### 参考

- [关于Preload, 你应该知道些什么？](https://www.jianshu.com/p/24ffa6d45087)

- [使用`<link rel="preload">`进行预加载](https://www.jianshu.com/p/e70d015554e5)
