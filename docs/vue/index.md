
# vue 
## vue自定义指令
1. 全局自定义指令：
```
   Vue.directive('demo',{
     bind: function(el,binding,vnode,oldVnode){

     }
     inserted: function(el){

     }
     update: function(el){

     }
     componentsUpdated: function(el){

     }
     unbind: function(el){
      
     }
   })
   ```
2. 组件内自定义指令
```
  directive:{
    demo:{
      inserted: function(el){

      }
    }
  }
```
- 常用钩子函数： bind  unbind   inserted   update componentsUpdated
- 常用钩子函数参数： el  binding vnode oldvnode
- binding里面常用参数： name  value oldvalue  expression args modifiers 
## vue.use 内部原理
   ```
   vue.use 内部暴露一个install方法，这个方法的第一个参数是Vue构造器，第二个选项是可选的选项对象
   myPlugin.install=function(Vue,options){
     // 1. 添加全局方法或属性
      Vue.myGlobalMethod = function () {
        // 逻辑...
      }
      // 2. 定义全局指令
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      ...
    })
    // 3. 全局混入mixin
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
    // 5. 注册全局组件
      Vue.component()
   }
   ```
## 虚拟dom相关
```
 1. 为什么要有虚拟dom
   - 每次DOM操作会引起重绘或者回流，频繁的真实DOM的修改会触发多次的排版和重绘相当耗性能
   - 使用虚拟dom属性少，真实dom属性多
 2. 虚拟dom是什么
   - 虚拟DOM就是一个JS对象，用一个js对象来描述真实的DOM
 3. 虚拟dom为什么会提高性能
   - 虚拟DOM提高性能，不是说不操作DOM，而是减少操作DOM的次数，减少回流和重
   - 使用diff算法比较新旧虚拟DOM----即比较两个js对象不怎么耗性能
 4. diff算法做了些什么
   - diff算法指的就是两个虚拟DOM作比对，在diff算法中有个概念就是同级比对，首先比对顶层虚拟DOM节点是否一致，如果一样就接着比对下一层，如果不一样，就停止向下比对，将原始页面中这个DOM及 下面的DOM全部删除掉，重新生成新的虚拟DOM，然后替换掉原始页面的DOM
   - 存在问题：如果第一层虚拟DOM节点不同，下面的都同，使用虚拟DOM的diff算法，则这些节点都不能使用了，会造成重新渲染的浪费。
   - 优点：同层虚拟DOM比对，只需要一层层的比较，算法简单，比对的速度快
   - 虽然会造成重新渲染的浪费，但是会大大减少两个虚拟DOM比对的性能消耗
  5. 列表中key的作用（虚拟DOM中的列表中同级元素的key值要不同，使用diff算法，判断哪些元素是增删改，从而提高性能）
    - key是vue用于跟踪哪些元素是增加、删除、修改的辅助标记，需要保证在同级元素中key的唯一性
    - Diff 算法借助元素的 Key 值判断元素是新增、删除、修改，从而减少不必要的元素重渲染。
  6. 在循环中key值最好不要用index的原因？（建议使用id或者是不变的值）
    - 如果key值使用index的话，就可能无法使原始的虚拟DOM中的key值和新的虚拟DOM中的key值一致，从而不能充分发挥diff算法的优势。
```
## 双向数据绑定原理相关
```
 1. 为什么数据能直接在视图显示
    - v-model默认绑定了DOM对象（input）的value属性， 当它初次绑定的时候，
      就会触发getter,watcher就会触发， watcher通知Vue生成新的VDOM树，
      再通过render函数进行渲染,生成真实DOM
 2. 为什么视图修改数据就会修改
    - 当视图修改是， 意味着DOM的value属性值改变，就会触发setter,watcher监听机制就会执行
      watcher通知Vue生成新的VDOM树，再通过render函数进行渲染,生成真实DOM
 3. 使用v-model实现

```
 ## vue中常见指令
 - v-if指令 v-show指令 v-else指令 v-for指令
 - v-bind指令 v-model v-on指令
 - v-text指令
## v-on v-bind缩写

## vue里面的计算属性和methods区别
 - computed计算属性的缓存原理在我们处理大量数据的时候使用可以大大提高效率，不必在数据没有发生改变的时候重新获取数据的值，可直接获取到结果，并且只执行绑定依赖的方法。methods里方法在依赖的值改变后，只有设置触发才会重新执行methods里相关的方法。
## vue中的插槽有几种类型 怎么用

## 如何实现防抖和节流

## 事件修饰符的有执行顺序吗

## router的replace 和push 有什么区别
  - router.go(n)这个方法的参数是一个整数，意思是在 history记录中向前或者后退多少步，类似 window.history.go(n)
  - router.push(location) 
想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
  - router.replace(location) 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录
  
## vuex的属性，以及分别做什么事
  - Vuex有五个核心概念，state, getters, mutations, actions, modules
  - state => 基本数据 
   getters => 从基本数据派生的数据 
mutations => 提交更改数据的方法，同步！ 
actions => 像一个装饰器，包裹mutations，使之可以异步。 
modules => 模块化Vuex

## vue按需加载如何实现
 ## vuex  在浏览器刷新的时候state值会被置成初始化值，如何解决？
   - 存储在localStorage  sessionStorage  cookie中
 ## keep-alive 作用以及功能  具体
   是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
 ## 在项目中遇到的印象深刻的问题 如何解决
   - input框输入问题
 ## 怎么给 vue 定义全局的方法？
  - 第一种：直接挂载到vue.prototype上
  ```
   在main.js里进行全局注册
   Vue.prototype.funcName = function (){}
   在所有组件里可调用
   this.funcName();

  ```
  - 第一种方法延伸：把方法定义到一个公用组件上，在main.js中引入该文件，并挂载到vue.prototype上，在所需要的文件中直接调用方法
  ```

// 导入共用组件
import global from './common.vue'
Vue.prototype.COMMON = global
使用：
export default {
  data () {
    return {
      username: '',
      password: '',
      // 赋值使用, 可以使用this变量来访问
      globalHttpUrl: this.COMMON.httpUrl
    }
  },
  ```
- 第二种: 使用全局混入Mixin
```
创建filter.js文件
import { typeConfig } from "./config"
export default {
  filters: {
    $_filterType: (value) => {
      return typeConfig[value] || "type undefined"
    }
  }
}
最后，在 main.js 中引入我们的 filters 方法集

import filter from "./filters"
Vue.mixin(filter)
接下来，我们就可以在 .vue 的模板文件中随意使用自定义函数了

<template>
  <div>{{typeStatus | $_filterType}}<div>
</template>
```

## 怎么解决vue动态设置img的src不生效的问题,为什么不生效
```
<img class="logo" :src="logo" alt="公司logo">
export default {
  name: "HelloWorld",
  data() {
    return {
      logo:require("./../assets/images/logo.png"),
    };
  }
};
</script>
因为动态添加src被当做静态资源处理了，没有进行编译
解决方法： imgSrc写成require('path')
```
 ## vue 渲染模板时怎么保留模板中的 HTML 注释呢？
   - comments当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。
   ```
   <script>
     export default{
       name: 'hello'
       comments: true
       data(){
         return {

         }
       }
     }
   </script>
   ```
 ## vue scoped 原理
   - 作用： 实现组件私有化，不对全局造成样式污染
   - 具体原理： vue通过在DOM结构以及css样式上加上唯一的标记，保证唯一，达到样式私有化，不污染全局的作用
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
  - vdom
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
## 虚拟dom
   1. 未使用v-dom时，遇到的问题：
    -  dom操作是昂贵的
    - 尽量减少dom操作，而不是‘推倒重来’
    - 项目越复杂，影响越严重  
   2. vdom是什么
     - virtual dom ，虚拟dom            
     - 用js模拟dom结构
     - dom变化的对比，放在js层来做
     - 提高重绘性能
   3. 为什么会存在vdom
     - dom操作非常昂贵
     - 将dom对比变化的操作放在js层来做，提高效率
   4. v-dom为何使用diff算法：
     - dom操作时昂贵的，因此尽量减少操作dom
     - 找出这次dom必须更新的节点来更新，其他的不更新
     - 这个找出的过程就需要diff算法
## vue生命周期函数
  Vue实例有一个完整的生命周期，也就是说从开始创建、初始化数据、编译模板、挂载DOM、渲染-更新-渲染、卸载等一系列过程，我们成为Vue 实例的生命周期，钩子就是在某个阶段给你一个做某些处理的机会。
  1. beforeCreate( 创建前 )
   - 在实例初始化之后，数据观测和事件配置之前被调用，vue中的data和methods都取不到，且在watch之前执行
  2. created ( 创建后 ）
   - 实例创建完成之后立即被调用，在这一步，实例已完成：数据观测、属性和方法的运算，watch/event事件回调，然而，挂载阶段还没有开始, $el属性目前不可见；但是可以获取vue中的data，调用methods方法，获取原本html上加载出来的dom，但无法获取通过挂载模版生成的dom
   3. beforeMount（挂载前）
   - 挂载开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。
   4. mounted（挂载后）-- vue组件已经初始化完毕，创建阶段已完成
   - el被新创建的vm.$el替换，并挂载到实例上之后调用该钩子。
   注意： mounted不会承诺所有的子组件也都一起被挂载，若希望整个视图都渲染完毕，可用vm.$nextTick替换mounted
   5. beforeUpdata （更新前）-- 运行阶段
   - 数据更新之前被调用，运用在更新之前访问现有的dom
   6. updated （更新后）-- 运行阶段
   - 在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用
   注意：updated不会承诺所有的子组件也都一起被重绘
   7. beforeDestrioy （销毁前）-- 销毁阶段
   - 在实例销毁之前调用，实例仍然完全可用
    这一步还可以用this来获取实例，
    一般在这一步做一些重置的操作，比如清除掉组件中的定时器  和 监听的dom事件
   8. destrioyed （销毁后）-- 销毁阶段
   - 实例已经被完全销毁了，组件中的数据、方法、指令、过滤器等全部都不可用了
   - 在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用
## 父组件与子组件生命周期运行的顺序
  1. 加载渲染过程
    - 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
  2. 子组件更新过程
    - 父beforeUpdate->子beforeUpdate->子updated->父updated
  3. 父组件更新过程
    - 父beforeUpdate->父updated
  4. 销毁过程
    - 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
## vue 中怎么重置 data
```
  Object.assign(this.$data, this.$options.data())
```
1. Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。 Object.assign(target, …sources)； 参数： target => 目标对象。 sources => 源对象。 返回值: 目标对象。

2. vm.$data 类型：Object 详细：Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问。

3. vm.$options 类型：Object 只读 详细： 用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处：
## vue强制刷新组件方法
1. 使用this.$forceUpdate强制重新渲染
如果要在组件内部中进行强制刷新，则可以调用this.$forceUpdate()强制重新渲染组件，从而达到更新目的。
```
<template>
<button @click="reload()">刷新当前组件</button>
</template>
<script>
export default {
    name: 'comp',
    methods: {
        reload() {
            this.$forceUpdate()
        }
    }
}
</script>
```
2. 使用v-if指令
如果是刷新某个子组件，则可以通过v-if指令实现。我们知道，当v-if的值发生变化时，组件都会被重新渲染一遍。因此，利用v-if指令的特性，可以达到强制刷新组件的目的。
```
<template>
    <comp v-if="update"></comp>
    <button @click="reload()">刷新comp组件</button>
</template>
<script>
import comp from '@/views/comp.vue'
export default {
    name: 'parentComp',
    data() {
        return {
            update: true
        }
    },
    methods: {
        reload() {
            // 移除组件
            this.update = false
            // 在组件移除后，重新渲染组件
            // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
            this.$nextTick(() => {
                this.update = true
            })
        }
    }
}
</script>
```
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
## scoped原理
  - 从原理可见，之所以scoped可达到类似组件私有化、样式设置“作用域”的效果，其实只是在设置scoped属性的组件上的所有标签添加一的data开头的属性，且在标签选择器的结尾加上和属性同样的字段，起到唯一性的作用，但是这样如果组件中也引用其他组建就会出现类似下面的问题：

  - 父组件无scoped属性，子组件带有scoped，父组件是无法操作子组件的样式的（原因在原理中可知），虽然我们可以在全局中通过该类标签的标签选择器设置样式，但会影响到其他组件
  - 父组件有scoped属性，子组件无，父组件也无法设置子组件样式，因为父组件的所有标签都会带有data-v-469af010唯一标志，但子组件不会带有这个唯一标志属性，与1同理，虽然我们可以在全局中通过该类标签的标签选择器设置样式，但会影响到其他组件
  - 父子组件都有，同理也无法设置样式，更改起来增加代码量
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
## watch  computed   methods
 1. 作用机制上
 - watch和computed都是以Vue的依赖追踪机制为基础的，它们都试图处理这样一件事情：当某一个数据（称它为依赖数据）发生变化的时候，所有依赖这个数据的“相关”数据“自动”发生变化，也就是自动调用相关的函数去实现数据的变动。
 - 对methods:methods里面是用来定义函数的，很显然，它需要手动调用才能执行。而不像watch和computed那样，“自动执行”预先定义的函数
 - 总结：methods里面定义的函数，是需要主动调用的，而和watch和computed相关的函数，会自动调用,完成我们希望完成的作用
2. watch computed
    - 相同点： 首先它们都是以Vue的依赖追踪机制为基础的，它们的共同点是：都是希望在依赖数据发生改变的时候，被依赖的数据根据预先定义好的函数，发生“自动”的变化
    - 不同点：watch和computed各自处理的数据关系场景不同
          1. watch擅长处理的场景：一个数据影响多个数据
          2. computed擅长处理的场景：一个数据受多个数据影响
## vue等单页面应用及其优缺点
  - 优点：

Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。

  - 缺点：

不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。
## 浏览器输入url到页面展示发生了些什么