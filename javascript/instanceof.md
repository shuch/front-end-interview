## `instanceof` 原理

```js
function instance_of(L, R) {
  var r = R.prototype;
  var l = L.__proto__;
  while(true) {
    if (l === null) {
      return false;
    }
    if (l === r) {
      return true;
    }
    l = l.__proto__;
  }
}
```

用例：
```js
function Car() {}
var car = new Car();
instance_of(car, Car);

```
