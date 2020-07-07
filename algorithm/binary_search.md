## 二分查找
在给定有序数组中，找到一个值，使用二分查找

## 递归版
```js
function binarySearch(arr, left, right, target) {
  if (left > right) {
      return -1;
  }

  let midIndex = Math.floor((left + right) / 2);
  let mid = arr[midIndex];

  if (target < mid) {
    return binarySearch(arr, left, midIndex - 1, target);
  }
  if (target > mid) {
    return binarySearch(arr, midIndex + 1, right, target);
  }

  return midIndex;
}

var a = [1, 2, 3, 4, 5, 6];
binarySearch(a, 0, 5, 5);// 4
binarySearch(a, 0, 5, 8);// -1
```
## 非递归
当遇到大数组时，递归调用栈可能会超过最大值，使用非递归方式
```js
function binarySearch(arr, low, high, target) {
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (target < arr[mid]) {
      high = mid - 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
var a = [1, 2, 3, 4, 5, 6];
binarySearch2(a, 0, 5, 5);// 4
```

## 特点
* 时间复杂度 O(logn)

## 参考
[二分查找](https://segmentfault.com/a/1190000008584438)
