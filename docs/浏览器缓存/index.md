## 浏览器的缓存：强缓存和协商缓存具体区别
  - 什么是浏览器缓存

浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。
  - 1.强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;
  - 2.协商缓存：向服务器发送请求，服务器会根据这个请求的request，header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。

。
## cookie sesstionStorage localStorage 区别
  - sessionStorage 、localStorage 和 cookie 之间的区别
共同点：都是保存在浏览器端，且同源的。

  - 区别：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递；cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。

  - 而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

   - 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

  - 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。

 
## localstorage 是可以跨域的吗
  
## 本地存储的方式，除去上面两种

## session与cookie的区别

  1）Cookie以文本文件格式存储在浏览器中，而session存储在服务端它存储了限制数据量。它只允许4kb它没有在cookie中保存多个变量。

（2）cookie的存储限制了数据量，只允许4KB，而session是无限量的

（3）我们可以轻松访问cookie值但是我们无法轻松访问会话值，因此它更安全

（4）设置cookie时间可以使cookie过期。但是使用session-destory（），我们将会销毁会话。
 cookie数据存放在客户的浏览器上，session数据放在服务器上

cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑*到安全应当使用session

session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie

单个cookie保存的数*据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie

建议将登录信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中

session保存在服务器，客户端不知道其中的信心；cookie保存在客户端，服务器能够知道其中的信息

session中保存的是对象，cookie中保存的是字符串

session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到，而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的

## 什么是sesstion
  - session称为会话信息，位于web服务器上，主要负责访问者与网站之间的交互，当访问浏览器请求http地址时，将传递到web服务器上并与访问信息进行匹配， 当关闭网站时就表示会话已经结束，网站无法访问该信息了，所以它无法保存永久数据，我们无法访问以及禁用网站

## http协议，以及和websocket区别
##  cookie--domain
总结：domain表示的是cookie所在的域，默认为请求的地址，如网址为www.study.com/study，那么domain默认为www.study.com。而跨域访问，如域A为t1.study.com，域B为t2.study.com，那么在域A生产一个令域A和域B都能访问的cookie就要将该cookie的domain设置为.study.com；如果要在域A生产一个令域A不能访问而域B能访问的cookie就要将该cookie的domain设置为t2.study.com。注意：一般在域名前是需要加一个"."的，如"domain=.study.com"。