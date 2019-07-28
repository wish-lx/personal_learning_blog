# loader

## 定义

loader, 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）

本质上，loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

## 使用

1. 将loader信息配置于module.rules数组中
2. 每一条rule都是一个对象，包含两个必须属性：
   - test，匹配需要转换的文件；
   - use，使用哪个loader进行转换；

## 常用loader

1. file-loader, 将文件发送到输出文件夹，并返回（相对）URL
2. url-loader, 像 file loader 一样工作，但如果文件小于限制，可以返回 data URL
