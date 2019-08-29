## CSS
## css权重比较
  1. ！important
  2. 行内样式
  3. id选择器
  4. 类选择器 属性选择器 伪类选择器（：link  ：hover）
  5. 标签选择器  伪元素选择器
  6. 通配符*
  7. 继承
  8. 浏览器默认样式
## css渲染规则
    css的渲染规则，是从上到下，从右到左渲染的。（浏览器的这种查找规则是为了尽早过滤掉一些无关的样式规则和元素。）
## css布局
  1. 响应式布局 - @media
        ```
        @media only screen and (max-width: 600px) {
            .example {background: red;}
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
            .example {background: green;}
        }
        ```
  2. 浮动布局 - float
     - 优点：兼容性较好，但是要处理好清除浮动
     - 缺点：就是在该元素使用浮动布局后，该元素后面的元素会由于该元素使用浮动布局而使其围绕在该元素周围。（脱离文档流）
     - 清除浮动方法：
       - 给浮动元素的父级定一个高度
       - 给浮动元素的父级加overflow：hidden
       - 标签结尾处加空div标签 clear:both
       - 父级div定义 伪类:after 和 zoom
       ```
       .clearfix:after{
           display:block;
           clear: both;
           content: '';
           visibility:hidden;
           height: 0;
       }
       .clearfix{
           zoom: 1;
       }
       ```
  3. 定位布局
     - 属性介绍：
        - static(静态) 没有特别的设定，遵循基本的定位规定，不能通过z-index进行层次分级，在普通流中，各个元素默认的属性。
        - relative(相对定位) 对象不可层叠、不脱离文档流，参考自身静态位置通过 top,bottom,left,right 定位。
        - absolute(绝对定位) 脱离文档流，通过 top,bottom,left,right 定位。选取其最近一个最有定位设置的父级对象进行绝对定位，如果对象的父级没有设置定位属性，absolute元素将以body坐标原点进行定位。
        - fixed（固定定位） 这里所固定的参照对像是可视窗口而并非是body或是父级元素。使用了fixed的元素不会随着窗口的滚动而滚动。属于absolute的子集。
        - tips： 绝对定位相对的父元素是没有被设置为static 的元素，也就是说，其相对的父元素可以是 absolute, relative,fixed .
     - 优缺点：好处是快捷，配合js使用非常快也不容易出问题，缺点是脱离文档流，下面所有子元素也脱离文档流，可使用性较差
   4. flex布局： 为解决float布局和绝对定位布局的不足出现，较完美
   5. table布局 （简单使用）
        父：display：table；
        子：display: table-cell;
   6. grid布局（不常用）
       ```
       .container {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px 100px 100px;
        }
       ```
    7. 拔高 实例题：根据盒模型解决边距重叠
        - 重叠的原则：取较大值
        - 边距重叠分三种情况：1）父子元素边距重叠；2）兄弟元素边距重叠；3）空元素的上下边距重叠
        - bfc：边距重叠解决方案
        - bfc的基本概念：即块级格式化上下文，ifc：内联元素格式化上下文
        - bfc的原理：即bfc的渲染规则：
           - 1）属于同一个BFC的两个box在垂直方向的margin会发生重叠；场景：利用BFC避免外边距折叠
            BFC可能造成外边距折叠，也可以利用它来避免这种情况。BFC产生外边距折叠要满足一个条件：两个相邻元素要处于同一个BFC中。所以，若两个相邻元素在不同的BFC中，就能避免外边距折叠。
           - 2）BFC区域与外部的float box不会发生重叠；场景：使用BFC避免文字环绕
           - 3）bfc在页面上是一个独立容器,内外元素互不影响；
           - 4）在BFC内部的浮动元素也计算在BFC的高度之内；场景：BFC包含浮动bfc子元素即使是float也会参与高度计算
         - 如何创建bfc：给元素添加属性,
           - 1）float值不为none；left,right
           - 2）position值不为static和relative；absolute,fixed
           - 3）display属性为inline-block,flex,inline-flex,table-cell,table-caption;
           - 4）overflow不为visible; auto，hidden都可以为该元素创建bfc
         - 虽然添加上述的任意一条都能创建BFC，但会有一些副作用：
           - 1、display: table 可能引发响应性问题
           - 2、overflow: scroll 可能产生多余的滚动条
           - 3、float: left 将把元素移至左侧，并被其他元素环绕
           - 4、overflow: hidden 将裁切溢出元素

## 题目：块级与行内元素：
 1. 块级元素的特点：
    - 块级元素会独占一行
    - 高度，行高，外边距和内边距都可以单独设置
    - 宽度默认是容器的100%
    - 可以容纳内联元素和其他的块级元素
 2. 行内元素的特点：（不占有独立的区域，仅仅依靠自己的字体大小或者是图像大小来支撑结构）
    - 和相邻的行内元素在一行上
    - 高度和宽度无效，但是水平方向上的padding和margin可以设置，垂直方向上的无效
    - 默认的宽度就是它本身的宽度
    - 行内元素只能容纳纯文本或者是其他的行内元素（a标签除外）

## 题目：谈谈你对css盒模型的认识：
 1. 盒模型的基本概念：标准模型+IE模型
 2. 两者的区别：高度和宽度的计算方式不同
   - 标准模型的width 即content 宽度，不包含padding和border
   - IE模型的width是content+padding+border，是计算padding和border的
 3. css如何设置这两种模型，默认是哪个，要怎么修改
    - box-sizing: content-box;(w3c标准)
    - box-sizing: border-box;(IE)
 4. js如何设置和获取盒模型对应的宽和高？
    - dom.style.width/height 只能获取通过dom节点的内联属性设置的宽和高
    - dom.currentStyle.width/height(只有IE支持) 返回浏览器计算后的得到的最终的样式信息，比较准确
    - window.getComputedStyle(dom).width/height(支持所有) 同二，兼容性更好
    - dom.getBoundingClientRect().width/height 可拿到元素真实的宽和高，也是即时运行完之后的样式信息，常用来计算一个元素的绝对位置，这个绝对位置是相对与视窗viewport的左定点的绝对位置，left, top, width, height, width是包含content+padding+border与border-box对应
    - tips： （css属性设置有三种，一，通过dom节点的内联属性设置，二，在html 的head中，或body 中的任何地方加一个style节点写css属性，三，通过外联样式，link方式引外部的css样式表）
 
 ## less简单使用
   - 变量
   - mixin
   - 嵌套