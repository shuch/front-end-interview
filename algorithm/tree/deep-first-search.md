## 深度优先遍历
深度优先遍历，属于树的纵向搜索

### 树的深度遍历-栈形式

```js
function deepFirstSearch(root) {
  var results = [];
  var stack = [root];
  
  while (stack.length) {
    var curNode = stack.pop();
    results.push(curNode);

    var childs = curNode.children;
    if (childs && childs.length) {
      for (var i = childs.length; i >= 0; i--) {
        stack.push(childs[i]);
      }
    }
  }
  
  return results;
}
```

### 树的深度遍历-递归法
```js
function deepFirstSearch(node, nodes = []) {
  if (node !== null) {
    nodes.push(node);
    var childs = node.children;
    for (var i = 0; i < childs.length; i++) {
      deepFirstSearch(childs[i], nodes);
    }
  }

  return nodes;
}

```

## 二叉树的深度优先遍历
* 前序遍历
* 中序遍历
* 后序遍历

```js
var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}

```

### 前序遍历-根左右
```js
function bfsFirst(root) {
    let stack = [];
    let result = []
    let node = root
    while(stack.length || node != null) {
        // 一直遍历到左节点为空
        while(node != null) {
            result.push(node.value)
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        node = node.right;
    }
    return result;
}
```

### 中序遍历-左根右
```js
function bfsMid(root) {
    let stack = [];
    let result = [];
    let node = root
    while(stack.length || node) {
        // 一直遍历到左节点为空
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        result.push(node.value)
        node = node.right
    }
    return result;
}
```

### 后序遍历-左右根
```js
function bfsPost(root) {
    let result = [];
    let stack = [];
    let node = root;
    let pre = null
    while(stack.length || node!==null) {
        // 一直遍历到左节点为空
        while(node!=null) {
            stack.push(node)
            node = node.left
        }
        node = stack[stack.length-1]
        // 左右节点都为空即叶子节点，或当前节点右节点是上一个节点
        if (node.right==null || node.right == pre) {
            node = stack.pop()
            result.push(node.value)
            pre = node;
            node = null
        } else {
            node = node.right
        }
    }
    return result
}
```

### 结果
* 前序 ['-', '+', 'a', '*', 'b', 'c', '/', 'd', 'e']
* 中序 ['a', '+', 'b', '*', 'c', '-', 'd', '/', 'e']
* 后序 ['a', 'b', 'c', '*', '+', 'd', 'e', '/', '-']


## 参考
- [深度遍历与广度遍历(递归实现与非递归实现)](https://segmentfault.com/a/1190000016226334)
- [介绍下深度优先遍历和广度优先遍历，如何实现？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9)




