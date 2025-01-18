// 迭代法
function mergeSort(array) {
  // 获取数组的长度
  let len = array.length;
  // 设置数组src为原始数组
  let src = array;
  // 设置数组dst为空数组
  let dst = [];

  // 从数组长度为1开始循环到数组长度为len
  for (let size = 1; size < len; size += size) {
    console.log('size', size)
    // 从0开始循环到len
    for (let left = 0; left < len; left += size * 2) {
      // 计算中间位置mid
      let mid = Math.min(left + size, len);
      // 计算右边位置right
      let right = Math.min(left + size * 2, len);
      // 左指针
      let i = left;
      // 中间指针
      let j = mid;
      // 右指针
      let k = left;
      console.log('left,mid,right',left,mid,right)

      // 循环，当左指针小于中间位置或者右指针小于右边位置时
      while (i < mid || j < right) {
        // 如果右指针等于右边位置或者左指针小于中间位置并且左数组的值小于右数组的值
        if (j == right || (i < mid && src[i] < src[j])) {
          // 将左数组的值放入dst数组中
          dst[k++] = src[i++];
        } else {
          // 否则，将右数组的值放入dst数组中
          dst[k++] = src[j++];
        }
      }
      console.log('第i轮dst',dst)
      console.log('第i轮src',src)
    }
    // 将src数组和dst数组互换
    let temp = src;
    src = dst;
    dst = temp;
  }
  // 返回最终的src数组
  return src;
}

//递归法
function mergeSort2(arr) {
  if (arr.length==1){
    return arr
  }
  let midIndex = Math.floor(arr.length/2);
  let left = arr.slice(0, midIndex)
  let right = arr.slice(midIndex)

  return merge(mergeSort2(left), mergeSort2(right))
}

function merge(left, right) {
  let res = []
  while(left.length>0 && right.length>0) {
    if (left[0]<=right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  return res.concat(left,right)
}

res = mergeSort2([3,4,1,6,9,10,2,1])
console.log(res);