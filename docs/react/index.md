## react 
生态介绍：
- Vue：Vue + Vue-Router + Vuex + Axios + Babel + Webpack
- React：React + React-Router+ Redux + Axios + Babel + Webpack
## jsx
 1. 不需要包裹在单引号之内
 2. 可以使用自己创建的组件，但是组件名首字母要大写
 3. jsx里面要使用js表达式要用{}包裹起来
 4. 修改数据要使用setState函数
## imutable
 1. 不允许我们直接修改state的数据，如果想要修改可以复制一个副本
 
1.  循环中引入key值是为了提高虚拟dom比对的性能，使用一个稳定的数值作为key值，不要使用index
2. setState是一个异步过程，它可以把多次setState结合成一次setState,减少虚拟dom比对的次数，在比对的时候会有一个同层比较的概念，也就是diff算法在比较两个虚拟dom的时候，他会同层进行比较，如果一层不满足比对的要求，则不会再往下进行比对，直接就废弃掉，直接用新的替换掉，这样会大大的提升性能。