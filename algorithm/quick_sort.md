# 快速排序

## 非原地
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

## 原地排序
```javascript
function quickSort(arr, left, right) {
  if (arr.length < 2) {
    return arr;
  }
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;

  var pivotIndex = partition(arr, left, right);
  if (left < pivotIndex - 1) {
    quickSort(arr, left, pivotIndex - 1);
  }
  if (pivotIndex < right) {
    quickSort(arr, pivotIndex, right);
  }
  
  return arr;
}

function partition(arr, left, right) {
  var i = left;
  var j = right;
  var pivot = arr[Math.floor((left + right) / 2)];
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

```


思想：
* 取一个基准值（pivot），一般取数组的中间值，如果是取第一个或最后一个，数组是有序的情况交换次数多
* 将整个数组分成两部分，小于基准值和大于基准值
* 针对左右两部分，重复前两步，直到数组只剩一个元素为止

特点：
* 时间复杂度 O(nlogn)
* 稳定性：
    - 原地排序，在和基准值交换的过程中，相同元素位置可能会发生变化，不稳定
    - 非原地排序例子，借助外部空间 left, right 元素位置不会发生改变，是稳定排序

