# webpack4
1. webpack4,速度更快，大型项目节约90%的构建时间，内置了更多了默认配置，变更了许多api
2. 彻底学会webpack的配置，理解webpack的作用及原理，上手项目的打包配置过程，拥有工程化的前端思维
3. webpack打包优点：
- 1）index.html中只有一个js文件，网页的运行速度会很快，
- 2）文件与文件之间的依赖关系非常明确，不存在依赖引入顺序问题导致的代码运行错误问题，
- 3）ES Moudule 模块引入方式，更方便，但需要同样的方式将模块导出，浏览器不支持这种模块引入方式，但webpack转译后可用引入和导出的语法
4. 四个核心概念：
- 入口entry
- 输出output
- loader
- 插件plugins
## 1. webpack是什么？webpack 模块打包工具
- webpack本质上是一个模块打包工具，它在处理应用程序时，会递归的构建一个依赖关系图，包含应用程序所需的每个模块，然后将所有模块打包成一个或多个bundle
- webpack是一个模块打包工具，它可以识别任何模块导入和导出的语法，包括
  - ES Module的模块引入导出方式， import from / export default
  - CommonJS的模块引入导出方式， const Header = require(./header.js) / module.exports = Header
  - AMD
  - CMD
- webpack原来只是一个JS的模块打包工具，现在不仅可以打包js，还可以打包css, png/jpg/jpeg图片等各种文件
- 提升webpack打包速度的两个非常重要的点：1.保持nodejs为最新版本，保持webpack为最新版本，高版本的webpack会利用nodejs中的一些新特性来提高他的打包速度，
- webpack-cli模块使得我们可以在命令行中正确的运行webpack
- npx 就是让项目内部安装的模块用起来更方便，不必加上路径
- npm scripts 当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径
## 2. 模块是什么？
- 对于webpack来说，项目中的任何文件都可以称之为一个模块
## 3. webpack的配置文件有什么作用？
