## 性能优化篇
* 减少请求
* 减小资源体积
* 加快首屏时间

## 减少请求
* 使用`http2`，复用`tcp`连接
* 合理使用缓存
  - 强缓存和协商缓存
  - `service worker`缓存字体，样式，图片

## 减小资源体积
* `gzip` 压缩文本
* 减少图片体积
  - 响应式图片 `srcset`和`size`
  - 使用 `webp` 格式
  - 压缩`png`
* 减小js体积
  - 压缩 `uglifyjs`
  - 使用`webpack`中的`tree-shaking`去掉不必要的代码

## 加快首屏时间
* 使用`cdn`
* `css`放头部，`js`放底部
* 字体文件预加载
```js
<link rel='preload' href="https://shuch.im/font.woff2" />
```
* 域名预解析
```js
<link rel='dns-prefetch' href="https://github.githubassets.com"/>
```
* 首屏使用`SSR`
  - `react`使用`renderToString`
  - `nextjs`
* 减少重排和重绘
  - `dom`操作离线，`DocumentFragment`，`display: none`
  - 使用`class`代替`style`
  - 使用`transform`,`filter`,`opacity`,`will-change`开启`GPU`加速

* 按需加载
  - 动态`import()`或`require.ensure`
  - 页面`IntersetionObserver`
* 字体异步加载 `font-display: swap`

## 参考
[Front-End Performance Checklist 2020](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/)
