## `XMLHttpRequest`
`XMLHttpRequest`异步发送`http`请求，监听`onreadystatechange`，`readyState`五种状态
* UNSENT 0，`XMLHttpRequest`已创建，没有调用`open`，请求还未发送
* OPENED 1，`open`被调用，请求已经发送，`headers`还未设置，`send`未调用
* HEADERS_RECEIVED 2，`send`被调用，请求发送出去，响应头已经收到
* LOADING 3，已经收到部分数据，`responseText`不完整
* DONE 4，数据下载完成
