## `fetch`并发数限制
```js
function fetchQueue(limit = 2) {
    var count = 0;
    var queue = [];


    var request = function(url) {
        console.log('count',count);
        return new Promise((resolve, reject) => {
            var task = createTask(url, resolve, reject);
            if (count>=limit) {
              console.log('count', count);
              queue.push(task);
            } else {
              task();
              count++;
            }
        });
    }

    var createTask = function(url, resolve, reject) {
        return () => {
            fetch(url).then((res => {
                resolve(res)
            })).catch(err => {
                reject(err);
            }).finally(() => {
                console.log('run', count);
                count--;
                if (queue.length) {
                    var task = queue.shift();
                    task();
                }
            })   
        }
    }

    return request;
}
```

测试
```js
var request = fetchQueue();

for (var i=0;i<6;i++) {
    request('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        console.log('res', res);
    })
}
```

## 参考
* [限制promise的并发数](https://blog.csdn.net/lanyao961220/article/details/106338031)
* [使用 Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
