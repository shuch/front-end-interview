## `Node` 和 `Element` 区别
`Node`是任意一个`DOM`对象类型, `Element`是`Node`众多类型中的一种类型，继承自`Node`

* `Node`:在`DOM`中一切都是`Node`，每个`Node`都是一个`Object` 
* `Element`是`Node`子类型，包括`body`,`head`,`div`

## `textContent`,`innerText`,`innerHTML`区别
* `textContent`返回当前节点以及子节点的文本内容，是`Node`方法
* `innerText`返回可见元素，受`CSS`影响，会引起[`Reflow`](https://github.com/shuch/front-end-interview/blob/master/browser/reflow-vs-repaint.md)，确保是最新计算样式。
* `innerHTML`返回`html`内容，有`XSS`风险

> `textContent`有更好的性能，可以防止`XSS`攻击

## `NodeList` 和 `HTMLCollection` 区别
跟`Node` 和 `Element` 区别一样，`NodeList` 是`Node`类型的集合，而`HTMLCollection`是`Element`类型集合
```js
// NodeList
document.getElementsByName('div');// live
node.querySelectorAll('li');// static
node.childNodes

// HTMLCollection
document.getElementsByClassName('body');
document.getElementsByTagName('body');
document.getElementsByClassNames('body');]
node.children
```
`HTMLCollection`是动态的，子节点变化，集合会自动更新
