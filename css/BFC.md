## `BFC`
块级格式上下文，用于决定盒子布局以及浮动影响范围的一个区域。

同级别分类：
* `BFC`（`Block Formating Context`）块级格式上下文
* `IFC`（`Inline Formating Context`）行级格式上下文
* `FFC`（`Flex Formating Context`）自适应格式上下文
* `GFC`（`GridLayout Formating Context`）网格布局格式上下文

特点：
* 块级格式上下文内的元素，竖着排列
* 行级格式上下文内的元素，横着排列

#### 作用
* 阻止被浮动元素覆盖 [demo](https://4gb7w.csb.app/)
* 包含浮动子元素（浮动子元素撑开容器高度）[demo](https://4gb7w.csb.app/contain-float.html)
* 阻止相邻块级元素`margin`重叠 [demo](https://4gb7w.csb.app/margin-overlaping.html)

#### 生成
* `html`根元素
* `position: absolute`，`position: fixed`
* `display`
  - `display: flex`
  - `display: inline-block`
  - `display: table`
  - `display: grid`
  - `display: flow-root`
    
* `overflow`不是默认的`visible`属性
* `contain`
  - `layout`
  - `strict`
  - `paint`
