## 输出几次? 
```
for(var i = 1; i< 5; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
5,5,5,5
for(let i = 1; i< 5; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
1,2,3,4
```
## setTimeout具体     
 - setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
## setTimeout模拟setInterval
   //使用setTimeout也可以产生setInterval的效果
```
    var i=0;
    function intv(){
        setTimeout(function(){
            consolr.log(i++);
            intv()  //重要
        },1000)
    }
    intv()
```