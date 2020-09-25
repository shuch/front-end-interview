## `promise` 实现

基于队列的事件订阅和发布原理

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

## `promise.all`实现

```js
function promiseAll(list = []) {
  return new Promise((resolve, reject) => {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      list[i].then(res => {
        result.push(res);
        if (result.length === list.length) {
          resolve(result);
        }
      }).catch(rej => {
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

let promise3 = Promise.reject('err');

promiseAll([promise1, promise2]).then(res => console.log('res', res))
// res ["定时器1", "定时器2"]

promiseAll([promise1, promise2, promise3]).then(res => console.log('res', res))
// Promise {<rejected>: "err"}
```

## `promise.race`实现
```js
function promiseRace(list) {
  return new Promise((resove, reject) => {
    list.forEach(promise => {
      promise.then(resove, reject);
    });
  });
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(200), 1500);
});

promiseRace([promise1, promise2]).then((res) => {
  console.log(res);
});
```

## `promise.finally`实现
```js
Promise.prototype.finally = function(callback) {
  var constructor = this.constructor;
  return this.then(function(value) {
    return constructor.resolve(callback()).then(function() {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function() {
      throw reason;
    });
  })
}
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

## `then`第二个参数和`catch`区别
* `promise`变成`fulfilled`，如果在`then`第一个参数中报错，第二个参数捕获不到，只有后面的`catch`能捕获到。
* `promise`变成`rejected`，由于就近原则，`then`的第二个参数就能捕获到。

```js
const promise = new Promise((resolve, rejected) => {
    throw new Error('test');
});

// 此时只有then的第二个参数可以捕获到错误信息
promise.then(res => {
    //
}, err => {
    console.log(err);
}).catch(err1 => {
    console.log(err1);
});

// 此时只有then的第二个参数可以捕获到Promise内部抛出的错误信息
promise.then(res => {
    throw new Error('hello');
}, err => {
    console.log(err);
}).catch(err1 => {
    console.log(err1);
});


```


## 参考
[图解 Promise 实现原理（一）—— 基础实现](https://zhuanlan.zhihu.com/p/58428287)
