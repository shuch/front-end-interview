## 重绘和回流
* 发生在浏览器解析 `DOM Tree` 过程中
* 回流`Reflow`计算每一个可见(visible)元素的大小和位置。
* 重绘`Repaint`把每个像素(pixels)渲染到屏幕上

## 回流(Reflow)
* `left, right, top, bottom`位置
* `font-size`
* `width,height` 大小
* `float`
* `position`
* 页面新增和删除节点

上述属性发生变化，可能会引起其该节点的父节点，子节点，兄弟节点，甚至是整个文档的重新布局

## 重绘(Repaint)
* `color`
* `outline`
* `backgound`
* `visibility`
* `opactiy`

其中一个发生改变就会引起重绘

## 优化
* 不要用多条语句来改变样式，取而代之`class`或`cssText`
* 批量`DOM`离线更新
  - `docuemntFragment`
  - 先`cloneNode`节点，再更新节点，最后替换`replace`  
  - 先`display:none`(1 `Repaint` & 1 `Reflow`)，积累 100 个更新后，再恢复`display`，总共2 `Repaint`,2 `Reflow`
* 不要重复读取计算样式(`computed styles`)，先缓存在读取

## 参考
> css 属性变化参考https://csstriggers.com/
