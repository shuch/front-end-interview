## `ajax` 实现
`Asynchronous javascript and xml`异步的`JavaScript` 和 `XML`技术

```js
function ajax({
  method = 'GET',
  url,
  data,
}) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('network error'));
        }      
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
