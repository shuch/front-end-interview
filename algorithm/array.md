## 数组扁平化
```js
function flatArray(arr, list = []) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (typeof item === 'object') {
      flatArray(item, list);
    } else {
      list.push(item);
    }  
  }
  return list;
}

```

## 数组去重
`ES6`一行代码
```js
[...new Set(arr)]
```

`ES5`去重
```js
function unique(arr) {
  var obj = {};
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!obj[item]) {
      res.push(item);
      obj[item] = item;
    }
  }

  return res;
}
```
