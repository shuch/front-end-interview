
### 题目一
```
Object.prototype.a = function () {
    console.log('a')
}

Function.prototype.b = function () {
    console.log('b')
}

function F(){}
var f = new F();

f.a(); // a
f.b(); // b is not a function
F.a(); // a
F.b(); // b
```

#### 解析:
1. 先展开 `f` 的原型链

```
f.__proto__ === F.prototype

因为 F.prototype 是一个对象，继承自Object，所以 F.prototype.__proto__ === Object.prototype，由此

f.__proto__.__proto__ === Object.prototype
```
那么 `f.a -> f.__proto__.__proto__.a` 而 `f.b`在原型链上根本没有

2. 展开 `F` 原型链

```
所有function 实例都继承自Function.prototype
F.__proto__ === Function.prototype

同理, Function.prototype 也是一个对象，继承自 Object, 
所以, Function.prototype.__proto__ === Object.prototype

F.__proto__.__proto__ === Object.prototype

```
可以看出 `F.a -> F.__proto__.__proto__.a` `F.b -> F.__proto__.b`

#### 扩展：[`new`操作符做的事情](https://github.com/shuch/blog/issues/11#issue-598184637)
