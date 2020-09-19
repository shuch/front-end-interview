## 继承方式
* 原型链继承
* 构造函数继承
* 组合继承
* `ES6`继承
* 原型式继承
* 寄生式继承
* 寄生组合式继承

## 原型链继承
父类的实例作为子类原型

```js
function Parent() {
  this.name = 'shu';
}

function Child() {}

Child.prototype = new Parent();

var child = new Child();
console.log('child', child.name);// shu
```

缺点：引用类型属性被所有实例共享

```js
function Parent() {
  this.name = ['shu'];
}

function Child() {}

Child.prototype = new Parent();

var child1 = new Child();
child1.name.push('chen');

var child2 = new Child();
console.log(child2.name);// ['shu', 'chen']
```

> 当 SubType 通过原型链继承了 SuperType 之后，SubType.prototype 就变成了 SuperType 的一个实例，因此它也拥有了一个它自 己的 colors 属性——就跟专门创建了一个 SubType.prototype.colors 属性一样。但结果是什么 呢?结果是 SubType 的所有实例都会共享这一个 colors 属性
—— P167《高级程序设计》

## 构造函数继承
子类的构造函数调用父类的构造函数

```js
function Parent() {
  this.name = [1];
}

function Child() {
  Parent.call(this);
}

var child1 = new Child();
var child2 = new Child();
console.log(child1.name);// [1]

child1.name.push(2);
console.log(child1.name);// [1, 2]
console.log(child2.name);// [1]

```

优势：
* 可以解决引用实例共享的问题
* 可以在`child`中向`parent`传参

```js
function Parent(name) {
  this.name = name;
}

Parent.prototype.say = function() {
  console.log('say', this.name);
}

function Child(name) {
  Parent.call(this, name);
}

var child = new Child('shu');
console.log(child.name);
child.say();// 

```

缺点：无法共享父类方法，每次创建实例都初始化一次父类方法

## 组合继承
* 从原型链`prototype`中继承方法
* 从构造函数继承属性

```js
function Parent(name) {
  this.name = name;
}

Parent.prototype.say = function() {
  console.log('say', this.name);
}

function Child() {
  Parent.call(this, 'shu');
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
console.log(child.name);// shu
child.say();// say shu
```

## es6继承
```js
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
     super(name);
     this.age = age;
  }
}

var child = new Child('shu', 12);
console.log(child.name);// shu
```

## 参考
* [JavaScript深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
* [继承](https://segmentfault.com/a/1190000015216289)
