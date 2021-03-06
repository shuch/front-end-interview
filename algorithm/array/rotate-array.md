## 旋转数组
> 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例：
```js
输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
输出: [5, 6, 7, 1, 2, 3, 4]
解释:
向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
```

解法1:
```js
function rotateArray(arr, k) {
  for (var i = 0; i < k; i++) {
    var tmp = arr.pop();
    arr.unshift(tmp);
  }
  return arr;
}
```

解法2:
```js
function rotateArray(arr, k) {
  var list = [...arr];
  var len = arr.length;
  var step = k % len;
  var cut = list.splice(len - step);
  list.unshift(...cut);
  return list;
}
```

## 参考
* [旋转数组算法题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/126#issuecomment-493809706)
