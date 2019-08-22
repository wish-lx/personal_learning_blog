1. 封装post请求（axios）
```
export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

在main.js中引入:
import axios from 'axios'
import {post,fetch,patch,put} from './utils/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

最后在组件里直接使用:
 mounted(){
    this.$post('/api/v2/movie/top250')
      .then((response) => {
        console.log(response)
      })
  }
```