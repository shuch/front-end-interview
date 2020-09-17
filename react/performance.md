## 性能优化
* 使用`useCallback`缓存函数，避免重新创建
* 使用`useMemo`缓存计算结果，避免重新计算
* `class component` 使用`PureComponent`和`shouldComponentUpdate`，避免父组件变化引起子组件的重新渲染
