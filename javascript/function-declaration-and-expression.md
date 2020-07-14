# 函数声明和函数表达式
## 函数声明
```javascript
function f() {}
```

## 函数表达式
```javascript
var f = function() {}
```

### IIFE
立即执行函数表达式（`Immediately Invoke Fucntion Expression`）
```js
(function IIFE() {})()
```

* 当把函数声明用括号包裹，就变成函数表达式。
* 函数表达式里，对函数重命名会静默失败。`'use strict'`模式报错。

```js
var a = 2;
(function a() {
  a = 2;// 失败
  console.log(a);// 打印 function a() {...}
})();
```

## 比较
* 作用均是声明一个变量`f`并初始化值为 function {}
* 函数声明存在变量提升(hoist)，而表达式不会

## 例子
```javascript
var f1 = function () {
  console.log('im expression')
}

function f1 () {
  console.log('im declaration')
}

f1()
```

分析：
1.  变量提升后变为
```javascript
function f1 () {
  console.log('im declaration')
}

var f1 = function () {
  console.log('im expression')
}

f1()
```
2.  `JavaScript`引擎预解析时,遇到函数声明，先创建一个变量，并赋予初始值
```javascript
var f1;
f1 = function () {
  console.log('im declaration')
}

var f1 = function () {
  console.log('im expression')
}

f1()
```

3.运行时，遇到 `function f1()` 跳过，遇到 `var f1 = function() ...` 覆盖 `f1`的值，结果为 `im expression`

## 结论
* 函数声明在解析时，存在变量提升，提前定义并赋值
* 函数表达式在运行时，定义并赋值


## 参考
[下面的代码打印什么内容，为什么](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/48)
