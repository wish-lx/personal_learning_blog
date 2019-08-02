## 北控
## js的基本数据类型
 - undefined null boolean number string Symbol（es6）
   - 如果有一种机制，保证每个属性的名字都是独一无二的，这样就从根本上防止了属性名的冲突。这也是ES6引入Symbol的原因。
   - 在对象的内部使用Symbol值定义属性时，Symbol值必须放在方括号[ ] 中。
   - 由于每一个Symbol的值都是不相等的，所以Symbol作为对象的属性名，可以保证属性不重名

## js原型链的理解
   
## js实现继承的方式
   



## 浏览器的缓存：强缓存和协商缓存具体区别
  - 什么是浏览器缓存

浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。
  - 1.强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;
  - 2.协商缓存：向服务器发送请求，服务器会根据这个请求的request，header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。

。
## cookie sesstionStorage localStorage 区别
  - sessionStorage 、localStorage 和 cookie 之间的区别
共同点：都是保存在浏览器端，且同源的。

  - 区别：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递；cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。

  - 而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

   - 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

  - 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。

 
## localstorage 是可以跨域的吗
  
## 本地存储的方式，除去上面两种

## session与cookie的区别

  1）Cookie以文本文件格式存储在浏览器中，而session存储在服务端它存储了限制数据量。它只允许4kb它没有在cookie中保存多个变量。

（2）cookie的存储限制了数据量，只允许4KB，而session是无限量的

（3）我们可以轻松访问cookie值但是我们无法轻松访问会话值，因此它更安全

（4）设置cookie时间可以使cookie过期。但是使用session-destory（），我们将会销毁会话。
 cookie数据存放在客户的浏览器上，session数据放在服务器上

cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑*到安全应当使用session

session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie

单个cookie保存的数*据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie

建议将登录信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中

session保存在服务器，客户端不知道其中的信心；cookie保存在客户端，服务器能够知道其中的信息

session中保存的是对象，cookie中保存的是字符串

session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到，而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的

## 什么是sesstion
  - session称为会话信息，位于web服务器上，主要负责访问者与网站之间的交互，当访问浏览器请求http地址时，将传递到web服务器上并与访问信息进行匹配， 当关闭网站时就表示会话已经结束，网站无法访问该信息了，所以它无法保存永久数据，我们无法访问以及禁用网站

## http协议，以及和websocket区别
     

## vue中常见指令
 - v-if指令 v-show指令 v-else指令 v-for指令
 - v-bind指令 v-model v-on指令
 - v-text指令
## v-if v-show 区别
  - 相同点：v-if与v-show都可以动态控制dom元素显示隐藏

  - 不同点：v-if显示隐藏是将dom元素整个添加或删除，而v-show隐藏则是为该元素添加css--display:none，dom元素还在。
## 除去上面两者隐藏元素的方式，还有哪些，不局限于vue
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

## set和map区别
 - Set 对象类似于数组，且成员的值都是唯一的。
 
```
const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const set = new Set();
arr.forEach(item => set.add(item));
console.log(set);  // 1, 2, 3, 4, 5
// 数组快速去重
console.log([...new Set(arr)]);  //[1, 2, 3, 4, 5]


```
 - 
Map 对象是键值对集合，和 JSON 对象类似，但是 key 不仅可以是字符串还可以是对象
```
var map = new Map();
var obj = { name: '小缘', age: 14 };
map.set(obj, '小缘喵');
map.get(obj); // 小缘喵
map.has(obj); // true
map.delete(obj) ;// true
map.has(obj); // false

```
 
## weex

## css预处理 scss和less区别

## 前端优化方法（cdn？）


## 平常看什么书
## 职业规划