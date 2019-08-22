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
## new操作符
   1. 当代码 new Foo(...) 执行时，会发生以下事情：

    - 一个继承自 Foo.prototype 的新对象被创建。
    - 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
    - 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）