
## vue 相关试题

 ## 使用jquery和vue框架的区别
   - 数据和视图的分离，解藕（开放封闭原则）
   - 以数据驱动视图，只关心数据变化， DOM操作被封装
  
 ## 说一下对MVVM的理解
   - mvc基本介绍
     - view： view视图 界面
     - model：数据模型
     - control：控制器（逻辑处理）
   - mvvm基本介绍
     - View：视图 模版（视图和模型是分离的）
         - 通过事件绑定影响model
     - Model：模型，数据
         - 通过事件绑定影响model
     - ViewModel：连接Model和View（连接器） 
     
## vue的三要素
   - 响应式： vue如何监听到data的每个属性变化
   - 模版引擎： vue的模版如何被解析，指令如何处理
   - 渲染：vue的模版如何被渲染成html，以及渲染过程
     
## 什么是响应式
  - 修改data属性之后，vue立刻监听到
  - data属性被代理到vm上
  - object.defineProperty模拟实现（响应式模拟）
      
```
    var vm= {}
    var data = {
        name: 'zhangsan',
        age: 'lisi'
    }
    
    var key，  value
    for（key in value）{
        function(key){
            Object.defineProperty(vm, key, {
                get: function(){
                    console.log('get', data[key])   //监听
                    return data[key]
                }
                set: function(newVal){
                    console.log('set', newVal)   //监听
                    data[key] = newVal
                }
            }){
                
            }
        }(key)
    }
```
## vue中如何解析模版
  - 模版是什么
    - 本质是字符串
    - 有逻辑，v-if  v-for等
    - 与html格式很像，但有很大区别，html是静态的，vue是动态的
    - 最终还是要转化为html来展示
    - 
    - 模版最终要转换为js代码原因：
      - 有逻辑 v-ifv-for ，必须用js才能实现（图灵完备）
      - 转换为html渲染页面，必须由js实现
      - 因此模版最终要转换为一个js函数（render函数）

  - render函数
  - render函数与vdom
## vue的整个实现流程
- 解析模版成render函数
  - width的用法
  - 模版中的所有信息都被render函数包含
  - 模版中用到的data的属性，全都变成js变量
  - 模版中的v-if v-for  v-on，全部都变成了js逻辑
  - render函数返回vnode
- 响应式开始监听
 - object.defineProperty
 - 将data的属性代理到vm上
- 首次渲染，显示页面，且绑定依赖
- data属性变化，触发rerender

## vue双向数据绑定原理

- vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
      
## vue组件间的参数传递

##  vue的路由实现
 - hash ——即地址栏URL中的#符号。比如这个URL：http://www.abc.com/#/hello, hash 的值为#/hello。它的特点在于：hash 虽然出现URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。

 - history ——利用了HTML5 History Interface 中新增的pushState() 和replaceState() 方法。（需要特定浏览器支持）            这两个方法应用于浏览器的历史记录站，在当前已有的back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改是，虽然改变了当前的URL，但你浏览器不会立即向后端发送请求。          history模式，会出现404 的情况，需要后台配置。

 - 404 错误
    - hash模式下，仅hash符号之前的内容会被包含在请求中，如 http://www.abc.com, 因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回404错误；

    - history模式下，前端的url必须和实际向后端发起请求的url 一致，如http://www.abc.com/book/id 。如果后端缺少对/book/id 的路由处理，将返回404错误。

## vue路由传参的三种方法
  - 直接在路由中写参数

```
<li v-for="article in articles" @click="getDescribe(article.id)">
 getDescribe(id) {
//   直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/describe/${id}`,
 })
//在router--->index.js进行配置
 {
     path: '/describe/:id',
     name: 'Describe',
     component: Describe
   }


//通过this.$route.prams.id取值
```

- 通过prams传参

```
this.$router.push({
          name: 'Describe',
          params: {
            id: id
          }
 })
//在router--->index.js进行配置
{
     path: '/describe',
     name: 'Describe',
     component: Describe
}
//通过this.$route.prams.id取值
```


- 通过query传参

```
this.$router.push({
          path: '/describe',
          query: {
            id: id
  }
//在router--->index.js进行配置
{
     path: '/describe',
     name: 'Describe',
     component: Describe
 }
//通过this.$route.query.id取值
```
## vue的路由钩子函数

## vuex面试相关
   
   -（1）vuex是什么？怎么使用？哪种功能场景使用它？

vue框架中状态管理。在main.js引入store，注入。新建一个目录store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

  - （2）vuex有哪几种属性？

有五种，分别是 State、 Getter、Mutation 、Action、 Module

  - vuex的State特性
    - A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data
    
    - B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
    
    - C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中
  - vuex的Getter特性
    - A、getters可以对State进行计算操作，它就是Store的计算属性
    
    - B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
    
    - C、 如果一个状态只在一个组件内使用，是可以不用getters

  - vuex的Mutation特性

    - Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。
- （3）不用Vuex会带来什么问题？
    - 可维护性会下降，想修改数据要维护三个地方；
    
    - 可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；
    
    - 增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。

## css只在当前组件起作用？
```
   当前组件<style>写成<style  scoped> 
  ```
## v-if和v-show的区别？
  - v-if的显示和隐藏是在dom里创建和消除dom节点
  - v-show是用css样式的display来控制dom节点的显示和隐藏
## $route和$router的区别
  - 在任何组件内通过 this.$router访问路由器，也可以通过 this.$route 访问当前路由
## vue.js的两个核心是什么
  - 数据驱动
  - 组件系统
## vue几种常用的指令
  - v-text v-html v-bind v-on v-model v-for
## vue常用的修饰符
## v-on可以绑定多个方法吗
  - 可以
## vue中key值的作用！！！
  - 需要提供一个唯一的key值（常用ID），以便它能跟踪每个节点的身份，从而重用和重新排序现有元素
## 什么是vue的计算属性
## vue等单页面应用及其优缺点
  - 优点：

Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。

  - 缺点：

不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。
## 浏览器输入url到页面展示发生了些什么
## 性能优化