## ES6去重
```js
var arr = [1,2,2,4,5,1];
arr = [...new Set(arr)];
```

## ES5去重
```js
function unique(arr) {
  var dic = {};
  var res = [];
  for (var i=0;i<arr.length;i++) {
    var item = arr[i];
    if (!dic[item]) {
      dic[item] = 1;
      res.push(item);
    }
  }
  return res;
}
```
