## 原理
自动执行`generator`的`next`,在异步操作执行完毕，自动交回执行权。

```js
function run(gen) {
  var iterator = gen();
  
  // 基于promise
  function next(data) {
    var result = iterator.next(data);
    if (result.done) {
      return result.value;
    }
    result.value.then((data) => {
      next(data);
    });
  }

  next();
}
```
使用
```js
var p1 = new Promise(resovle => setTimeout(resolve(1), 100));
function* a() {
    var b = yield p1;
    console.log('b', b);
}
run(a);
```

## `async`和`await`
ES7中引入`async`和`await`，将`generator`的`*`替换成`async`，`yield`换成`await`，
改进了`generator`:
* <b>内置执行器</b>。不需要`run`函数就可以自动暂停和执行。
* <b>返回值是`promise`</b>。相比于`generator`返回`iterator`，使用更加方便。
* <b>更加语义化</b>。`async`表示整个函数是异步，`await`表示要等到执行完成



## 参考
[async/await 原理及执行顺序分析](https://juejin.im/post/5dc28ea66fb9a04a881d1ac0)
