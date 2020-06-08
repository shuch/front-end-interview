# 归并排序
```javascript

function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  return result.concat(right, left);
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  var middleIndex = Math.floor(arr.length / 2);
  var left = arr.slice(0, middleIndex);
  var right = arr.slice(middleIndex);
  
  return merge(mergeSort(right), mergeSort(left));
}
```

原理：
* 利用分治思想，从中间将数组从分成左右两部分
* 递归调用分组函数，直到
