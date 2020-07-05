## `promise` 实现
```js
class Promise {
  constructor(fn) {
    fn(this.resolve.bind(this));
  }

  callbacks = [];
  state = 'pending';
  value = null;

  resolve(value) {
    // 发布
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(cb => cb(value));
  }
  
  then(callback) {
    // 订阅
    if (this.state === 'pending') {
      this.callbacks.push(callback);
    } else {
      callback(this.value);
    }
    
    return this;
  }

}
```

## `promise.all`

```js
function promiseAll(promises = []) {
  let result = [];
  function check(resolve) {
    let length = result.length;
    if (length === promises.length) {
      resolve(result);
    }
  }
  return new Promise((resolve, reject) => {
    for (let  i = 0; i < promises.length; i++) {
      let promise = promises[i];
      promise.then(res => {
        result[i] = res;
        check(resolve);
      }, rej => {
        reject(rej);
      });
    }
  })
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('定时器1')
  }, 3000)
});

let promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('定时器2')
  }, 2000);
})
promiseAll([promise1, promise2]).then(res => console.log('res', res))
// res ["定时器1", "定时器2"]
```


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



## 参考
[图解 Promise 实现原理（一）—— 基础实现](https://zhuanlan.zhihu.com/p/58428287)
