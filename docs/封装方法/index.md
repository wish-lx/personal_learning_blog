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
2. 添加拦截器
```
 1. 添加请求拦截器
axios.interceptors.request.use(function(config){
  // 在发送请求之前做些什么
  // 判断是否携带token,如果携带就在所有请求上面都加上token
  if(store.getters.accessToken){
    config.headers.Authorization = `token ${store.getters.accessToken}`
  }
  // 在请求成功之前加载动画
  showFullScreenLoading()
  // 解决axios post请求后台接收不到参数的问题
  if(store.getters.accessToken){
    config.data.token = store.getters.accessToken
    // 使传递的参数由json转为key：val形式
    config.data = $.params(config.data)
  }
  // 
  return config
},function(err){
 // 对请求错误做些什么
  return Promise.reject(err)
})
2. 添加响应拦截器
axios.interceptors.reponse.use(function(response){
  // 对响应数据做些什么
  // 停止动画
  tryHideFullScreenLoading()
   return response
},function(err){
  // 对响应错误做些什么
  if(err.status == 401){
    // 返回登陆页面
    router.replace{
      path:
      component:
    }
  }
  return Promise.reject(err)
})
```
```
1. 添加请求拦截器
 axios.interceptors.request.use(function(config){
   // 判断是否存在token ，存在的话在所有请求中加上token
   if(store.getter.accessToken){
     config.token = store.getter.accessToken
   }
   // 添加loading动画
   // 解决axios post请求后台收不到参数的问题
   if(store.getter.accessToken){
     config.data.token = store.getter.accessToken
     config.data = $.params(config.data)
   }
 },function(err){
   return Promise.reject(err)
 })
 2. 添加响应拦截器
 axios.interceptors.response.use(function(res){
  // 停止动画操作
 },function(err){
    if(err.response){
      switch(err.response){
        case 401:
        router.replace({
          path: '/login',
          query:
        })
      }
      

    }
 })
```
```
export function post (url, data={}){
  return new Primise(resolve,reject){
    axios.post(url,data)
    .then((res)=>{resolve(res.data)},err=>{
       reject(err)
    })
  }
}
this.prototype.$post = post
this.$post(url).then(function(res){
  console.log(res)
}).catch(function(err){
  console.log(err)
})
```