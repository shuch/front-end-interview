## `defineProperty`数据绑定
```js
// modal
var data = {};
var input = document.getElementById('input');
var model = document.getElementById('model');

// view
input.oninput = function (e) {
  data.value = e.target.value;
}

// view to model
Object.defineProperty(data, 'value', {
  set(newVal) {
    input.value = newVal;
    model.textContent = newVal;
  },
  get() {
    // 没有定义值为undefined
    // data.value 堆栈溢出
    return model.textContent;
  },
});

// model to view
data.value += '1';

```

## `proxy`数据绑定
```js
// model
var data = { value: 0 };
var model = document.getElementById('model');

// view to modal
input.oninput = function (e) {
  data.value = e.target.value;
}

// model to view
var proxy = new Proxy(data, {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    model.textContent = value;
    input.value = value;
  }
});

// model to view
function add() {
  proxy.value += '1';
}

```

## 实现
* [defineProperty](https://gby6i.csb.app/)
* [proxy](https://gby6i.csb.app/proxy.html)

## 参考
* [definePropery](https://gby6i.csb.app/)
* [proxy](https://gby6i.csb.app/proxy.html)
