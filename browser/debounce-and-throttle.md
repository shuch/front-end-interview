## 防抖和节流
控制某个事件触发的频率

## 防抖`debounce`
```js
function debounce(fn, delay, immediate) {
  var timer;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);

    /* 1 */
    if (immediate && !timer) {
      fn.apply(context, args);
    }

    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

```
说明
1. 为了实现第一次触发事件就执行函数，加了`immdiate`

测试
```js
document.addEventListener('scroll', betterFn)
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000)
// 停止滑动 1 秒后执行函数 () => console.log('fn 防抖执行了')
```

## 节流`throttle`
跟防抖不同，节流是在某一个时间点后，确保执行一次。

```js
function throttle(fn, delay) {
  var startTime = 0;
  
  return function() {
    var curTime = Date.now();
    if (curTime - startTime > delay) {
      fn.apply(this, arguments);
      startTime = curTime;
    }
  }
}

```
