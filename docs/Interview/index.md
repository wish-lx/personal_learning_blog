# 相关面试

## 欧科互动网络科技有限公司（一面）
  ## 一. **事件轮询**

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
11. 微任务： new Promise()
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


script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
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

async1 start
async2
promise1
promise2
async1 end

``` 

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


script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
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
  resolve(console.log('9'));
}).then(function() {
  console.log("promise2");
});

async1 start
async2
promise1
9
promise2
async1 end


``` 
```
new Promise((resolve, reject) => {
  console.log("async1 start");
  console.log("async2");
  resolve();
}).then(() => {
  Promise.resolve();
  console.log("async1 end");
});

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});

```
 ## 二. **js继承**
  1. 原型继承的5种方式

 ## 三. **promise.all  promise.race**
  1. Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
  ```
  const p = Promise.all([p1, p2, p3]);
  ```
  p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

   2. Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
   ```
   const p = Promise.race([p1, p2, p3]);
   ```
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

 ## 四. **在工作中遇到的跨域解决方案**
   1. jsonp
   ```
        <button id="btn">点击</button>
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
        <script>
            $('#btn').click(function(){
                    var frame = document.createElement('script');
                    frame.src = 'http://localhost:3000/article-list?name=leo&age=30&callback=func';
                    $('body').append(frame);
                });
                
                function func(res){
                    alert(res.message+res.name+'你已经'+res.age+'岁了');
                }
        </script>
  ```
  这里可以看到，我们声明了一个func函数，但没有执行，你可以想一下，如果服务端接口到get请求，返回的是func({message:'hello'})，这样的话在服务端不就可以把数据通过函数执行传参的方式实现数据传递了吗。

  **总结：**

  其实jsonp的整个过程就类似于前端声明好一个函数，后端返回执行函数。执行函数参数中携带所需的数据，整个过程实际非常简单易懂

   2. 后端代理

## 五. **深拷贝 浅拷贝**
  1. 深拷贝与浅拷贝区别
   - 浅拷贝： 将原对象或原数组的引用直接赋给新对象，新数组，新对象／数组只是原对象的一个引用
   - 深拷贝： 创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来，是“值”而不是“引用”
  2. 为什么要使用深拷贝？
   - 我们希望在改变新的数组（对象）的时候，不改变原数组（对象）
  3. 深拷贝的要求程度
   - 我们在使用深拷贝的时候，一定要弄清楚我们对深拷贝的要求程度：是仅“深”拷贝第一层级的对象属性或数组元素，还是递归拷贝所有层级的对象属性和数组元素？
  4. 怎么检验深拷贝成功
   - 改变任意一个新对象/数组中的属性/元素,都不改变原对象/数组

   **只对第一层级做拷贝**
 

   1. 深拷贝数组（只拷贝第一级数组元素）　

-  直接遍历
```
var array = [1, 2, 3, 4];
function copy (array) {
   let newArray = []
   for(let item of array) {
      newArray.push(item);
   }
   return  newArray;
}
var copyArray = copy(array);
copyArray[0] = 100;
console.log(array); // [1, 2, 3, 4]
console.log(copyArray); // [100, 2, 3, 4]
```

 

- slice()
```
var array = [1, 2, 3, 4];
var copyArray = array.slice();
copyArray[0] = 100;
console.log(array); // [1, 2, 3, 4]
console.log(copyArray); // [100, 2, 3, 4]
 
slice() 方法返回一个从已有的数组中截取一部分元素片段组成的新数组（不改变原来的数组！）
用法：array．slice(start,end)　start表示是起始元素的下标，　end表示的是终止元素的下标
当slice()不带任何参数的时候，默认返回一个长度和原数组相同的新数组
```
 

- concat()
```
var array = [1, 2, 3, 4];
var copyArray = array.concat();
copyArray[0] = 100;
console.log(array); // [1, 2, 3, 4]
console.log(copyArray); // [100, 2, 3, 4]
 

concat() 方法用于连接两个或多个数组。( 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。)
用法：array.concat(array1,array2,......,arrayN)
因为我们上面调用concat的时候没有带上参数，所以var copyArray = array.concat();实际上相当于var copyArray = array.concat([]);

也即把返回数组和一个空数组合并后返回
```
 

**但是，事情当然不会这么简单，我上面的标题是 “深拷贝数组（只拷贝第一级数组元素）”，这里说的意思是对于一级数组元素是基本类型变量（如number,String,boolean）的简单数组, 上面这三种拷贝方式都能成功，但对第一级数组元素是对象或者数组等引用类型变量的数组，上面的三种方式都将失效**

  2. 深拷贝对象
- 直接遍历

- ES6的Object.assign
```
var obj = {
  name: '彭湖湾',
  job: '学生'
}
var copyObj = Object.assign({}, obj);
copyObj.name = '我才不叫彭湖湾呢！ 哼  (。・`ω´・)';
console.log(obj);   // {name: "彭湖湾", job: "学生"}
console.log(copyObj);  // {name: "我才不叫彭湖湾呢！ 哼  (。・`ω´・)", job: "学生"}
Object.assign：用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target），并返回合并后的target

用法： Object.assign(target, source1, source2);  所以 copyObj = Object.assign({}, obj);  这段代码将会把obj中的一级属性都拷贝到 ｛｝中，然后将其返回赋给copyObj
```
 

- ES6扩展运算符：

扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中

 

**对多层嵌套对象，很遗憾，上面三种方法，都会失败：**

**拷贝所有层级:**
1. 不仅拷贝第一层级，还能够拷贝数组或对象所有层级的各项值
2. 不是单独针对数组或对象，而是能够通用于数组，对象和其他复杂的JSON形式的对象
   - JSON.parse(JSON.stringify(XXXX))

```

var array = [
    { number: 1 },
    { number: 2 },
    { number: 3 }
];
var copyArray = JSON.parse(JSON.stringify(array))
copyArray[0].number = 100;
console.log(array); //  [{number: 1}, { number: 2 }, { number: 3 }]
console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]
```
   - 我们怎么去实现深拷贝呢，这里可以递归递归去复制所有层级属性。

这么我们封装一个深拷贝的函数(PS：只是一个基本实现的展示，并非最佳实践)
```
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);
```


