## 缓存分类
存储位置划分
- `Service Worker` 客户端代理缓存
- `Memory Cache` 内存缓存，会话期内效期
- `Disk Cache` 磁盘缓存，遵循协商缓存和强缓存


## 强缓存
- 在上次请求结束，响应头会设置`cache-control`
- 发起请求时，浏览器先看资源是否在有效期内，在有效期内使用缓存，不在有效期内，走协商缓存

|response-header|value|含义|
| -- | -- |--|
|cache-control|max-age=31536000,public|一年内有效，允许代理服务器缓存|
|cache-control|max-age=31536000,private|一年内有效，不允许代理服务器缓存|
|cache-control|max-age=31536000,immutable|一年内有效，有效期内直接使用缓存，不需要服务器重新验证|
|cache-control|max-age=1000,must-revalidate|一分钟内有效，有效期过后需要服务器重新验证新鲜度|
|cache-control|no-cache|客户端不使用强制缓存，而走协商缓存|
|cache-control|no-store|客户端不缓存，每次请求服务器|

响应头
- `Expires`(http 1.0)
- `Cache-Control`(http 1.1)

## 协商缓存
- 请求时资源过期，向服务端发起去请求，验证资源新鲜度
- 如果资源未修改，则`http`状态码返回`304`，即`Not-Modified`
- 资源已更新，返回新的资源，并设置`cache-control`

响应头和请求头
- `Last-Modified`和`If-Modified-Since`
- `Etag`和 `If-None-Match`


## 优先级
- 先匹配强缓存，没有命中，匹配协商缓存。
- `Cache-Control`优先于`Expires`
- `Etag`优先于`Last-Modified`
