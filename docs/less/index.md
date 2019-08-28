## less 常用语法
1. 变量
```
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header { color: @light-blue; }
```
2. 混合Mixins
```
.bordered {
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}


#menua {
    color: #111;
    .bordered;
}
.posta {
    color: red;
    .bordered;
}



#menua {
    color: #111;
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
.posta {
    color: red;
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}



```
3. 函数
```
.border-radius (@radius: 5px) {
    border-radius: @radius;
    -moz-border-radius: @radius;
    -webkit-border-radius: @radius;
}

#header {
    .border-radius;
}
```