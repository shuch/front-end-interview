## call实现
```js
Function.prototype.call2 = function(context) {
  context.fn = this || window;
  
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments['+ i +']');
  }
  console.log('context.fn('+ args +')');
  eval('context.fn('+ args +')');

  delete context.fn;
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
  context.fn = this || window;
  
  var args = [];
  for (var i = 0; i < arr.length; i++) {
    args.push('arr[' + i + ']');
  }

  eval('context.fn(' + args + ')');
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

