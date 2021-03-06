## 浏览器渲染

1. 整个关键渲染路径包括以下几个步骤：
   - 解析HTML，生成DOM树（DOM）
   - 解析CSS，生成CSSOM树（CSSOM）
   - 将DOM和CSSOM合并，生成渲染树（Render-Tree）
   - 计算渲染树的布局（Layout）
   - 将布局渲染到屏幕上（Paint）
2. DOM树的生成
   1. DOM树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。DOM树的根节点就是document对象。
   2. 在解析HTML过程中，会碰到几类特殊的节点需要特殊的处理：
      - style、link元素以及具有内联样式的元素：交给“CSSOM生成”
      - script（无论是否外链）元素
3. CSSOM树的生成
     - style和内联样式对这两类样式，浏览器会直接根据样式声明生成CSSOM，因为它们本身就直接含有样式内容。
     - 对外联样式（link），浏览器会首先发送请求，待请求成功，获取外联样式后，浏览器便会解析该外联样式，并生成相应的CSSOM。
4. script
   - inline-script： 无论是否加defer与async，都会直接**下载并执行**，并不会等script标签下面的html解析完毕
   ```
   <script>123</script>
   <script async>123</script>
   <script defer>123</script>
   ```
   - 外链
   ```
   < script src = "app1.js"  ></ script >
   < script src = "app1.js" defer ></ script >
   < script src = "app1.js" async ></ script >
   ```
    - 第一种情况： 会阻塞html的解析，等到script代码下载并执行完之后，才会接着解析html
    - defer： 
      - defer 属性表示延迟执行引入 JavaScript，即 JavaScript 加载时 HTML 并未停止解析，这两个过程是并行的。整个 document 解析完毕且 defer-script 也加载完成之后（这两件事情的顺序无关），会执行所有由 defer-script 加载的 JavaScript 代码，再触发 DOMContentLoaded(初始的 HTML 文档被完全加载和解析完成之后触发，无需等待样式表图像和子框架的完成加载) 事件 。

      - defer 不会改变 script 中代码的执行顺序
      - defer 与相比普通 script，有两点区别：载入 JavaScript 文件时不阻塞 HTML 的解析，执行阶段被放到 HTML 标签解析完成之后。

    - async
      - async 属性表示异步执行引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行，无论此刻是 HTML 解析阶段还是 DOMContentLoaded 触发(HTML解析完成事件)之后。需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。

      - 从上一段也能推出，多个 async-script 的执行顺序是不确定的，谁先加载完谁执行。值得注意的是，向 document 动态添加 script 标签时，async 属性默认是 true
5. - 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等位于脚本前面的css加载完才能执行。在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。
   - 接下来，我们来说说load，页面上所有的资源（图片，音频，视频等）被加载以后才会触发load事件，简单来说，页面的load事件会在DOMContentLoaded被触发之后才触发。
6. 但如果有js，css加载会阻塞后面js语句的执行，而（同步）js脚本执行会阻塞其后的DOM解析（所以通常会把css放在头部，js放在body尾）
7. 使用 document.createElement 创建的 script 默认是异步的，示例如下。
```
console.log(document.createElement("script").async);  // true
```
所以，通过动态添加 script 标签引入 JavaScript 文件默认是不会阻塞页面的。如果想同步执行，需要将 async 属性人为设置为 false。