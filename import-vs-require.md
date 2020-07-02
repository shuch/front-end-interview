## `import`
`es6` 版本引进的模块化方案，相当于结构赋值

## `require`
`commonjs`模块化方案，最初在`nodejs`中使用，相当于值拷贝

## 比较
* `import`是编译时输出，静态，输出的是值的引用，内存地址相同
* `require`在运行时加载，是动态的，输出的是值的拷贝，内存地址不同

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

## 模块循环引用
`commmonjs`循环引用只会引入已经执行的部分，等引入部分执行完后，在继续往下执行



```js
// a.js
exports.done = false;
var b = require('./b.js');
console.log('在 a.js 之中，b.done = %j', b.done);
exports.done = true;
console.log('a.js 执行完毕');

// b.js
exports.done = false;
var a = require('./a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');


// main.js
var a = require('./a.js');
var b = require('./b.js');

console.log('在 main.js 之中, a.done=%j, b.done=%j', a.done, b.done);
// 在 b.js 之中，a.done = false
// b.js 执行完毕
// 在 a.js 之中，b.done = true
// a.js 执行完毕
// 在 main.js 之中, a.done=true, b.done=true
```

过程：
1. `main.js`执行第一行，引入`a.js`
2. 执行`a.js`输出`done=false`执行到第二行引入`b.js`，开始执行`b.js`
3. `b.js`引入`a.js`，循环引用，只引入`a.js`已经执行的部分`exports.done = false;`,输出`a.done=false`，继续往下执行
4. `b.js`执行完毕，回到`a.js`继续执行，此时输出`b.done=true`，执行完毕
5. `a.js`执行完毕，回到`main.js`，忽略第二行，输出缓存中的`a=true`和`b=true`


`es modules`循环引用在定义之前使用，可能会报错
```js
// bar.js
import { foo } from './foo'
console.log(foo);
export let bar = 'bar'


// foo.js
import { bar } from './bar'
console.log(bar);
export let foo = 'foo'

// main.js
import { bar } from './bar'
console.log(bar)
```

过程：
1. `main.js`引入`bar`
2. `bar.js` 引入`foo`
3. `foo.js` 引入`bar`，没有找到`bar` 定义，输出`undefined`
4. 回到`bar.js`输出`foo`
5. 回到`main.js`输出`bar`

## 参考
* [CommonJS 和 ES6 Module 究竟有什么区别？](https://juejin.im/post/5e5f10176fb9a07cd443c1e2)
* [Module加载实现](https://es6.ruanyifeng.com/#docs/module-loader)
* [深入 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394)
* [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
* [代码实现](https://github.com/shuch/blog/tree/master/module)
