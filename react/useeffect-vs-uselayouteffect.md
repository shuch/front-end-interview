## useEffect 和 useLayoutEffect 区别
* `useEffect` 在浏览器绘制完成后，异步更新，适用于大部分场景
* `useLayoutEffect` 在浏览器绘制前完成，同步更新，使用于需要频繁更新UI的场景

## 参考
[When to useLayoutEffect Instead of useEffect (example)](https://daveceddia.com/useeffect-vs-uselayouteffect/)
