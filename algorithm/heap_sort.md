# 堆排序

```javascript

function heapSort(arr, heapSize) {
  // 构建大顶堆
  buildMaxHeap(arr, heapSize);
  // 交换对顶元素和最后一个元素
  for (var i = heapSize - 1; i > 0; i--) {
    swap(arr, 0, i);
    console.log('i', i);
    maxHeapify(arr, 0, i);
  }
  return arr;
}

function buildMaxHeap(arr, heapSize) {
  var iParent = Math.floor(heapSize / 2);
  for (var i = iParent; i >=0; i--) {
    maxHeapify(arr, i, heapSize);
  }
}

function maxHeapify(arr, index, heapSize) {
  var iMax, iLeft, iRight;
      iMax = index;
    iLeft = 2 * index + 1;
    iRight = 2 * index + 1;

    // 左孩子大于父节点
    if (iLeft < heapSize && arr[iLeft] > arr[iMax]) {
      iMax = iLeft;
    }
    
    // 右孩子大于父节点
    if (iRight < heapSize && arr[iRight] > arr[iMax]) {
      iMax = iRight;
    }
    
    // 交换大于父节点的值
    if (iMax !== index) {
      swap(arr, index, iMax);
      //index = iMax;
      maxHeapify(arr, iMax, heapSize);
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
