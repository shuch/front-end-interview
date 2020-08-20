## `node`进程间通信
* 标准输入、输出流`stdin`、`stdout`传递`json`，最直接，适合子进程间通信，不能跨机器
* `IPC`通信，最地道，适合子进程间通信，不能跨机器
* 网络`socket`通信，最通用，跨机器通信，有网络开销
* 消息队列，消息中间件，最强大，解决复杂场景

## 参考
* [Nodejs进程间通信](https://cloud.tencent.com/developer/article/1444616)
