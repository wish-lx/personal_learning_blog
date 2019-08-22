## js的基本数据类型
 - undefined null boolean number string Symbol（es6）
   - 如果有一种机制，保证每个属性的名字都是独一无二的，这样就从根本上防止了属性名的冲突。这也是ES6引入Symbol的原因。
   - 在对象的内部使用Symbol值定义属性时，Symbol值必须放在方括号[ ] 中。
   - 由于每一个Symbol的值都是不相等的，所以Symbol作为对象的属性名，可以保证属性不重名
## 判断数据类型方法
  1. typeof能够判断出除了null之外的普通数据类型（string、number、undefined、boolean），对象类型能够判断出function ，其他均为object。
  2. instanceof 判断A是否的B的实例（判断的是原型），但是instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。
  3. 判断一个值是否为数组，使用Array.isArray()
  4. 最准确的判断数据类型的方法：Object.prototype.toString.call(obj) 

## 普通函数与箭头函数区别
   - 箭头函数的this已经指定，并且使用call  apply等方法无法进行更改

## js为什么是单线程
   - 如果JS是多线程的方式来操作这些UI DOM，则可能出现UI操作的冲突；如果JS是多线程的话，在多线程的交互下，处于UI中的DOM节点就可能成为一个临界资源，假设存在两个线程同时操作一个DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果

## js原型链的理解
## js实现继承的方式
## 原型链面试题
- 每个对象都有__proto__，指向生成该对象的构造函数的原型。
- 函数的__proto__, 指向Function.prototype,  
- 构造函数也是函数，构造函数的__proto__, 指向Function.prototype
- Function.prototype属性是一个对象，而对象的__proto__，指向生成该对象的构造函数的原型，所以，Function.prototype.__proto__=== Object.prototype

---

```
var F = function () {}
Object.prototype.a = function () {}
Function.prototype.b = function () {}

var f = new F()
// 请问f有方法a  方法b吗
```
1. f的__proto__指向F.prototype，F.prototype.__proto__指向Object.prototype，所以f 可以取到a方法， 由于f的原型链上没经过Function.prototype，所以取不到b方法。

2. 由于构造函数F是由Function new出来的，所以F.__proto__指向Function.prototype，所以F函数可以取到b方法。

```
function Person(){}

let p1 = new Person()
let p2 = new Person()
let obj = {}
// 写出 p1  p2  Person  Function   obj   Object等的原型链
```

1. p1:      __proto__ :  Person.prototype       

2. p2:      __proto__ :  Person.prototype 

3. Person  :         __proto__： Function.prototype，    prototype： Person.prototype

4. Person.prototype ：         __proto__ ： Object.prototype ，  constructor： Person

5. Function：       __proto__ ： Function.prototype，   prototype： Function.prototype

6. Function.Prototype：     __proto__ ：  Object.prototype ，   constructor：  Function

7. obj：    __proto__ ： Object.prototype

8. Object：   __proto__ ： Function.prototype  ，   prototype：  Object.prototype

9. Object.prototype：    __proto__ ：  null  ，   constructor  ：  Object

