# 深克隆
方法一：

```js
JSON.parse(JSON.stringfy(obj));
```

方法二：深度优先遍历
```js
function deepclone(target) {
  if (typeof target !== 'object') {
    return target;
  }

  const obj = {};
 
  for (var attr in target) {
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

方法三：广度优先遍历：
```js
function deepCloneBfs(target) {
  var res = {};
  var copyQueue = [res];
  var nodeQueue = [target];

  while (nodeQueue.length) {
    var node = nodeQueue.shift();
    var copy = copyQueue.shift();
    
    for (var attr in node) {
      var value = node[attr];
      if (typeof value === 'object') {
        nodeQueue.push(value);
        copy[attr] = {};
        copyQueue.push(copy[attr]);
      } else {
        copy[attr] = value;
      }
    }
  }

  return res;
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

## 问题
* 如果一个对象有循环引用，则递归会进入死循环，引起调用栈溢出错误。如`var a = {}; a.b = a;`
  - `hash`表：引入`visitedArr`数组，缓存克隆过的`attr`，存在就使用缓存。
  - 同时解决引用丢失问题：两个属性引用同一个对象
* 边界问题，如`array, regex, symbol`没有处理，`es6`新引入`set,map`

## 总结
* `JSON`深克隆简单，但无法保证对象子类型`function,array`
* 深度优先遍历可以克隆所有的对象，当嵌套层数过大，容易出现调用栈溢出
* 广度优先遍历可以解决递归调用栈过大的问题
