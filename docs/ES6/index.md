## let const var
 - let const 针对块级作用域，没有变量提升（es6），声明之前使用会报错（TDZ）
 - var 针对函数作用域和全局作用域 ，存在变量提升（es5）,声明之前使用会赋值undefined 

## set和map区别
 - Set 对象类似于数组，且成员的值都是唯一的。
 
```
const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const set = new Set();
arr.forEach(item => set.add(item));
console.log(set);  // 1, 2, 3, 4, 5
// 数组快速去重
console.log([...new Set(arr)]);  //[1, 2, 3, 4, 5]
set.add(5) // 添加
set.has(5) // 是否存在5
set.delete(5) // 删除5
set.cleat()   // 清除集合中所有元素
set.size  // 长度

```
 - Map 对象是键值对集合，和 JSON 对象类似，但是 key 不仅可以是字符串还可以是对象
```
var map = new Map();
var obj = { name: '小缘', age: 14 };
map.set(obj, '小缘喵');
map.get(obj); // 小缘喵
map.has(obj); // true
map.delete(obj) ;// true
map.has(obj); // false
map.clear(); // 移除集合中所有的键值对
map.size(); // 长度
forEach
```
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