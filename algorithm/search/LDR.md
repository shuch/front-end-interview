## 中序遍历二叉树
有二叉树结构
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

中序遍历递归版
```js
function ldr(nodes) {
  var result = [];
  if (nodes.left) {
    ldr(nodes.left);
  }
  result.push(nodes.node);
  if (nodes.right) {
    ldr(nodes.right);
  }
  return result;
}

ldr(nodes);// 4 5 3 6 1 2

```
