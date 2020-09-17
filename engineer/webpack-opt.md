## `webpack` 4.0优化
* 分包
* 按需加载
* `tree-shaking`

## 分包策略
* 体积大于30kb，单独打一个包
* 页面首屏加载的chunk不大于3个
* 按需加载并发请求chunk不大于5个

## 按需加载
采用动态`import()`实现，核心原理是使用`jsonp`加载

## 参考
[webpack4.x 性能优化](https://juejin.im/post/6844903774310367246)
