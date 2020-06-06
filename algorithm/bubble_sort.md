# 冒泡排序

```javascript

function bubbleSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
   
  return arr;
}

const arr = [5,4,3,2,1];
console.log(bubbleSort(arr));// 1,2,3,4,5

```
原理
* 外层循环遍历数组每一项，确定元素
* 内层循环比较元素，确定大小
* 每一轮循环确定一个最大值
* 从头开始，相邻元素比较

特点：
* 时间复杂度 O(n^2)
* 稳定排序
