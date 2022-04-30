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
import {useRouter} from 'vue-router'

export default{
    setup() {
        
        const store = useStore()
        const router = useRouter()
        const message = computed(() =>{
            return store.state.temp.confirmMessage; 
        })

        const popupClose = async() =>{
            store.commit('temp/setIsConfirmPopup')
            store.commit('temp/clearAlterMessage')    

        }

        const popupConfirm = async() =>{

            //확인버튼 클릭시 crud 호출로직 추가    
            
            store.commit('temp/setIsConfirmPopup')
            store.commit('temp/clerarConfirmMessage')          

            store.commit('temp/setAlterMessage', '저장되었습니다.')
            store.commit('temp/setIsAlertPopup')

            // router.push({
            //     name : 'logintest'
            // })

            
        }

        return {
            message,
            popupClose,
            popupConfirm
        }
    }
}
</script>

