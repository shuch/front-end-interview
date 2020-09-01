## 遍历单向链表
```js
function Node(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.setNext = function(node) {
  this.next = node;
  return node;
}

Node.prototype.visit = function() {
  var node = this;
  while(node) {
    console.log(node.value);
    node = node.next;
  }
}

var node = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

node.setNext(node2);
node2.setNext(node3);

node.visit();// 1 2 3
```

## 参考
* [单向链表遍历反转 Javascript实现](https://my.oschina.net/gengjie/blog/375446)
