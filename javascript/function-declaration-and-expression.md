# 函数声明和函数表达式
## 函数声明
```javascript
function f() {}
```

## 函数表达式
```javascript
var f = function() {}
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
