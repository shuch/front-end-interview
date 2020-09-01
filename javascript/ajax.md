## `ajax` 实现
```js
function ajax({ url, method = 'GET', data, success }) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.onreadystatechagne = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      success(xhr.responseText);
    }
  }

  xhr.send(data);
}
```

## `get`请求
```js
ajax({
  url: 'https://api.tvmaze.com/shows/1',
  success(res) {
    console.log('suc', JSON.parse(res));
  },
});
```

## `post`请求
```js
ajax({
  method: 'POST',
  url: 'https://api.tvmaze.com/shows/1',
  data: 'a=1',
  success(res) {
    console.log('suc', JSON.parse(res));
  },
});
```
