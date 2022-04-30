import {getUserFromCookie} from '@/utils/cookies.js'

import {getboardList, getUserList} from '@/api/boardApi'

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
        }

    },
    actions : {
         async fetchItemListData({commit,dispatch},payload){
             console.log("fetchItemListData")
             commit("clearItemList")

            const result = await getUserList(payload)





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