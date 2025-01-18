## 防抖和节流
控制事件触发的频率

## 防抖`debounce`
在多次触发某一个函数时，以最后一次触发时间为准，延迟执行一次。

```js
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

测试
```js
document.addEventListener('scroll', betterFn)
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000)
// 停止滑动 1 秒后执行函数 () => console.log('fn 防抖执行了')
```

## 节流`throttle`
跟防抖不同，节流是在某一个时间段，确保函数执行一次。

```js
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
```

说明：
1. 当函数调用在`interval`间隔内触发时，不执行函数。
2. 若只调用了一次，确保函数在`interval`后执行。

## 应用
* 浏览器的高频事件`resize, scroll, touchmove, mousemove`
* 用户触发事件`input onchange`搜索

## 参考
* [Debounce 和 Throttle 的原理及实现](https://cloud.tencent.com/developer/article/1437184)
