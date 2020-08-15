## 函数调用四种模式
* 函数调用
* 方法调用
* `call`
* `apply`

## 函数调用
```js
function add() {
  console.log(this);
}

add();// window
```
函数调用，如果是在全局，`this`指向`window`

## 方法调用
```js
var obj = {
  add() {
    console.log(this)
  }
};

obj.add();// obj
```
方法调用，`this`指向调用的对象

## call
```js
function add() {
  console.log(this);
}
add.call(null);// null
```

## apply
```js
function add() {
  console.log(this);
}
add.apply(undefined);// undefined
```

## 总结
* 方法调用和函数调用，`this`指向调用一方。
* `call`和`apply`调用，`this`指向第一个参数。
