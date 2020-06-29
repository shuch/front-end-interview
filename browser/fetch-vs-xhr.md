# `xhr`
最基本的网路异步请求方式，特点是
* 不刷新网页，更新数据
* 页面加载完成后，异步获取数据

# `fetch`
提供一种基于`promise`的方式异步请求网络资源，用来代替`xhr`，简化请求
* `response status` 400或500会`resove(false)`，网络异常会`reject`
* `creditials: cors`支持跨域请求发送`cookie`，默认不会发送和接受`cookie`
* 不支持取消请求

参考[异步请求xhr、ajax、axios与fetch的区别比较](https://www.cnblogs.com/weiqinl/p/11279950.html)
