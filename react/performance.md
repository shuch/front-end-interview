## 性能优化
* 组件延迟加载`Suspense`
* 使用`useCallback`缓存函数引用，避免重新创建
* 使用`useMemo`缓存组件或计算结果，避免重新渲染或计算
* `class component` 使用`PureComponent`和`shouldComponentUpdate`，避免父组件变化引起子组件的重新渲染
* 使用片段节点`React.Fragment`节省`dom`
