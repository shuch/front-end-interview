## `webpack` 4.0优化
* 压缩
* 分包
* 按需加载
* 多进程

## 压缩
```js
optimization: {
  minimizer: {
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: false, // set to true if you want JS source maps
    }),
  },
}
```

## 分包策略
* 体积大于30kb，单独打一个包
* 页面首屏加载的chunk不大于3个
* 按需加载并发请求chunk不大于5个

```js
optimization: {
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: 20, // for HTTP2
    maxAsyncRequests: 20, // for HTTP2
    minSize: 500000, // for example only: choosen to match 2 modules
  },
}
```

## 按需加载
* 配合`react-router`，采用动态`import()`实现，核心原理是使用`jsonp`加载
* `tree-shaking`，利用es6静态分析去处无用代码。

## 多进程
```js
module: {
  rules: [
    'thread-loader',
    {
      loader: 'babel-loader?cacheDirectory',
    },
  ],
}
```

## 参考
[webpack4.x 性能优化](https://juejin.im/post/6844903774310367246)
