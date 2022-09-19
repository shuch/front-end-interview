## 广度优先搜索
树的横向搜索（层次遍历），采用队列的形式实现


```js
function breadthFirstSearch(node) {
  var nodes = [];
  var queue = [node];
  
  while (queue.length) {
    var curNode = queue.shift();
    nodes.push(curNode);
  
    var childs = curNode.children;
    if (childs && childs.length) {
      for (var i = 0; i < childs.length; i++) {
        queue.push(childs[i]);
      }
    }
  }
  
  return nodes;
}

```

## 二叉树的广度优先遍历
数据结构
```
    1
   /  \
  2    3
 / \   /
4   5 6
```
数据结构模拟
```js
tree = {
    "val": 1,
    "left": {
        "val": 2,
        "left": {
            "val": 4,
            "right": null,
            "left": null
        },
        "right": {
            "val": 5,
            "right": null,
            "left": null
        }
    },
    "right": {
        "val": 3,
        "left": {
            "val": 6,
            "left": null,
            "right": null
        },
        "right": null
    }
}
```
使用队列存储二叉树节点，可以按层遍历
```js
function binaryTreeBfs(node) {
  var queue = [node];
  while(queue.length) {
    var node = queue.shift()
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}

```

## 参考
[往完全二叉树添加节点](https://leetcode.cn/problems/NaqhDT/)
