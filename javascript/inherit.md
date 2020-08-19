## 继承方式
* 原型继承
* 构造函数继承
* 组合继承

## 原型继承
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
var child2 = new Child();
console.log(child1.name);// ['shu']

child1.name.push('chen');
console.log(child1.name);// ['shu', 'chen']
console.log(child2.name);// ['shu', 'chen']
```

## 构造函数继承
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
* 可以在child中向parent传参

```js
function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this, name);
}

var child = new Child('shu');
console.log(child.name);

```

## 参考
* [JavaScript深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
