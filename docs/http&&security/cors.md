# CORS

CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。

## 为什么要发预检请求

我们都知道浏览器的同源策略，就是出于安全考虑，浏览器会限制从脚本发起的跨域 HTTP 请求，像 XMLHttpRequest 和 Fetch 都遵循同源策略。

浏览器限制跨域请求一般有两种方式：

1. 浏览器限制发起跨域请求
2. 跨域请求可以正常发起，但是返回的结果被浏览器拦截了

**一般浏览器都是第二种方式限制跨域请求，那就是说请求已到达服务器，并有可能对数据库里的数据进行了操作，但是返回的结果被浏览器拦截了，那么我们就获取不到返回结果，这是一次失败的请求，但是可能对数据库里的数据产生了影响。**

为了防止这种情况的发生，规范要求，对这种可能对服务器数据产生副作用的 HTTP 请求方法，浏览器必须先使用 OPTIONS 方法发起一个预检请求，从而获知服务器是否允许该跨域请求：如果允许，就发送带数据的真实请求；如果不允许，则阻止发送带数据的真实请求。

## 什么时候发预检请求

### 简单请求

> 以 Ajax 为例，当满足以下条件时，会触发简单请求

1. 使用下列方法之一：

- GET
- HEAD
- POST

2. HTTP 的头信息不超出以下几种字段

- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain

3. Content-Type 的值仅限于下列三者之一

- text/plain
- multipart/form-data
- application/x-www-form-urlencoded

> 请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器
> XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问

### 复杂请求

> 对于复杂请求来说，首先会发起一个预检请求，该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。

## 注意事项

[参考](https://juejin.im/post/6844903748288905224)

(一) 当前端配置 withCredentials=true 时, 后端配置 Access-Control-Allow-Origin 不能为\*, 必须是相应地址
(二) 当配置 withCredentials=true 时, 后端需配置 Access-Control-Allow-Credentials
(三) 当前端配置请求头时, 后端需要配置 Access-Control-Allow-Headers 为对应的请求头集合
(四) 浏览器端需要设置响应头的 Access-Control-Allow-Methods，Access-Control-Allow-Headers，Access-Control-Allow-Origin 等字段，指定允许的方法，头部，源等信息。
请求分为简单请求和非简单请求，非简单请求会先进行一次 OPTION 方法进行预检，看是否允许当前跨域请求。

[参考](http://www.ruanyifeng.com/blog/2016/04/cors.html)
