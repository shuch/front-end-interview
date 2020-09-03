## loader原理
解析文件依赖，利用`ast`将代码转换为另一份代码

## plugin原理
核心是`tapable`事件流，利用发布订阅模式，通过在`hooks`中订阅`webpack`编译过程的事件，来改变输出结果。

## loader 与 plugin 区别
* loader 用于文件格式转换
* plugin 用于将打包结果进行处理，压缩，文件提取
