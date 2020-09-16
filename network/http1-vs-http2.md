## http版本
* http1.0
* http1.1
* http2.0

## http1.0 vs http1.1
* http1.1长连接 keep-alive 默认开启，http1.0需要显示声明

## http1.1 vs http2.0
* 多路复用
  - 共用一个tcp连接
  - 多个资源并发请求
* server push
* 头部压缩
