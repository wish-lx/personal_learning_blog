## 手写promise
```
class Promise{
    constructor(exector){
        <!-- 定义状态初始值 -->
        this state = 'pendding'
        <!-- 定义成功需要传递的值 -->
        this value = undefined
        <!-- 定义失败需要原因 -->
        this reason = undefined
       let resolve = value => {
           if(this.state === 'pending'){
               this.state = 'fulfilled'
               this.value = value
           }
       }
       let reject = reason => {
           if(this.state === 'pending'){
               this.state = 'rejected'
               this.reason = reason
           }
       }
    }
    try{
      exector(resolve, reject)
    }catch(err){
      reject(err)
    }
    then(onResolved, onRejected){
      if(this.state === 'fulfilled' ) {
          onResolved(this.value)
      } 
       if(this.state === 'rejected' ) {
          onRejected(this.reason)
      } 
    }
}

```
```
class Promise{
    constructor(fn){
        <!-- 初始化初始值为pendding -->
       this.state = 'pendding'
       <!-- 成功的值 -->
       this.value = undefined
       <!-- 失败的原因 -->
       this.reason = undefined
       <!-- 成功的回调 -->
       let resolve = value => {
           if(this.state === 'pending'){
               this.state = 'fulfilled'
               this.value = value
           }
       }
       <!-- 失败的回调 -->
       let reject = reason => {
           if(this.state === 'pending'){
               this.state = 'rejected'
               this.reason = reason
           }
       }
    }
    <!-- 自执行   fn函数执行过程中如果报错，直接执行reject函数 -->
    try{
      fn(resolve, reject)
    }catch(err){
      reject(err)
    }
    <!-- then方法有两个参数，一举状态执行相应的回调 -->
    then(onFulfiled, onRejected){
        if(this.state === 'fulfilled'){
            onFulfiled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected(this.reason)
        }
    }
}
```