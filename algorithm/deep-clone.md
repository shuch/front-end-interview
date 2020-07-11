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

广度优先遍历：
```js


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

## 问题
* 如果一个对象有循环引用，则递归会进入死循环，引起爆栈错误。如`obj.b.a = b`
  可以引入`visitArr`缓存克隆过的`attr`，存在就使用缓存。
* 边界问题，还有`object`类型数据，如`regex,`没有处理









