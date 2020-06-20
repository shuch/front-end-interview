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
* `var`存在变量提升，作用域为全局作用域

```js
var a = 1;
let a1 = 1;
const a2 = 1;

console.log(window.a);  // 1
console.log(window.a1); // undefined
console.log(window.a2); // undefined
```

* `let`和`const`为块级作用域，存在暂时性死区

```js
{
  let a = 1;
  var b = 1;
}
console.log(a); // ReferenceError: a is not defined
console.log(b); // 1
```

```js
var a = 1;
if (true) {
  typeof a;// ReferenceError
  let a = 2;
}
```

> 暂时性死区（temporary dead zone），在块级作用域内声明的变量，会绑定作用域，在声明前使用会报错，导致`typeof`运算不安全

## 总结
* 正由于`var`存在变量提升（包括创建，初始化和赋值），允许声明前提前使用造成bug，所以产生了块级作用域的`let`和`const`.
* 使用`var`声明的变量会预编译阶段会分配栈内存，而`let`和`const`不会
* 如果`let`和`const`存储的是引用类型，则会在堆内存开辟空间，并在栈内存中存储的是堆内存地址







