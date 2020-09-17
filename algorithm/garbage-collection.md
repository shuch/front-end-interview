## 垃圾回收
* 引用计数法，记录对象被引用的次数，清除引用次数为零的对象。
* 标记清除法，从根节点出发，标记未被引用的对象，定期清除。

## 引用计数法
```js
function count() {
  const a = {};// 引用类型变量，引用次数为0
  let b = a;   // a的引用次数变为1
  let c = a;   // a的引用次数变为2
  b = {};      // b不再引用a a引用次数减1
  c = null;    // c不再引用a a引用次数为0，垃圾回收
}
```

循环引用问题

```js
function loop() {
  let a = {};
  let b = {};
  a.prop = b;
  b.prop = a;// 循环引用，永远不会清零
}

```
手动释放引用
```js
a.prop = null;
b.prop = null;
```

## 标记清除法
* 为了解决循环引用无法清除的问题，引入标记清除法。
* 从跟节点触出发，标记未被引用的对象，定期清除。

## 处理内存泄漏
`WeakMap`和`WeakSet`存储键值对，垃圾回收机制不考虑`WeakMap`和`WeakSet`本身的引用，只要存储的对象引用消失，对象就可以被垃圾回收。
```js
var a = {}; // 引用类型，引用次数为 0
var wm = new WeakMap();
wm.set(a, 'object');  // 垃圾回收机制不考虑 wm 对 a 的引用
a = null;// 引用次数为 0，回收 a
wm.get(a)// undefined
```
