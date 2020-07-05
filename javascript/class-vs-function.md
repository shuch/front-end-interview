## `prototype`和`__proto__`关系
`prototype`是`function`的属性，`__proto__`是对象实例的属性
```js
function Person() {}
var p = new Person();

Person.prototype === p.__proto__; // true
```

## `prototype`和`constructor`关系
原型的构造器属性是构造函数本身
```js
function Person() {}

Person.prototype.constructor === Person; // true
```

## `class`和`function`区别
* `class` 只能通过`new`调用
* `function`存在变量提升，而`class`没有
* `toString`返回值不同

```js
function Person() {}
class User() {}

Person.toString();// "function Person() {}"
User.toString();// "class User() {}"
```
