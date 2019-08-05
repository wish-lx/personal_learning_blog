## event-loop

参考  
- https://www.cnblogs.com/cangqinglang/p/8967268.html
- 更清晰的案例分析 https://segmentfault.com/a/1190000016278115?utm_source=tag-newest
1. JS是一门单线程非阻塞的脚本语言，用途：与浏览器交互
2. 单线程意味着，只有一个主线程来处理所有任务
3. 非阻塞则意味着，当主线程需要处理一个耗时的异步任务时，会先将其挂起，等到异步任务返回结果时，再按照一定规则去执行相应的回调
4. 单线程的必要性，主要是为了保证程序执行的一致性，由于我们需要在浏览器中进行各种DOM操作，如果JS 是多线程，那当两个线程同时对同一DOM 操作时，一个修改属性，一个删除DOM，此时就会出现问题，所以为了保证程序执行的一致性，JS就只用一个主线程来执行代码
5. 单线程保证了程序执行的顺序，但是却限制了JS 的执行效率，为此，开发出web worker技术，为了提高JS 的执行效率，但所有新线程都受主线程的完全控制，不能单独执行，相当于主线程的子线程，且没有执行I/O操作的权限，只能执行一些计算的任务，所以并没有完整的功能，所以没有改变JS 单线程的本质
6. JS 实现非阻塞依靠的就是事件循环机制（event loop）
7. 事件循环机制，主要有几个概念：执行栈和事件队列
8. 执行栈会先执行同步任务，遇到异步任务，会先将其挂起，先去执行其他的同步任务，等其结果返回后，会将该事件放入与当前执行栈不同的另一个队列，称之为事件队列，被放入事件队列后该事件的回调并不会立即执行，而是等到执行栈中的所有任务都执行完毕，主线程闲置时，主线程才会去查找事件队列中是否有任务，如果有，主线程会从中取出排在第一位的事件，并将该事件对应的回调放入到执行栈中，然后执行其中的同步代码，如此反复，形成一个循环，该过程即被称为事件循环
9. 不同的异步任务分两类，微任务和宏任务，同一次事件循环中，宏任务永远在微任务之前执行，即当前执行栈执行完毕之后，会优先执行所有的微任务队列中的事件，执行完之后再去宏任务中取出一个事件去执行
10. 宏任务： setInterval(),  setTimeout()
11. 微任务： new Promise(), async await
12. 例题

```
async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')
```


```
new Promise((resolve, reject) => {
  console.log("async1 start");
  console.log("async2");
  resolve(Promise.resolve());
}).then(() => {
  console.log("async1 end");
});

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
```