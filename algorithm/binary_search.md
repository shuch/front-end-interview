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


## 特点
* 时间复杂度 O(logn)
