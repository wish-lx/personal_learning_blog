## 原型链类
#### 创建对象有几种放法
   - 对象字面量
   - new Object（）
   - new 构造函数（普通）
   - object.create()
#### 原型 构造函数 实例 原型链
#### instanceof原理
   - 判断实例对象的proto与构造函数的prototype的引用是否相同(在这个原型链上的都可以)
#### new 运算符

## 面向对象
  #### 类的声明
   - es6 
   ```
   function Animal(){
       this.name = name
   }
   ``` 
   - es5
   ```
   class Animal2{
       constructor(){
           this.name = name
       }
   }
   ```
   - 实例化
   ```
   new Animal()  new Animal2()
   如果无参数，可以不写括号
   ```
   - 实现继承的几种方式
     - 1）借用构造函数实现继承（无法继承父类原型）
     ```
     function Parent1(){
         this.name = 'name'
     }
     function Child1(){
     // 通过call来将parent1的this指向改为child1
         parent1.call(this)
         this.type = 'type'
     }
     console.log(Child1())
     ```
     - 2）借助原型链实现继承(父类构造函数和原型上的属性和方法都被继承)
     ```
     // 缺点：如果子类同时new多个实例，在某个实例上面添加属性，在另一个实例上面也可以取到
        function Parents2(){
            this.name = 'parents2'
        }
        function Child2(){
            this.name = 'child2'
        }
        Child2.prototype =  new Parents2()
        console.log(Child2())
     ```
     - 3）组合方式（结合上面两种方式的优点，去掉其缺点，但是自身缺点:1)父类构造函数执行了两次2)实例的的constructor指向父类构造函数）
     ```
      function Parents3(){
          this.name = 'parents3'
          this.play = ['1', '2', '3']
      }
      function Child3(){
          Parents3.call(this)
          this.type = 'child3'
      }
      Child3.prototype = new Parents3()
      var c1 = new Child3()
      var c2 = new Child3()
      c1.play.push(4)
     ```
     - 4) 组合继承的优化1（缺点：实例的的constructor指向父类构造函数）
     ```
      function Parents3(){
          this.name = 'parents3'
          this.play = ['1', '2', '3']
      }
      function Child3(){
          Parents3.call(this)
          this.type = 'child3'
      }
      Child3.prototype =  Parents3.prototype
      var c1 = new Child3()
      var c2 = new Child3()
      c1.play.push(4)
     ```
      - 5) 组合继承的优化2（实例指向子类构造函数）
     ```
      function Parents3(){
          this.name = 'parents3'
          this.play = ['1', '2', '3']
      }
      function Child3(){
          Parents3.call(this)
          this.type = 'child3'
      }
      // 使用object.create创造一个新对象（第一个参数为新创建对象的原型对象）
      Child3.prototype = Object.create(Parents3.prototype)
      //手动指定 constructor
      Child3.prototype.constructor = Child3
      var c1 = new Child3()
      var c2 = new Child3()
      c1.play.push(4)
     ```
## DOM事件类
  #### DOM标准定义的级别（DOM标准定义的级别）
   - DOM0: element.onclick= function(){}
   - DOM2: element.addEventListener('click',function(){},false)
   - DOM3: element.addEventListener('keyup',function(){},false)
  #### DOM事件模型
   - 捕获和冒泡
  #### DOM事件流
   - 捕获阶段 目标阶段 冒泡阶段
  #### 描述DOM事件捕获的具体流程
   - window document html body ... 目标元素
  #### 描述DOM事件冒泡的具体流程
   - 上面这个问题答案的倒序
  #### event对象的常见应用
   - event.preventDefault() 阻止默认事件（例如a标签的跳转）
   - event.stopPropagation() 阻止冒泡事件
   - event.stopimmediatePropagetion() 事件优先级（例如在一个注册事件中，写上这句话，阻止下一个事件的触发）
   - 后两者通常用于事件代理：
   - event.target 当前被点击的元素
   - event.currentTarget 当前绑定事件的对象
  #### 自定义事件
## http协议类
#### http协议的主要特点
   - 简单快速：（每一个资源（一个页面地址，一个图片等），在http处理过程中还是很方便的，我想访问某个资源，只需要输入这个URI就可以了）
   - 灵活：在每个http 头部会有一个数据类型，通过一个http协议就可以完成不同数据类型的传输
   - 无连接：指的是连接一次，它就会断掉，不会保持连接
   - 无状态：指的是客户端和服务端没有办法区分两次连接是否是同一个身份
#### http报文的组成部分
  - 请求报文
    - 请求行（http方法，页面地址，http 协议以及版本）
    - 请求头（就是一些key-value值，来告诉服务端我要哪些内容，要什么类型）
    - 空行
    - 请求体
  - 响应报文
    - 状态行
    - 响应头
    - 空行
    - 响应体
#### http方法
  - get  获取资源
  - post 传输资源
  - put 更新资源
  - delete 删除资源
  - head 获得报文首部
#### post get 区别
  - get在浏览器后退时是无害的，而post会重新发送请求
  - get请求会被浏览器主动缓存，而post不会，除非手动设置
  - get请求参数会完整的保留在浏览器历史记录里，而post不会
  - get在url中传送长度有限制，而post没有限制
  - get参数通过url传递，post参数通过request body传递
#### http状态码
  - 1xx：指示信息，表示请求已接收，继续处理
  - 2xx：成功，表示请求已经成功接收
  - 3xx：重定向，要完成请求必须进行进一步的操作
  - 4xx： 客户端错误，请求有语法错误或者请求无法实现
  - 5xx：服务器错误，服务器无法实现合法的请求
#### 什么是持久连接
  - http协议采用‘请求-应答’模式，当使用普通模式，即非keep-alive模式时，每个请求应答客户端和服务器都要重新进行一次连接，完成之后立即断开连接，（http协议为无连接的协议）
  - 当使用keep-alive模式时（又称持久连接，连接重用）时，keep-alive似的客户端到服务器的连接持续有效，当出现对服务器的后续请求时，keep-alive功能避免了建立或者重新建立连接（1.1版本才开始支持）
#### 什么是管线化
  - 请求1 请求2 请求3  响应1 响应2 相应3
##### 管线化特点
  - 通过持久连接完成，仅http/1.1支持
  - 只有get和head请求可以支持，post有限制
  - 初次创建连接时 ，不应该创建管线化，因为对方服务器不一定支持http/1.1版本
## 通信
 #### 什么是同源策略及其限制
  - 同源策略限制从一个源加载的文档或脚本如何与另一个源的资源进行交互（这是一个用于隔离潜在恶意文件的关键的安全机制）
  - cookie localStorage indexDB无法获取
  - DOM无法获得，ajax请求不能发送
 #### 前后端如何通信
  - ajax（同源）
  - webSocket（不受同源策略限制）
  - CORS（支持跨域也支持同源）
 #### 如何创建ajax
 #### 跨域通信的几种方式
   - jsonp
   - 后端代理






