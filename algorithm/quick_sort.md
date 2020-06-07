# 快速排序
```javascript
function quickSort(arr) {
  if (!arr || arr.length <= 1) {
    return arr;
  }
  
  var left = [];
  var right = [];
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  
  return quickSort(right).concat([pivot], quickSort(left));
}

```

思想：
* 取一个基准值（pivot）
* 将整个数组分成两部分，小于基准值和大于基准值
* 针对左右两部分，重复前两部，知道数组只剩一个元素为止

特点：
* 时间复杂度 O（nlogn）
* 如果是本地排序，在和基准值交换的过程中，相同元素位置可能会发生变化，不稳定；针对上面的例子，借助外部空间left,right 元素位置不会发生改变，是稳定排序

