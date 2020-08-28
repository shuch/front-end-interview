## `node`进程间通信
* 标准输入、输出流`stdin`、`stdout`传递`json`，最直接，适合父子进程间通信，不能跨应用和机器
* `IPC`进程间通信，最地道，适合子进程间通信，不能跨应用和机器
* 网络`socket`通信，最通用，跨机器通信，有网络开销
* 消息队列，消息中间件，最强大，解决复杂场景

## 输入输出流
`spawn.js`
```js
const { spawn } = require('child_process');
const child = spawn('node', ['./spawn-child.js']);

// parent process write
child.stdin.write(JSON.stringify({
  type: 'handshake',
  payload: 'hello',
}));

// parent process receive
child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data) {
  console.log('parent receive:', data);
})
```
`spawn-child.js`
```js
// child process receive
process.stdin.on('data', function(chunk) {
  var str = chunk.toString();
  str = JSON.parse(str);
  switch(str.type) {
    case 'handshake':
      process.stdout.write(JSON.stringify({
        type: str.type,
        payload: 'am child process',
      }));
      break;
    default:
      break;
  }
})
```

## ipc管道
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

## 参考
* [Nodejs进程间通信](https://cloud.tencent.com/developer/article/1444616)
