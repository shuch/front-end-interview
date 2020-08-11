## 算法题之「移动零」
> 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例：
```js
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```
说明：
* 必须在原数组上操作，不能拷贝额外的数组。
* 尽量减少操作次数。

## 解法1
```js
function move0(arr) {
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr, i, j);
      j++;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

```

思路：遍历数组，如果不为0，交换当前元素和0元素

## 解法2
```js
function move0(arr) {
  for (var i = arr.length - 1; i >=0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}
```

思路：从后往前遍历数组，遇到0元素，移除，元素末尾补0.
注意：`splice`删除元素，后面元素会前移，从后往前，保持未处理元素索引不变。
