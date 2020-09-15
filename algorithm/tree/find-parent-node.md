## 查找二叉树最近父节点
```
    1
   / \
  2   3
 / \   \
4   5   6
```

1和2公共父节点是1,4和6公共父节点是1,父节点包含自身

## 实现
```js
function findParent(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  var left = findParent(root.left, p, q);
  var right = findParent(root.right, p, q);
  
  if (!left) {
    return left;
  }
  
  if (!right) {
    return left;
  }
  
  return root;
}

var root = {
    value: 1,
    left: {
        value: 2
    },
    right: {
        value: 3,
    },
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root = new TreeNode(1);
var left = new TreeNode(2);
var right = new TreeNode(3);
root.left = left;
root.right = right;

findParent(root);// 1
```

## 参考
[JS 递归解 二叉树最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/js-di-gui-jie-er-cha-shu-zui-jin-gong-gong-zu-xian/)
