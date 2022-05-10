// import axios from 'axios'


// const axiosinstance  = axios.create({
//     // baseURL: 'http://localhost:7000',
//     timeout : 15 * 1000
// })

// //요청 인터셉터
// axiosinstance.interceptors.request.use(req => {
//   console.log('request interceptor 호출')

//   return req
// }, error => {
//   console.log('[axios_interceptor_Request error]' + error.response.data)
//   return Promise.reject(error)
// })

// //응답 인터셉터
// axiosinstance.interceptors.response.use(res=> res,  error =>{
//     console.log(res.data)
//   console.log('[axios_interceptor_Response error]' + error.response.data)
//   return Promise.reject(error);
// })


// function handleResponse(obj){
//   if(obj instanceof Error){
//     if(obj.response){
//       return{
//         status : obj.response.status,
//         success : false,
//         message : obj.response.statusText
//       }
//     }

//     return {
//       status : 500,
//       success : false,
//       message : obj.message
//     }

//   }

//   return Object.assign({}, obj, {status : 200})
// }


// export default{
//   axiosinstance,
//   handleResponse
// }




import axios from 'axios'
import { setInterceptors } from '@/api/common/interceptors.js'

const config  = axios.create({
   //baseURL: 'http://localhost:7000', //process.env.VUE_APP_SERVER_URL
   header : {
       'Context-Type' : 'application/json; charset=utf-8'
   },
    timeout : 15 * 1000
})

const getDefaultOptions = () => Object.assign({}, config)

const networkError = false

function createInstance(option){
    
     const instance = axios.create(option)
     return setInterceptors(instance)
}
const instance = createInstance(config)

 export const get = async (url, params = {}) =>{

    console.log('axois--------get')

        if(Object.keys(params).length > 0){
        url += "?"

        for(const key in params){
            if(params[key] != undefined)
                url += `${key}=${params[key]}&`
        }
    }

    try{
        console.log(url)
       return instance.get(url,params)     
    }catch(error){
        console.log(error)
        return networkError
    }
 }

// export const post = async(url, parmas ={})=>{
//     try{
//         return await instance.post(url, parmas)

//     }catch(error){
//         console.log(error)
//         return networkError
//     }
// }



// export const put = async(url, parmas ={})=>{


//     const options = getDefaultOptions()

//     options.method = "put"
//     options.url = url
//     options.data = parmas

//     try{
//         return await axios(option)

//     }catch(error){
//         console.log(error)
//         return networkError
//     }
// }

