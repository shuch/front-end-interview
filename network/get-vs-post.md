## `GET`和`POST`区别
* `get`用于请求资源，`post`用于提交资源
* `get`参数对用户可见，`post`参数不可见
* `get`限制长度(1024b)，`post`不限制
* `get`幂等，`post`不是幂等

## `HEAD`和`OPTIONS`区别
* `head`用于请求资源信息（`Last-Modified`，`Etag`，`Content-Type`）
* `options`用于请求资源支持的方法(`get`,`post`,`delete`)

## 参考
* [9 Method Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)
* [RESTful API methods; HEAD & OPTIONS](https://stackoverflow.com/questions/6660019/restful-api-methods-head-options)
