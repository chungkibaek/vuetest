import {getUserFromCookie} from '@/utils/cookies.js'

import {getboardList, getUserList, getUserDetail} from '@/api/boardApi'
import pageinfo from '../pageinfo/index'

export default {
    namespaced : true,
    state : {
        itemList : [],
        itemDetailData : {}        
    },
    mutations : {

       
        clearItemList(state){
            state.itemList.length = 0
        },
        setItemList(state, payload){
            state.itemList.push(payload)
        },
        clearItemDetailData(state){
            state.itemDetailData = {}
        },
        setItemDetailData(state, payload){
            state.itemDetailData = payload
        },
        


    },
    actions : {
         async fetchItemListData({commit,dispatch},payload){
             commit("clearItemList")

            const result = await getUserList(payload)

            for(let item in result.userList){
                // console.log(result.userList[item])

     
                commit("setItemList",  result.userList[item])
            }

            dispatch("pageinfo/fetchPaging", {payload: result},{root:true})


         },
         async fetchItemDetail({state,commit}, payload){

            console.log('fetchItemDetail')
            commit('clearItemDetailData')            
            const result = await getUserDetail(payload)
            
            const data = result.userDetail

            let tempData = {
                idx : data.idx ?? '',
                userid : data.userid ?? '',
                authorName : data.authorName ?? '',
                email : data.email ?? '',
                adminYN : data.adminYN ?? ''
            } 

            console.log('tempdata------------')
            console.log(tempData)


            commit('setItemDetailData',tempData)

         }


    }


}



const getStatus = (statusType) =>{

    let str= ''

    switch(statusType){
        case "1" : 
            str =  "진행"
            break;
        case "2" :
            str = "중지"
            break
        default : 
            str = "임시"
            break  

    }
}