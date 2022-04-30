<template>
    <div>
        <tr class="mouseover"
            :class="isChecked ? 'row-selected' : ''">

            

        </tr>
    </div>
</template>
<script>

import {ref,computed, watch, onBeforeMount, onBeforeUnmount, onMounted, onUpdated} from 'vue'
import {useStore} from 'vuex'

import  tableCell from './tableCell.vue'

export  default{
    name :'',
    components:{
        tableCell
    },
    setup(props,{emit}){

    }
}
</script>