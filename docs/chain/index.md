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

