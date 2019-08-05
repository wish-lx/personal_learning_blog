## JS高级
# import与require区别
 1. 遵循规范
– require 是 AMD规范引入方式
– import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法

2. 调用时间
– require是运行时调用，所以require理论上可以运用在代码的任何地方
– import是编译时调用，所以必须放在文件开头
3. require特点：
    1. 运行时加载
    2. 拷贝到本页面
    3. 全部引入
4. import特点：
    1. 编译时加载
    2. 只引用定义
    3. 按需加载
# promise.all
 1. Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
 具体代码如下：
 ```
let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
  resolve('success')
})

let p3 = Promse.reject('失败')

Promise.all([p1, p2]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

Promise.all([p1,p3,p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)      // 失败了，打出 '失败'
})
```
**需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的.
Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。**
# promise.race
1. 顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
```
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})
```
原理是挺简单的，但是在实际运用中还没有想到什么的使用场景会使用到。
## 事件轮询
## 宏任务微任务
  - 宏任务：包括整体代码script，setTimeout，setInterval。
  - 微任务：Promise，process.nextTick。
## 深拷贝与浅拷贝
## Object.create()底层实现原理
  - 通过Object.create()方法创建一个新对象，使新对象的__proto__原型指向通过create传入的对象
```
  let foo = {
      age:10
  };
  let f = Object.create(foo);
  console.log(f.age);//10

create的内部原理:
  Object.create => function(obj){
      var f = function(){};
      f.prototype = obj;
      return new f();
  }
```
  1. 先在内部创建一个空构造函数
  2. 把构造函数的原型指向传进来的obj对象
  3. 通过new创建对象并返回

