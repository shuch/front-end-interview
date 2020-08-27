## 多进程
* 提高单进程下多核`CPU`利用率

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

