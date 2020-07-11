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

## 排序
```js
Array.prototype.sort

var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10];
var res = a.sort((a,b) => a > b ? 1 : -1);
// [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14]
```
> `sort`默认排序是将元素转为字符串，比较他们的`UTF-16`序列大小，要指定比较函数

## 题目
[将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组 ](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/8)
