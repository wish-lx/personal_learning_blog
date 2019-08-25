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
    }catch{
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