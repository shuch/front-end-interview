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
* `let`和`const`为块级作用域，存在暂时性死区

```js
var a = 1;
let a1 = 1;
const a2 = 1;

console.log(window.a);  // 1
console.log(window.a1); // undefined
console.log(window.a2); // undefined
```

```
let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

## 重复声明
* `var`存在变量提升，可先试用，后声明，可重复声明
* `let`和`const`必须先声明，后使用，不可重复声明
