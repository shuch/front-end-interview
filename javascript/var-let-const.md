## 变量与常量

* 声明变量`var` `let`
* 声明常量 `const`

> `const` 声明引用类型的值是一个堆内存地址，地址不可变，地址指向的值可变

```javascript
const a = { age: 16 }

a = {};       // Uncaught TypeError: Assignment to constant variable.
a.name = 'hh' // hh
```


## 作用域
* `var`只有函数作用域和全局作用域
* `let`和`const`存在块级作用域

```js
var a = 1;// Global
let b = 2;// Script
const c = 3; // Script

{
  var aa = 11;// Global
  let bb = 22;// Block
  const cc = 33;// Block
  {
    var aaa = 111;// Global
    let bbb = 222;// Block
    const ccc = 333;// Block
  }
}
```
> `var` 声明在`Glabal`
> `let`和`const` 声明在`Block`，顶层`Block`称为`Script`
```js
{
  let a = 1;
  var b = 1;
}
console.log(a); // ReferenceError: a is not defined
console.log(b); // 1
```

## 变量提升
* `var,let,const`存在变量提升（作用域顶部）
* `var` 会初始化为`undefined`
* `const`和`let`一样，不会被初始化，提前使用会报错

```js
var a = 1;
if (true) {
  typeof a;// ReferenceError
  let a = 2;
}
```
> 暂时性死区（temporary dead zone），在块级作用域内声明的变量，会绑定作用域，在声明前使用会报错，导致`typeof`运算不安全

## 重新声明
* `var`可以重新定义和重新声明
* `let`可以重新定义，但不能重新声明
* `const`既不能重新定义，也不能重新声明

## 参考
* [for 循环闭包](https://github.com/shuch/blog/tree/master/scope/block)
* [ES6之let（理解闭包）和const命令](https://www.cnblogs.com/zhuzhenwei918/p/6131345.html)
* [关于 const 和 let 声明的变量不在 window 上](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/30)
* [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)



