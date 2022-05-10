import store from '@/store'



export function setInterceptors(instance){

    instance.interceptors.request.use(
      function (config) {
          // 요청 바로 직전
          // axios 설정값에 대해 작성합니다.
          return config;
      }, 
      function (error) {
          // 요청 에러 처리를 작성합니다.
          return Promise.reject(error);
      }
    );


    instance.interceptors.response.use(
      async function (response) {

        if(response.data.status == 401 || response.data.status == 402){

            //로그인사용자 저장..
            //쿠키등 각종 정보 등록

        }
          return response;
      },

      function (error) {
          return Promise.reject(error);
      }
    );  
    
    return instance;
  
    //요청 인터셉터
  // instance.interceptors.request.use(req => {
  //   console.log('request interceptor 호출')
  //   return req
  // }, error => {
  //   console.log('[axios_interceptor_Request error]' + error.response.data)
  //   return Promise.reject(error)
  // })

  //응답 인터셉터
  // instance.interceptors.response.use(res=> res,  error =>{
  //   console.log('[axios_interceptor_Response error]' + error.response.data)
  //   return Promise.reject(error);
  // })

  

}

