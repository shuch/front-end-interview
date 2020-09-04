## 多进程
虽然`node`和浏览器是多线程的，但是`js`解释引擎是单线程的，`node`没有多线程模式，只能通过开启多进程方式模拟多线程。

默认情况下，node一个进程会开启7个线程，包括执行代码的主线程，垃圾回收线程，如果有`IO(fs,dns)`操作或计算密集操作`zlib,crypto`会变成11个线程。

通过`process.env.UV_THREADPOOL_SIZE = 64`来调整默认线程数。

为了提高多核`CPU`利用率，`node` 提供`child_process`和`cluster`两个模块开启多进程。

## 开启进程方法
* `child_process`衍生子进程
  - `spawn`可以执行操作系统命令，返回输入输出流
  - `exec`开启`shell`模式，解析参数，以回调函数形式，返回输入输出流
  - `execFile`命令格式和`spawn`相同， 以回调函数形式，返回输入输出流，没有shell解析，性能和安全性比`exec`高
  - `fork`建立主进程和子进程的通信通道，`send`发送，`message`事件接收数据
* `cluster`主从进程

## `spawn`
```js
const { spawn } = require('child_process');
const child = spawn('ls', ['-l']);

child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data) {
  console.log('spawn', data);
})
```

## `exec`
```js
const {exec} = require('child_process');

exec('ls -l', function(error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
  }
  console.log('child process stdout', stdout);
});
```

## `execFile`
```js
const {execFile} = require('child_process');

execFile('ls', ['-l'], function(error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
  }
  console.log('execFile stdout', stdout);
})
```

## `fork`
`fork.js`
```javascript
const childProcess = require('child_process');

// 端口相同
const netConnect = childProcess.fork('./fork-child.js');
netConnect.send({ hello: 'I am parent'});

netConnect.on('message', (message) => {
  console.log('parent got message', message);
})
```
`fork-child.js`
```javascript
process.on('message', (message) => {
  console.log('child got message', message);
});

process.send({ hello: 'I am child' });
```

## `cluster`模式
`node` 对 `fork`方法封装成为`cluster`块，利用多核系统优势，创建多个工作进程，共享同一个端口号，实现负载均衡。
```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;


if (cluster.isMaster) {
  process.title = 'node 主进程';
  console.log(`主进程 ${process.pid} 正在运行`);
  for (let i = 0; i < numCPUs; i++) {
    // 复制 worker 进程
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是 HTTP 服务器。
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello World from ${process.pid}`);
  }).listen(8000);
  process.title = 'node 工作进程'
  console.log(`工作进程 ${process.pid} 已启动，父进程：${process.ppid}`);
}

process.on('exit', () => {
  console.log('主进程退出');
})
```

## 参考
* [Node.js中的child_process及进程通信](https://byvoid.com/zhs/blog/node-child-process-ipc/)
* [Node.js进程通信模块child_process](http://blog.fens.me/nodejs-child-process/)
* [cluster_how_it_works](https://nodejs.org/api/cluster.html#cluster_how_it_works)
* [真-Node多线程](https://juejin.im/post/6844903775937757192)
