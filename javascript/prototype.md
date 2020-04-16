
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
> 注意： `f.__proto__.__proto__.__proto__ === null`，javascript为了避免 `Object.prototype.__proto__`无限引用， 将`Object.prototype.__proto__` 设为 null

2. 展开 `F` 原型链

```
所有function 实例都继承自Function
F.__proto__ === Function.prototype

同理, Function.prototype 也是一个对象，继承自 Object, 
所以, Function.prototype.__proto__ === Object.prototype

F.__proto__.__proto__ === Object.prototype

```
可以看出 `F.a -> F.__proto__.__proto__.a` `F.b -> F.__proto__.b`

#### 追问
根据上面的条件`Object.a() Object.b() Function.a() Function.b()`会输出什么

分析：
```
Object是一个函数，继承自 Function, 所以
Object.__proto__ === Function.prototype;
而 Function 也是一个函数，继承自己 
Function.__proto__ === Function.prototype
```
你会发现：
```
Object.a -> Object.__proto__.__proto__.a，
Object.b -> Object.__proto__.b，
Funtion.a -> Function.__proto__.__proto__.a
Funtion.b -> Function.__proto__.b
```

#### 追问2
```
var c = 1;
console.a();// a
console.b();// console.b is not a function
c.a();// a
c.b();// c.b is not a function
console.log.a();// a
console.log.b();// b
```
解析：
```
console 是一个对象，继承自 Object, console.__proto__ === Object.prototype

c 是一个基本数据类型的实例，继承自 Number, 那么 c.__proto__ === Number.prototype, 
进而 c.__proto__.__proto__ === Object.prototype

console.log 也是一个函数，继承自 Function, 所以 console.log.__proto__ === Funtion.prototype
```

#### 总结：
任何变量均能访问到定义在 `Object.prototype` 上的方法，任何可以调用的对象即函数都可以访问 `Function.prototype` 上的方法

#### 扩展：[`new`操作符做的事情](https://github.com/shuch/blog/issues/11#issue-598184637)

引用：
[关于原型链，原来这么简单](https://www.lagou.com/lgeduarticle/20040.html)
