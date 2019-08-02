## async await
> ### 原文链接：https://www.jianshu.com/p/72e36168944f
  - 一、概念
      - 1.明确概念
        - async函数就是generator函数的语法糖。async函数，就是将generator函数的*换成async，将yield替换成await。
        - 【async函数对generator的改进】
          - (1)内置执行器，不需要使用next()手动执行。
          - (2)await命令后面可以是Promise对象或原始类型的值，yield命令后面只能是Thunk函数或Promise对象。
          - (3)返回值是Promise。返回非Promise时，async函数会把它包装成Promise返回。(Promise.resolve(value))
      - 2.作用
         - 异步编程的终极解决方案。
      - 3.通俗理解（个人理解）
         - async/await，就是异步编程回调函数写法的替代方法。（使代码以同步方式的写法完成异步操作）
  - 二、执行顺序
    - 1.原理
      - 函数执行时，一旦遇到await就会返回。等到触发的异步操作完成（并且调用栈清空），再接着执行函数体内后面的语句。
      - 【个人理解】
         #### await语句后面的代码，相当于回调函数。（即：await的下一行开始，都视作回调函数的内容）
         #### 回调函数会被压入microtask队列，当主线程调用栈被清空时，去microtask队列里取出各个回调函数，逐个执行。
        - await只是让当前async函数内部、后面的代码等待，并不是所有代码都卡在这里。遇到await就先返回，执行async函数之后的代码。
   - 2.await执行细节
     - 主线程执行过程中，遇到await后面的函数调用，会直接进入函数，并执行。
     - (1)当这个函数返回非promise：
       - await后面的代码被压入microtask队列。当主线程执行完毕，取出这个回调，执行。
     - (2)当这个函数返回promise：
       - await后面的代码被压入microtask队列。当主线程执行完毕，取出这个回调，发现await语句等待的函数返回了promise，把后续代码赋给这个promise对象的then，并把这个promise的回调再压入microtask队列，重新排队。当它前面的回调函数都被取出执行后，再取出它，执行。
###### 栗子:
```
【No1】await返回非promise
async function func1(){    console.log('func1');
    var a = await func2(); //当await返回非promise
    console.log('func1 return');}
function func2(){
    console.log('func2');
} //返回undefined
func1();
new Promise(function(resolve){
    console.log('promise1');
    resolve('resolved');
}).then(function(data){
    console.log(data);
});
结果：
func1
func2
promise1
func1 return
resolved
```
```
【No2】await返回promise
async function func1(){   
    console.log('func1');   
    var a = await func2(); //当await返回promise    
    console.log('func1 return');
}
async function func2(){    
    console.log('func2');
} //返回promise
func1();
new Promise(function(resolve){   
console.log('promise1');   
 resolve('resolved');
}).then(function(data){   
 console.log(data);
});
结果：
func1
func2
promise1
resolved
func1 return
```
```
【No3】await返回promise（来自头条笔试题）
    async function async1() {     
        console.log("async1 start");      
        await  async2();     
        console.log("async1 end");   
     }  
    async  function async2() {    
        console.log( 'async2');  
    } 
     console.log("script start");  
    setTimeout(function () {      
        console.log("settimeout");  
    },0);
    async1();  
    new Promise(function (resolve) {      
        console.log("promise1");      
        resolve();  
    }).then(function () {      
        console.log("promise2"); 
    }); 
    console.log('script end');  
    结果：
    script start
    async1 start
    async2
    promise1
    script end
    
    promise2
    async1 end
    settimeout
```
