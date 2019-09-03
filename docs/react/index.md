## react 
1. 声明式开发： 减少操作dom
2. 可以与其他框架并存  jquery等
3. 组件化
4. 单向数据流 
5. 视图层框架   
6. 函数式编程
7. 数据驱动
## 生态介绍：
- Vue：Vue + Vue-Router + Vuex + Axios + Babel + Webpack
- React：React + React-Router+ Redux + Axios + Babel + Webpack
## jsx
 1. 不需要包裹在单引号之内
 2. 可以使用自己创建的组件，但是组件名首字母要大写
 3. jsx里面要使用js表达式要用{}包裹起来
 4. 修改数据要使用setState函数
## propsTypes  defaultProps
1. propsTypes： 要求父组件在给子组件传值的时候，要求传值的类型是什么样子的
2. defaultProps：当父组件某个参数未传时，子组件自己设置默认值
## props state render函数的关系（解释react数据驱动，数据变化，页面就跟着变化）
1. 当组件的state或者props发生改变的时候，render函数就会重新执行，页面就会重新渲染
2. 当父组件的render函数被运行时，子组件的render函数也会被运行
## react中的虚拟dom
1. state数据
2. jsx模版
3. 数据+模版 结合，生成真实的dom来显示
```
  <div id="abc"><span>hello</span></div>
```
4. 生成虚拟dom(虚拟dom就是一个js对象，用来描述真实的dom)---损耗性能
['div',{id:'abc'},['span',{},'hello']]
5. state数据发生变化
6. 数据+ 模版 生成新的虚拟dom （极大的提升了性能）
['div',{id:'abc'},['span',{},'aaa']]
7. 比较原始虚拟dom和新的虚拟dom的区别，找到是span中的内容发生了改变（极大的提升了性能 ）
8. 直接操作dom，改变span中的内容
## imutable
 1. 不允许我们直接修改state的数据，如果想要修改可以复制一个副本
## 传参
1. 父向子： 
```
父组件：<TodoItem content = {item}></TodoItem>
子组件：  <li>{this.props.content}</li>
```
2. 子向父：
```
父组件： 
        <TodoItem content = {item} index={index}
        delectItem = {this.delectItem}
        ></TodoItem>
子组件：
render(){
        return(
            <div onClick={this.delectItem}>
                {this.props.content}
            </div>
        )
    }
    delectItem(){
        this.props.delectItem(this.props.index)
        // console.log(this.props.index)
    }
    父组件子组件相应的方法记得绑定相应的this实例
```
## tips
 1. 
 ```
 dangerouslySetInnerHTML={{__html: item}} 
 用来处理带标签的数据，但是容易导致XSS攻击
 ``` 
 2. 循环中引入key值是为了提高虚拟dom比对的性能，使用一个稳定的数值作为key值，不要使用index
 3. setState是一个异步过程，它可以把多次setState结合成一次setState,减少虚拟dom比对的次数，在比对的时候会有一个同层比较的概念，也就是diff算法在比较两个虚拟dom的时候，他会同层进行比较，如果一层不满足比对的要求，则不会再往下进行比对，直接就废弃掉，直接用新的替换掉，这样会大大的提升性能。