import axiosManager from '@/api/axiosManager'


const axios = axiosManager.axiosinstance


export default {
  getItemList(url, {pageNumber, pageCount, keyword}){
    console.log('getItemList controller 호출')

    console.log('pageNumber----->' + pageNumber)
    console.log('pageCount----->' + pageCount)
    console.log('keyword----->' + keyword)

    const data = {
      pageNumber : pageNumber,
      pageCount:pageCount,
      keyword : keyword
    }

    return new Promise((resolve, reject) => {
      axios.get(url, {params : data})
        .then(response => {

           resolve(axiosManager.handleResponse(response))
        })
        .catch(err => {
          resolve(axiosManager.handleResponse(err))
        })

    })

  }


}
