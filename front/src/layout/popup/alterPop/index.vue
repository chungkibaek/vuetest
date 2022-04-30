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
                    <button @click="popupClose">확인</button>
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
            return store.state.temp.alterMessage; 
        })

        const popupClose = async() =>{

            
            store.commit('temp/setIsAlertPopup')
            store.commit('temp/clearAlterMessage')    
            
            router.push({
                name : 'logintest'
            })

        }

        return {
            message,
            popupClose
        }
    }
}
</script>

