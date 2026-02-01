## loader原理
解析文件依赖，利用`ast`将代码转换为另一份代码
例如css-loader,style-loader

| loader   | 作用 | 解释 |
| -------- | ---------- | ---------| 
| css-loader| 解析。负责处理 CSS 中的 @import 和 url() 等语句，将 CSS 文件转换成 CommonJS 模块（即变成 JS 字符串）。     | 把 CSS 代码读进 JS 里。|
| style-loader | 注入。负责将 css-loader 处理后的内容以 <style> 标签的形式插入到 HTML 文档的 <head> 中。       | 把读到的 CSS 贴到网页上让它生效。”|

## plugin原理
核心是`tapable`事件流，利用发布订阅模式，订阅`webpack`编译过程的`hooks`事件，在特定时机（如打包开始、模块编译完成、输出到本地磁盘）来改变输出结果。

## loader 与 plugin 区别
* loader 用于单个文件格式转换（sass转css或处理图片），modules.rules定义
* plugin 用于将打包结果进行处理，压缩，文件提取，如MiniCssExtractPlugin，将css提取为独立文件。

## 示例
```
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```
