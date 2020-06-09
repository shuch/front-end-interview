# 堆排序

```javascript

function heapSort(arr) {
  // 构建大顶堆
  buildMaxHeap(arr);
  // 交换堆顶元素和最后一个元素
  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    maxHeapify(arr, 0, i);
  }
  return arr;
}

function buildMaxHeap(arr) {
  var size = arr.length;
  var iParent = Math.floor(size / 2);
  for (var i = iParent; i >= 0; i--) {
    maxHeapify(arr, i, size);
  }
}

function maxHeapify(arr, index, size) {//
  // var iMax, iLeft, iRight;
    var iMax = index;
    var iLeft = 2 * index + 1;
    var iRight = 2 * index + 2;

    // 左孩子大于父节点
    if (iLeft < size && arr[iLeft] > arr[iMax]) {
      iMax = iLeft;
    }
    
    // 右孩子大于父节点
    if (iRight < size && arr[iRight] > arr[iMax]) {
      iMax = iRight;
    }
    
    // 交换大于父节点的值
    if (iMax !== index) {
      swap(arr, index, iMax);
      //index = iMax;
      maxHeapify(arr, iMax, size);// 
    }
  //return arr;
  //do {
  //} while (iMax !== index)
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

```

思路：
* 将数组按照堆的树形结构排列，最大值就是对顶，最小值是最后叶子节点
* 交换堆顶和叶子节点，剩下的元素重复步骤1，直到树只剩两个元素

特点
* 
