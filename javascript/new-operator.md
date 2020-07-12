## 实现`new`运算符
```js
function New(f) {
  var obj = {
    __proto__: f.prototype
  };

  var isObj = f instanceof Object;
  if (isObj) {
    f.apply(obj, arguments);
  }
  
  return isObj ? obj : f;
}

```
