<template>
    <div>
         <div class="dim confirm"></div>   
         <div class="pop-confirm-area ty2">
             <div class="pop-confirm-head">
                <button class="pop-close" @click="popupClose">닫기</button>                 
             </div>
             <div class="pop-confirm-cont">
                <p class="pop-desc" v-html="message"></p>
             </div>
             <ul class="pop-confirm-footer">
                <li>
                    <button class="cbtn" @click="popupClose">취소</button>
                    <button @click="popupConfirm">확인</button>                    
                </li>
             </ul>
         </div>
    </div>
</template>

<script>

import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
import {updateUserInfoAjax, insertUserInfoAjax} from '@/api/boardApi'
export default{
    setup() {
        
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const message = computed(() =>{
            return store.state.temp.confirmMessage; 
        })

        const confirmType = store.state.temp.confirmType
        const itemDetailData = store.state.board.itemDetailData
        const detailPage = store.state.tableinfo.pathUrl.detail
        const listPage = store.state.tableinfo.pathUrl.list
        const modifyMode = store.state.board.modifyMode

        const popupClose = async() =>{
            store.commit('temp/setIsConfirmPopup')
            store.commit('temp/clearAlterMessage')    

        }

        //확인버튼 클릭            
        const popupConfirm = async() =>{

            if(confirmType == 'userinfo'){ //사용자관리 화면

                console.log(itemDetailData)
                console.log(detailPage)

                let result = ''
                
                if(modifyMode == 'Y')
                    result = await updateUserInfoAjax(itemDetailData)
                else
                    result  = await insertUserInfoAjax(itemDetailData)

                    if(result.result == 'success'){

                        store.commit('temp/setIsConfirmPopup')
                        store.commit('temp/clerarConfirmMessage')      
                        
                        store.commit('temp/setAlterMessage', '저장되었습니다.')
                        store.commit('temp/setIsAlertPopup')

                        if(modifyMode == 'Y'){
                            let tmpQuery = {}

                            tmpQuery = {
                                idx : route.query.idx
                            }
                            
                            router.push({
                                name : detailPage,
                                query : tmpQuery
                            })
                        }else{
                            router.push({
                                name : listPage
                            })
                        }

                        
                        store.commit('board/clearModifyMode')

                    }  
            }else{
                                
                store.commit('temp/setIsConfirmPopup')
                store.commit('temp/clerarConfirmMessage') 

            }

            
            // store.commit('temp/setIsConfirmPopup')
            // store.commit('temp/clerarConfirmMessage')          

            // store.commit('temp/setAlterMessage', '저장되었습니다.')
            // store.commit('temp/setIsAlertPopup')

            // router.push({
            //     name : 'logintest'
            // })

            
        }

        return {
            message,
            confirmType,
            itemDetailData,
            detailPage,
            popupClose,
            popupConfirm
        }
    }
}
</script>

