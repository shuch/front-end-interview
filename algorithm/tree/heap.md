## 堆
* 堆是特殊的树形数据结构，完全二叉树（除最底层外，其余层都被填满）
* 任一父节点大于等于左右子节点（大顶堆）
* 任一父节点小于等于左右子节点（小顶堆）
* 最大值或最小值位于堆的顶部，适合求动态集合中k个最大的元素
* 索引为`i`的元素，父节点索引为`(i-1)/2`，左节点索引`2i+1`,右节点索引为`2i+2`

## Java数据结构
* `PriorityQueue.peek()`返回堆顶元素
* `PriorityQueue.offer()`插入堆
* `PriorityQueue.poll()`弹出堆顶元素

## JavaScript实现堆结构
```js
class Heap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(index) {
        return index - 1 >> 1
    }
    getLeftIndex(index) {
        return 2*index+1
    }
    getRightIndex(index) {
        return 2*index+2
    }
    swap(a,b) {
        let tmp = this.heap[a];
        this.heap[a] = this.heap[b]
        this.heap[b] = tmp
    }
    add(val) {
        let curIndex = this.heap.push(val) - 1
        this.shiftUp(curIndex)
    }
    pop() {
        // 将最底层最右边（数组最后一位）跟堆顶交换
        this.heap[0] = this.heap.pop()
        // 将堆顶元素往下移动
        shiftDown(0)
    }
    size() {
        return this.heap.length
    }
    shiftUp(index) {
        if (index==0) {
            return
        }
        let parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    shiftDown(index) {
        let leftIndex = this.getLeftIndex(index)
        let rightIndex = this.getRightIndex(index)
        // 跟左右节点中较小的交换
        if(this.heap[index] > this.heap[leftIndex]) {
            this.swap(inde,leftIndex)
            this.shiftDown(leftIndex)
        }
        if(this.heap[index] > this.heap[rightIndex]) {
            this.swap(inde,rightIndex)
            this.shiftDown(rightIndex)
        }
    }
}

// var heap = new Heap()
// heap.add(4)
// heap.add(3)
// heap.add(1)

```
