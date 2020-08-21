## 性能优化篇
* 减少请求
* 减小资源体积
* 加快首屏时间

## 减少请求
* 使用`http2`，复用`tcp`连接
* 合理使用缓存

## 减小资源体积
* `gzip` 压缩文本
* 减少图片体积
  - 响应式图片 `srcset`和`size`
  - 使用 `webp` 格式
  - 压缩`png`
* 减小js提交
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
* 使用`SSR`
  - `react`使用`renderToString`
  - `nextjs`
* 减少重排和重绘
  - `dom`操作离线，`DocumentFragment`，`display: none`
  - 使用`class`代替`style`
  - 使用`transform`,`filter`,`opacity`,`will-change`开启`GPU`加速
* 使用动态`import()`或`require.ensure`按需加载
