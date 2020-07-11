# 深克隆

深度优先遍历
```js
function deepclone(target) {
  const obj = {};
 
  if (target instanceof Date) {
    return new Date(target);
  }
 
  for (attr in target) {
    if (target.hasOwnProperty(attr)) {
      if (typeof target[attr] === 'object') {
        obj[attr] = deepclone(target[attr]);
      } else if (typeof target === 'function') {
        obj[attr] = target.constructor();
      } else {
        obj[attr] = target[attr];
      }
    }
  }

  return obj;
}

```

## 验证
```js
var a = {
  a: 2,
  b: {type: 1},
  c: ƒunction () { console.log(2) },
  d: new Date(),
  e: Symbol(1),
  f: null,
  g: undefined,
}

var b = deepClone(a)
// a: 2
// b: {type: 1}
// c: ƒ ()
// d: Sat Jun 20 2020 22:17:39 GMT+0800 (中国标准时间) {}
// e: Symbol(1)
// f: null
// g: undefined

a.b = {};// {}
b.b // {type: 1}

```
