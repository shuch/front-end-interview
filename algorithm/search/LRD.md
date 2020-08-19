## 二叉树的后续遍历
二叉树结构
```js
var nodes = {
  node: 6,
  left: {
    node: 5, 
    left: { 
      node: 4 
    }, 
    right: { 
      node: 3 
    }
  },
  right: { 
    node: 2, 
    right: { 
      node: 1 
    } 
  }
}

```

后续遍历递归版
```js
function lrd(nodes, result = []) {
  nodes.left && lrd(nodes.left, result);
  nodes.right && lrd(nodes.right, result);
  result.push(nodes.node);
  return result;
}

lrd(nodes);// 4 3 5 1 2 6
```
