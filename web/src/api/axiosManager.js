import axios from 'axios'


const axiosinstance  = axios.create({
  // baseURL: 'https://localhost',
    timeout : 15 * 1000
})

//요청 인터셉터
axiosinstance.interceptors.request.use(req => {
  console.log('request interceptor 호출')
  return req
}, error => {
  console.log('[axios_interceptor_Request error]' + error.response.data)
  return Promise.reject(error)
})

//응답 인터셉터
axiosinstance.interceptors.response.use(res=> res,  error =>{
  console.log('[axios_interceptor_Response error]' + error.response.data)
  return Promise.reject(error);
})


function handleResponse(obj){
  if(obj instanceof Error){
    if(obj.response){
      return{
        status : obj.response.status,
        success : false,
        message : obj.response.statusText
      }
    }

    return {
      status : 500,
      success : false,
      message : obj.message
    }

  }

  return Object.assign({}, obj, {status : 200})
}


export default{
  axiosinstance,
  handleResponse
}
