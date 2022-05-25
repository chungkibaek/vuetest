<template>
    
    <select class="selec"
        :value = "modelValue"
        @change="selectChange"
    >
        <option disabled selected>
            {{placeholder}}
        </option>
        <option value="" v-if="hasWholeOpt">전체</option>
        <option v-for="(item, index) in selectData " :key="index" :value="item.id">
            {{item.name}}
        </option>
    </select>
    

</template>
<script>



import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'

import {ref,onMounted, onUnmounted, computed, watch} from 'vue'

export  default{
    props : {
        selectData : {
            type : Array
        },
        modelValue : {
            type : String
        },
        placeholder : {
            type : String,
            default : ''
        },
        hasWholeOpt : {
            type : String,
            default : false
        }
    },    
    components:{},
    setup(props, {emit}){
    
        const store = useStore()
        const router = useRouter()
        const route = useRoute()


        const selectChange = (e) =>{
               emit('update:modelValue', e.target.value) 
        }

        onMounted( () => {
        
        })

        onUnmounted( () => {
        
        })


        return{
            selectChange
        }
    }
    
}
</script>