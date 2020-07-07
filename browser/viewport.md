## `viewport`
`viewport`是浏览器窗口不需要滚动就能一次看到的一块区域，通过以下代码设置。
```html
<meta name="viewport" content="width=device-width, initail-scale=1, maxium-scale=1" />
```

#### `width`
移动端设备 `width` 默认值 980
* 若页面内容宽度小于980，则`width=980`
* 若页面内容宽度大于980，则`width=实际宽度`

#### `initail-scale`
如果希望用户看到页面时不被放大，可以设置初始缩放比为1

#### 最大缩放比
如果不希望用户缩放，设置最大缩放比为1

## 分类
* `visual viewport`是浏览器可见部分，可以理解为画框内的区域。
```js
window.innerWidth
window.innerHeight
```
* `layout viewport`是实际页面所占区域，通常大于`visual viewport`。
```js
document.documentElement.clientWidth
document.documentElement.clientHeight
```

## 参考
* [Understanding The Viewport Meta Tag](https://paulund.co.uk/understanding-the-viewport-meta-tag)
* [understanding-viewport](http://andreasbovens.github.io/understanding-viewport/)
* [A tale of two viewports — part two](https://www.quirksmode.org/mobile/viewports2.html)
