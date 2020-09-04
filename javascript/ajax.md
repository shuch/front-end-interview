## `ajax` 实现
```js
function ajax({
  method = 'GET',
  url,
  data,
}) {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resove(JSON.parse(xhr.responseText));
      }
    }

    xhr.send(data);
  });
}
```

## `get`请求
```js
ajax({
  url: 'https://api.tvmaze.com/shows/1',
}).then((res) => {
  console.log('suc', res);
});
```

## `post`请求
```js
ajax({
  method: 'POST',
  url: 'https://api.tvmaze.com/shows/1',
  data: 'a=1',
}).then((res) => {
  console.log('suc', res);
});
```
