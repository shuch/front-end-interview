## 题目一

```
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```
结果：
```
1
```

## 分析：
Promise.then()或 Promise.catch() 参数有两个特点：
1. 类型默认是函数
2. 有返回值

* 如果参数不是函数，则当前的`then`无法形成链式调用，相当于独立的`promise`，不会对后续的`promise`产生作用，
此时`.then(2)`对后面的两个then不构成影响。

* 如果满足第一条，但函数没有返回值，此时 `promise` 无法将返回值传递个下一个`then`。这里的 `then(Promise.resolve(3))` 没有`return`语句，
后面的`then`也无法接受到值。

* `then` 第一个函数抛出异常，第二个参数捕获不到，但 `catch` 可以捕获到
