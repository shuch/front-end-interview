## `import`
`es6` 版本引进的模块化方案，相当于结构赋值

## `require`
`commonjs`模块化方案，最初在`nodejs`中使用，相当于值拷贝

## 比较
* `import`是编译时引入，静态，输出的是值的引用，内存地址相同
* `require`在运行时解析，是动态的，输出的是值的拷贝，内存地址不同
```js
// count.js
exports.count = 1;

setTimeout(() => {
  console.log('incre count', ++exports.count);
}, 1000);
```

```js
import count from './count';

console.log('es-moudle', count);// 1

setTimeout(() => {
  console.log('es-module after', count);// 2
}, 2000);
```

```js
// commonjs.js
const { count } = require('./count');
// const a = require('./esm-export');

console.log('cjs', count); //1
setTimeout(() => {
  console.log('cjs after', count);// 1
}, 2000);
```


参考[module](https://github.com/shuch/blog/tree/master/module)
