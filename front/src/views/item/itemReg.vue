<template>
    <div>
        itemReg
    </div>
</template>
<script>



import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'

import {ref,onMounted, onUnmounted, computed, watch} from 'vue'

export  default{
    name :'',
    components:{},
    setup(){
    
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        onMounted( () => {
        
        })
        onUnmounted( () => {
        
        })
        return{
        }
    }
    
}
</script>