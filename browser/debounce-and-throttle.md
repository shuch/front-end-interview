## 防抖和节流
控制事件触发的频率

## 防抖`debounce`
在多次触发某一个函数时，以最后一次触发时间为准，延迟执行一次。

```js
function debounce(fn, delay, immediate) {
  var timer;
  return function() {
    /* 1 */
    var context = this;
    var args = arguments;
    clearTimeout(timer);

    /* 2 */
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
1. 缓存函数运行时的调用的`this`
2. 为了实现第一次触发事件就执行函数，加了<font style="color: #0ABF5B">immdiate</font>

测试
```js
document.addEventListener('scroll', betterFn)
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000)
// 停止滑动 1 秒后执行函数 () => console.log('fn 防抖执行了')
```

## 节流`throttle`
跟防抖不同，节流是在某一个时间段，确保函数执行一次。

```js
function throttle(fn, threshold) {
  var timer;

  return function() {
    var context = this;
    var args = context;

    if (timer) {
      return;
    }

    timer = setTimeout(function() {
      fn.apply(context, args);
      timer = null;
    }, threshold);
  }
}

```

说明：
1. 当函数调用距离上一次的时间间隔大于等于`delay`时，执行函数。
2. 若只调用了一次，确保函数在`delay`后执行。

## 应用
* 浏览器的高频事件`resize, scroll, touchmove, mousemove`
* 用户触发事件`input onchange`搜索

## 参考
* [Debounce 和 Throttle 的原理及实现](https://cloud.tencent.com/developer/article/1437184)
