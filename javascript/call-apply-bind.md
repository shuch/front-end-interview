## call实现
```js
Function.prototype.call2 = function(context) {
  context = context || window;
  context.fn = this;
  
  var args = [];
  var result;
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments['+ i +']');
  }

  result = eval('context.fn('+ args +')');

  delete context.fn;
  return result;
}

var obj = {
  value: 17
};

function say(age, name) {
  console.log('args', age, name);
  return this.value;
}

say.call2(obj);

```
原理：
* 将函数作为一个属性添加到调用对象上，调用后删除
* 获取参数的字符串形式`context.fn(arguments[1],arguments[2])`

## apply 实现
```js
Function.prototype.apply2 = function(context, arr) {
  context.fn = this;
  
  var args = [];
  var result;
  if (!arr) {
    result = context.fn();
  }
  else {
    for (var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }

  delete context.fn;
  return result;
}

var obj = {
  value: 17
};

function say(age, name) {
  console.log('args', age, name);
  return this.value;
}

say.apply2(obj);
```

思路：
* 和`call`相同，参数通过数组的形式接收，并转化为字符串

## bind 实现
```js
Function.prototype.bind2 = function(context) {
  var fn = this;
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  return function() {
    var restArgs = slice.call(arguments);
    return fn.apply(context, args.concat(restArgs));
  }
}

var o = { name: 'sh' }
function f(a,b) {
  console.log('arg', Array.from(arguments));
  return this.name;
}
var nf = f.bind2(o, 1, 2);
nf();// arg [1 2] sh
nf(3,4) // arg [1,2,3,4] sh
```

* 返回一个新的函数，`this` 指向第一个参数
* 新函数的参数会追加到原函数的参数列表后
* 多次`bind`无效，以第一次为准

参考：
* [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
* [面试题：深入解析 bind 实现原理](https://juejin.im/post/6844904025180078087)
