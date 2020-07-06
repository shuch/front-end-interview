## `require`实现
```js
const path = require('path');
const fs = require('fs');

function req(mod) {
  // 获取文件内容
  const filename = path.join(__dirname, mod);
  const content = fs.readFileSync(filename, 'utf8');
  
  // 包装一个函数
  let fn = new Function(
    'exports',
    'require',
    'module',
    '__filename',
    '__dirname',
    content + '/n return module.exports;'
  );
  
  // 创建 module
  let module = {
    exports: {},
  };
  
  return fn(module.exports, req, module, __filename, __dirname);
}

```

创建文件`a.js`

```js
exports.name = 'this is module a.js';
```
引用模块`a.js`
```js
let a = req('./a.js');
console.log(a.name);// this is module a.js
```

[源代码](https://github.com/shuch/blog/blob/master/module/commonjs/require/customer_require.js)

## 参考
* [JavaScript模块化原理浅析](https://juejin.im/post/5c1083186fb9a049ec6aed5e)
* [你真的懂模块化吗](https://juejin.im/post/5b67c342e51d45172832123d)
* [深入 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394)
