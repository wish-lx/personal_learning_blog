## setTimeout 经典面试题
```
//  请你预测一下代码会输出什么？
for(var i = 0; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    },1000)
}
```

- 如果你没有理解透js作用域和闭包的知识点的话，你可能会认为这道题的输出顺序是：
for循环，输出1，2，3，4，5.  或者循环输出1~5

- 但是实际的答案在log之后循环输出了五个数字6！！
- 接着可能面试官会让你改下代码，期望结果是每间隔一秒输出一个数字，即等待1秒  输出1，等待2秒 输出2，等到3秒 输出3....
- 回过来看看这段代码的执行顺序，首先for循环执行，在js引擎读到setTimeout时，因为setTimeout不是立即执行的，他们的回调会被push到宏任务队列中，再回头执行任务队列中的回调函数时，变量i早就变成了6。知道了原因，我们着手解决问题。这里我们需要给setTimeout创建一个闭包的环境，让它的回调函数顺利取到循环中的变量i就解决问题了。
1. 使用IIFE（立即执行的匿名函数）

```
//间隔1秒依次输出1，2，3，4, 5
for(var i = 1; i <= 5; i++) {
    (function(i){
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    })(i);
}
```
2. 使用ES6语法中的let来声明变量i
   ==es6中的let声明的变量是具有块级作用域的，所以我们可以大胆的使用==

```
for(let i = 1;i <=5; i++) {
    setTimeout(function() {
        console.log(i);
    },i*1000)
}
```
3. 使用bind方法

```
for(var i = 1; i <= 5; i++) {
     setTimeout(function(i) {
        console.log(i);
    }.bind(null, i)，i*1000)
}
```
4. 利用setTimeout的第三个参数！！注意：setTineout的第三个参数及以后的参数都可以作为回调函数的参数哦

```
for(var i = 1; i<= 5;i++) {
    setTimeout(function time(i) {
        console.log(i);
    },i*1000,i)
 }
```
- 关于setTimeout的延时参数

```
setTimeout(function() {
  console.log('代码执行了')；
},3000)
```
- 我们一般说代码在3秒之后执行，这样的说法是不严谨的。
- 准确的解释是：3秒后，setTimeout里的函数被推入event queue,而event queue里的任务，只有在主线程空闲下来之后才会去执行。
如果主线程上有很多任务执行，超过3秒，比如执行了10秒，那么这个函数只能在10秒之后才能执行
- 另外：为了确保浏览器的执行一致，HTML5规范规定设置的最小延迟是4ms