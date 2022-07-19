## 编译器 `compiler`
- 将一种语言转化成另外一种语言或同一种语言的不同版本。
- 例如编译器可以将`typescript` 转成浏览器能运行的 `javascript`。
- 或使用`babel`将`ES6`转成兼容性更好的`ES5`

## 填充 `polyfills`
- 一种提供原生浏览器不支持的功能
- 例如`Promise`和`Array.from`在`IE`浏览器上不支持，可以提供一个[`polyfills`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from#polyfill)填充。

## 区别
- 编译器是代码格式转化，不产生新的功能
- 填充是提供本身不具备的能力，使其具备新功能

## 参考
- [Compiling vs Polyfilling](https://medium.com/@harshverma04111989/compiling-vs-polyfilling-a5b592344864)
- [JavaScript Transpilers: What They Are And Why We Need Them](https://www.digitalocean.com/community/tutorials/javascript-transpilers-what-they-are-why-we-need-them)
