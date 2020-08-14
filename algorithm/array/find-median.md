## 寻找中位数
给定两个有序数组nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))

例子：
```
nums1 = [1, 3]
nums2 = [2]
```
中位数2

> 中位数：假设一个数字，数组中大于该数的个数和小于该数的个数相等，就称为数组的中位数。

## 解法
1. 先将两个有序数组合并
```js
function mergeSorted(a,b) {
  var merge = [];
  while(a.length && b.length) {
    if (a[0] < b[0]) {
      var top = a.shift();
      merge.push(top);
    } else {
      var top = b.shift();
      merge.push(top);
    }
  }
  
  merge = merge.concat(a,b);

  return merge;
}

```

2. 寻找中位数
```js
function findMedian(arr) {
  var len = arr.length
  if (len%2 === 0) {
    var left = arr[len / 2 - 1];
    var right = arr[len / 2];
    return (left + right) / 2;
  }
  var midIndex = Math.floor(len / 2);
  return arr[midIndex];
}

```


## 参考
* [第 93 题：给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/144)
