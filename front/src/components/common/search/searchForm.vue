<template>
    <div class="search-form">
        <ul>
            <slot name="oneLine"></slot>
            <li :class="wp" class="t_right" v-if="noButton">
                <button class="sch-btn" @click="searchDataList()">검색</button>
            </li>            
            
        </ul>
        <ul v-if="noTwoLine">
            <slot name="twoLine"></slot>
            <li :class="wp" class="t_right">
                <button class="sch-btn" @click="searchDataList()">검색</button>
            </li>
        </ul>
    </div>
</template>
<script>


import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'

import {ref,onMounted, onUnmounted, computed, watch} from 'vue'

export  default{
    name :'',
    props : {
        wp :{
            type : String,
            default : 'wp20'
        },
        noTwoLine : {
            type : Boolean,
            default : true
        
        },
        noButton : {
            type : Boolean,
            default : false
        
        }        
    },
    components:{},
    setup(props, {emit}){
    
        const store = useStore()
        const router = useRouter()
        const route = useRoute()


        onMounted( () => {
        
        })
        onUnmounted( () => {
        
        })

        const searchDataList = async() =>{
            // alert('searchDataList')
            emit('searchDataList')
        }
        return{
            searchDataList
        }
    }
    
}
</script>