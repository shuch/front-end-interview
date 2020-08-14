# 深克隆
方法一：

```js
JSON.parse(JSON.stringfy(obj));
```

方法二：深度优先遍历(递归版)
```js
function deepclone(target, hash = new WeakMap()) {
  if (typeof target !== 'object') {
    return target;
  }
  
  if (target === null) {
    return target;
  }
  
  if (target instanceof Date) {
    return new Date(target);
  }
  
  if (target instanceof RegExp) {
    return new RegExp(target);
  }
  // 循环引用
  if (hash.has(target)) {
    return hash.get(target);
  }

  var clone = Array.isArray(target) ? [] : {};
  hash.set(target, clone);
 
  var keys = Reflect.ownKeys(target);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var attr = target[key];
    clone[key] = deepClone(attr, hash);
  }

  return clone;
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
var obj = {
    a: 0,
    b: 'string',
    c: false,
    d: null,
    e: undefined,
    [Symbol(1)]: 1,
    f: {
        f1: 11,
        f2: 'f2',
    },
    g: [1,2,3],
    h: new Date(),
    i: /abc/,
    j: function(a) {
        return a+a;
    },
};

obj.k = obj;
deepClone(obj);

```

## 问题
* 如果一个对象有循环引用，则递归会进入死循环，引起调用栈溢出错误。如`var a = {}; a.b = a;`
  - `hash`表：引入`weakmap`，缓存克隆过的`attr`，存在就使用缓存。
  - 同时解决引用丢失问题：两个属性引用同一个对象
  - 可以将深度优先的递归方式改用`while`循环处理

## 总结
* `JSON`深克隆简单，但无法保证对象子类型`function,array`
* 深度优先遍历可以克隆所有的对象，当嵌套层数过大，容易出现调用栈溢出
* 广度优先遍历可以解决递归调用栈过大的问题

## 参考
[面试题之-深拷贝](https://sobird.me/interview-question-deepclone.htm)
