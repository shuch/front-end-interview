## `https`
超文本传输协议安全层(`hyper text transfer protocol secure`)，介于`http`和`tcp`之间的一层`ssl`（`socket secure layer`）安全套接字层

## 过程
* 秘钥协商
1. 客户端向服务端发出握手请求，携带一个随机数，通信协议版本
2. 服务端事先向`CA`发送自己公钥，得到数字签名，同时也生成一个随机数，返回给客户端
3. 客户端利用内置`CA`公钥解密数字签名证书，得到服务端的公钥，并验证合法性（颁发机构是否合法，域名是否一致，是否过期）
4. 客户端生成第二个随机数，利用公钥进行加密
5. 服务端利用私钥，解密，得到第三个随机数，并生成一个「会话秘钥」

> `certification authority`
> 三个随机数，是为了保证每次生成的「会话秘钥」都不一样，增加随机性

* 对称加密
1. 客户端利用「会话秘钥」，对传输的数据加密
2. 服务端利用「会话秘钥」，对接受的数据解密

## 特点
* 保密性：非对称加密协商秘钥，对称加密传输密文
* 合法性：对服务端公钥进行数字签名，客户端验证公钥合法性
* 完整性：利用单向`hash`算法，得到定长`hash`值

## 参考
* [如何加密传输和存储用户密码](https://juejin.im/post/6844903604944371726)
* [一次安全可靠的通信——HTTPS原理](https://developers.weixin.qq.com/community/develop/article/doc/000046a5fdc7802a15f7508b556413)
* [SSL/TLS协议运行机制的概述](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)

![一次可靠的通信](https://user-images.githubusercontent.com/29475098/172971666-9c840f8f-58b1-41ca-bf24-aaf9ed8cdec3.png)

