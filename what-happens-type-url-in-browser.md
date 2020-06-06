## 用户在浏览器地址栏输入URL发生了什么

### 浏览器查找本地缓存
* 根据请求查找本地缓存，缓存命中就使用本地文件
* 没有找到文件

### 查询DNS
* 首先在浏览器缓存查询DNS
* 如果浏览器没有找到，则查找操作系统的缓存（host文件）
* 缓存如果都没有，就查找dns服务器
* 如果找到了返回一个IP地址，找不到就会报错

### 浏览器和服务器建立连接
* 根据IP和端口号建立与服务端的tcp连接
* 发送请求头信息


### 服务器返回HTML
* 解析请求头中的字段，检查资源是否过期。
* 如果有if-modify-since，则检查资源在这个时间点后是否有更新
* 如果有if-none-match，则比对资源hash值是否改变
* 若资源都没有变换，则返回304状态码，否则返回新的资源，以及缓存时间


### 浏览器解析HTML
* 浏览器解析HTML，生成DOM树
* 解析到CSS，生成CSSOM
* DOM和CSSOM组成渲染树，浏览器渲染页面