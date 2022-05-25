/*
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

     console.log(url)

    return new Promise((resolve, reject) => {
        
        axios.get(url, params)        
        .then(response => {
            console.log(response)
            resolve(axiosManager.handleResponse(response))
        })
        .catch(err => {
            resolve(axiosManager.handleResponse(err))
        })

})




}

*/


import {get, post} from './axios'


export const getboardList = async (item) =>{

    const{status, data} = await get('url',item)

    if(status == 200 ){
        console.log(status)
        console.log(data)
        return data
    }
}

export const getUserList = async (item) =>{

    console.log(item)
    const{status, data} = await get('/api/users',item)

    if(status == 200 ){
        console.log(status)
        console.log(data)
        return data
    }
}

export const getUserDetail = async (item) =>{

    console.log('getUserDetail  call')
    console.log(item)
    const{status, data} = await get('/api/userDetail?idx='+item)

    if(status == 200 ){
        console.log(status)
        console.log(data)
        return data
    }
}


export const updateUserInfoAjax = async(parmas) =>{
    console.log('updateUserInfoAjax  call')
    const{status, data} = await post('/api/updateUserinfo',parmas)

    if(status == 200 ){
        console.log(status)
        console.log(data)

        return data
    }

}

export const insertUserInfoAjax = async(parmas) =>{
    console.log('insertUserInfoAjax  call')
    const{status, data} = await post('/api/insertUserInfo',parmas)

    if(status == 200 ){
        console.log(status)
        console.log(data)

        return data
    }

}


export const deleteUserInfoAjax = async(parmas) =>{
    console.log('deleteUserInfoAjax  call')
    const{status, data} = await post('/api/deleteUserInfo',parmas)

    if(status == 200 ){
        console.log(status)
        console.log(data)

        return data
    }

}
