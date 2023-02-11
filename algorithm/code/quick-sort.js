function sortArray(arr) {
  quickSort(arr, 0, arr.length-1)
  return arr;
}

function quickSort(arr,left,right) {
  if (left<right) {
    let pivot = partition(arr,left,right)
    quickSort(arr, left, pivot-1)
    quickSort(arr, pivot, right)
  }
}

function partition(arr, left, right) {
  let pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
  // console.log('pivotIndex22', pivotIndex);
  let pivot = arr[pivotIndex]
  //交换基准元素到末尾
  swap(arr,pivotIndex,right)
  let i=left;
  for (let j=left;j<right;j++) {
    if (arr[j]<pivot) {
      swap(arr,i,j)
      i++;
    }
  }
  swap(arr,right,i)
  return i
}

function swap(arr,i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

var arr = [2,1,5,4,6,3]
sortArray(arr)
console.log(arr)