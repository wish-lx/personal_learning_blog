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
## react中的虚拟dom(jsx->reactElement->js对象(虚拟dom)-> 真实dom React.reactElement['div',{id:'abc'},item])
1. state数据
2. jsx模版
3.  生成虚拟dom(虚拟dom就是一个js对象，用来描述真实的dom)---损耗性能
```
['div',{id:'abc'},['span',{},'hello']]
```

4. 用虚拟dom结构生成真实的dom来显示
```
  <div id="abc"><span>hello</span></div>
```
5. state数据发生变化
6. 数据+ 模版 生成新的虚拟dom （极大的提升了性能）
```
['div',{id:'abc'},['span',{},'aaa']]
```
7. 比较原始虚拟dom和新的虚拟dom的区别，找到是span中的内容发生了改变（极大的提升了性能 ）--》 diff
8. 直接操作dom，改变span中的内容
## imutable
 1. 不允许我们直接修改state的数据，如果想要修改可以复制一个副本
## 传参
1. 父向子： 
```
父组件：  <TodoItem content = {item}></TodoItem>
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
1. ui组件负责页面渲染  容器组件负责逻辑  
 //使用redux-thunk
    //    创建一个action
      //  const action = getInputChange(e.target.value)
    //    派发action
      // store.dispatch(action)
2. 
 ```
 dangerouslySetInnerHTML={{__html: item}} 
 用来处理带标签的数据，但是容易导致XSS攻击
 ``` 

 3.  Immutable的set方法，会结合之前immutable的值和设置的值，返回一个全新的对象
 ```
 case  actionType.INPUT_FOCUS:
             //  Immutable的set方法，会结合之前immutable的值和设置的值，返回一个全新的对象
            return state.set('foused', true)
 ```
 4. 
 React-Redux: 是Redux的官方React绑定库。它能够使你的React组件从Redux store中读取数据，并且向store分发actions以更新数据,常用的有provider  connect
 react-router-dom  link
  <!-- redux-thunk
  redux-saga -->
  
  
5. immutable: 
- Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象
- 由于是不可变的，可以放心的对对象进行任意操作。在 React 开发中，频繁操作state对象或是 store ，配合 immutableJS 快、安全、方便
- 也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了Structural Sharing（结构共享）
- 常用API：
fromJS()
作用：将一个js数据转换为Immutable类型的数据
用法：fromJS(value, converter)
简介：value是要转变的数据，converter是要做的操作。第二个参数可不填，默认情况会将数组准换为List类型，将对象转换为Map类型，其余不做操作
toJS()
作用：将一个Immutable数据转换为JS类型的数据
用法：value.toJS()
set()
作用：设置第一层key、index的值
merge
作用：浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，就数据中已存在的属性用新数据中的覆盖

 ## diff算法
 1. 循环中引入key值是为了提高虚拟dom比对的性能，使用一个稳定的数值作为key值，不要使用index,index不稳定（为了使得旧的虚拟dom的值与新的虚拟dom的值保持一致）
 2. setState是一个**异步过程**，它可以把多次setState结合成一次setState,减少虚拟dom比对的次数，在比对的时候会有一个同层比较的概念，也就是diff算法在比较两个虚拟dom的时候，他会同层进行比较，如果一层不满足比对的要求，则不会再往下进行比对，直接就废弃掉，直接用新的替换掉，这样会大大的提升性能。
 ## react的生命周期函数
 1. initialization（初始化): setup state and props
 2. Mounting(挂载)：
    - componentWillMount：组件被挂载到页面之前，自动被执行（只在**第一次挂载**时执行）
    - render： 挂载
    - componentDidMount: 组件被挂载到页面之后，自动被执行（只在**第一次挂载**时执行）（**在这里发送ajax请求**）
3. updating：
   - prop：shouldComponentUpdate  true--》componentWillUpdate--》render--》componentDidUpdate
   - states： shouldComponentUpdate  true--》componentWillUpdate--》render--componentDidUpdate


   - componentWillReceiveProps--》 1.一个组件要从父组件接收参数 2.这个组件的render函数再次被渲染（不是首次）
   - shouldComponentUpdate--》组件在更新之前，自动会执行
   - componentWillUpdate--》组件被更新之前，自动会执行（在shouldComponentUpdate 执行，返回true 之后执行，返回false则不执行）
   - render--》
   - componentDidUpdate--》组件被更新之后，自动会执行
4. UnMounting: 
   - componentWillUnmounting: 当这个组件即将从页面中被剔除时，自动被执行
## 性能优化点
1. shouldComponentUpdate： 可以避免无谓的render组件的运行
2. constructor中函数的作用域的绑定： 保证这个作用域的绑定只会执行一次，而且可以避免一些子组件无谓的渲染
3. setState是一个异步过程，可以把多次虚拟dom的比对结合成一次来做，降低虚拟dom比对的频率
4. 虚拟dom  同层比对 key值