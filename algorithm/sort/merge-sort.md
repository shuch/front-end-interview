# 归并排序
```javascript
function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  return result.concat(left, right);
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  var middleIndex = Math.floor(arr.length / 2);
  var left = arr.slice(0, middleIndex);
  var right = arr.slice(middleIndex);
  
  return merge(mergeSort(left), mergeSort(right));
}
```

原理：
* 利用分治思想，从中间将数组从分成左右两部分
* 递归调用分组函数，直到数组还剩一个元素
* 两个数组经过排序之后再合并
* 比较大小时，相等元素顺序并不会交换

特点
* 非原地排序，空间复杂度O(n)
* 时间复杂度O(nlogn)
* 稳定排序


