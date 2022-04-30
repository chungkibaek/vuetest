
import axiosManager from '@/api/axios'


const axios = axiosManager.axiosinstance



export const getUserList = async (params) =>{
    console.log('getItemList controller 호출')

    let url = '/users'

    if(Object.keys(params).length > 0){
        url += "?"

        for(const key in params){
            if(params[key] != undefined)
                url += `${key}=${params[key]}&`
        }
    }


    return new Promise((resolve, reject) => {
        // axios.get('/users', {params : item})
        axios.get(url, params)        
        .then(response => {
            console.log(response.data)
            resolve(axiosManager.handleResponse(response))
        })
        .catch(err => {
            resolve(axiosManager.handleResponse(err))
        })

})




}


/*
/import {get, post} from './axios'


export const getboardList = async (item) =>{

    const{status, data} = await get('url',item)

    if(status == 200 ){
        console.log(status)
        console.log(data)
        return data
    }
}

export const getUserList = async (item) =>{

    const{status, data} = await get('/users',item)

    if(status == 200 ){
        console.log(status)
        console.log(data)
        return data
    }
}




export const regBoardAjax = async(parmas) =>{
    
    const{status, data} = await post('url',parmas)

    if(status == 200 ){
        console.log(status)
        console.log(data)

        return data
    }

}*/