## 性能优化篇
* 减少请求
* 加快首屏时间

## 减少请求
* 使用`http2`，复用`tcp`连接
* 合理使用缓存

## 加快首屏时间
* 使用`cdn`
* `css`放头部，`js`放底部
* 字体文件预加载`preload`，域名解析预请求`dns-prefetch`
* 使用`SSR`
* 减少重排和重绘
  - `dom`操作离线，`DocumentFragment`，`display: none`
  - 使用`class`代替`style`
  - 使用`transform`,`filter`,`opacity`,`will-change`开启`GPU`加速
* 使用`webpack`中的`tree-shaking`去掉不必要的代码
* 使用`import()`或`require.ensure`按需加载
