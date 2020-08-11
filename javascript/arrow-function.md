# 普通函数和箭头函数的区别
## this指向
普通函数：
* 普通函数`this`指向函数调用者
* 没有调用者，`this`执行 `window` 或 `undefined`(严格模式下)
* 使用`call`,`apply`,`bind`调用时，指向第一个参数

箭头函数：
* `this`指向函数的父级作用域
* 使用`call`,`apply`,`bind`调用时，第一个参数失效

```javascript
var a = () => { console.log(this) }
a(); // window

var obj = {};
a.call(obj);// window
```

## prototype原型
普通函数有构造函数 `constructor` 和原型 `prototype`，而箭头函数没有 `constructor`和`prototype`，换而言之，箭头函数无法使用 `new` 
```javascript
function f1() {
  console.log('f1');
}

var f2 = () => {
  console.log('f2');
}

f1.prototype // {constructor: ƒ}
f2.prototype // undefined

new f2() // Uncaught TypeError: f2 is not a constructor

```

> `new`的本质是将新对象的 `__proto__` 属性指向构造函数的 `constructor.prototype`，再绑定 `arguments` 返回新对象。
详情参考 [JavaScript原型继承原理](https://github.com/shuch/blog/issues/11#issue-598184637)

## arguments 参数
普通函数有 `arguments`而箭头函数没有，取而代之箭头函数可以使用`...args`来代替`arguments`

```javascript
function f3 (a) { console.log(arguments) }
var f4 = (b) => console.log(arguments)

f3(1) // Arguments [1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
f4(1) // Uncaught ReferenceError: arguments is not defined

var f5 = (...args) => console.log(args)
f5(1, 2) // [1, 2]
```

> `args` 可以任意指定

## yield 关键字
普通函数可以使用 `yield`，而箭头函数不可以，进而不能用作 `generators`
```javascript
function* fun1() {
  yield 1;
}

var fun2 = () => yield 1; // Uncaught SyntaxError: Unexpected number
fun1().next() // {value: 1, done: false}
```

## 总结
* 普通函数指向函数调用者
* 箭头函数指向函数声明环境
