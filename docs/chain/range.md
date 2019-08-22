##  js作用域
1. js作用域（全局变量，局部变量）内部可以访问外部，但外部的不能访问内部的 

```
var a=10;
function aaa(){ 
    alert(a);
};
aaa(); //a 为外部变量即全局变量，所以可以直接访问到 结果为10
```

```
function aaa(){
var a=10;  
};
aaa();
alert(a); //a 为函数aaa()内部变量量即局部变量，所以无法访问到
```

```
var a=10; 
function aaa(){ 
 alert(a);
};            
function bbb(){
var a=20;
aaa();
}
bbb(); //结果为10，因为aaa()函数不能访问到bbb()里面的局部变量，所以访问到的是a=10,这个全局变量。
```
2. 不用var 定义变量时，会默认为是全局变量（不规范，不推荐）

```
function aaa(){
   a=10; 
}
aaa();
alert(a); //结果为10; 
// 等价于：
var a;
function aaa(){
  a=10;
};
aaa();
alert(a);

// 给未声明的变量赋值，此变量就会变成全局变量；var a=b=10; 可以解析成 b=10；var a=b; 也就是b为全局变量，a为局部变量，所以外部访问a访问不到，访问b结果为10；
```
所以为了避免出现这种隐患，我们在定义变量的时候把所有要定义的变量都加上var;

```
function aaa(){
      var a=b=10; 
}
 aaa();
 alert(a);//结果为,无法访问到
 alert(b);//结果为10；
```
3. 变量的查找是就近原则去寻找，定义的var变量；第二点，变量的声明被提前到作用域顶部，赋值保留在原地，如下dome;

```
function aaa(){
  alert(a);
  var a=20;
}
aaa(); //结果为：undefined  
/**************/
var a=10;
function aaa(){
  alert(a);
  var a=20;
}
aaa(); //结果为：undefined
可以解析为是:
var a=10;
function aaa(){
  var a; //声明提前了
  alert(a);
  a=20; //赋值扔留着原地
}
aaa();
```
4. 当参数跟局部变量重名的时候，优先级是等同的

```
    var a=10;
    function aaa(a){ 
        alert(a);
        var a=20;  //因为 a 是形参，优先级高于 var a; 所以 局部变量a的声明其实被忽略了。
    } 
    aaa(a); //结果为：10
```

5. 变量修改的时候另一个变量会跟着变化，但是当变量重新被定义时，则另一个不变化

```
var a=[1,2,3];
var b=a;
b.push(4); 
alert(a);//结果为[1,2,3,4] 当b改变的时候a也发生了改变  

当b重新被赋值的时候 a不会改变.示例：
var a=[1,2,3];
var b=a;
b=[1,2,3,4]
alert(a)//结果为[1,2,3]
```
## null和undefined区别
1. 含义不同
- undefined：表示使用var声明变量但未对其加以初始化时，这个变量的值就是undefined
- null：是一个空对象指针，表示准备用来保存对象，还没有真正保存对象的值，
- 如果定义的变量准备在将来用于保存对象，应该将该变量初始化为null。
2. 类型不同
```
console.log(typeOf undefined);//undefined
console.log(typeOf null);//object
```
3. 转化为数字不同
  undefined: NaN
  null: 0


  

  vfor  key的作用
  filter
  
  babel做了些什么
  webpack
  了解seo吗
