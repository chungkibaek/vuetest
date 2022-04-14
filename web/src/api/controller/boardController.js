import axiosManager from '@/api/axiosManager'


const axios = axiosManager.axiosinstance


export default {
  getboardList(url, data){
    console.log('getboardList controller 호출')

    return new Promise((resolve, reject) => {
      axios.get(url, {params : data})
        .then(response => {
          // resolve(response)
           resolve(axiosManager.handleResponse(response))
        })
        .catch(err => {
          resolve(axiosManager.handleResponse(err))
        })

    })

  }


}
