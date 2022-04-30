<template>
<div>
    <template v-if="checkBoxType!=0">
        <td v-if="checkBoxType==1">
            <span class="chk chk-cell" v-if="cell.status=='임시저장'">
                <input type="checkbox"
                    :id="'chk' + cell.id" 
                    :checked="isCellChecked"
                    @click="checkRow">
                <label :for="'chk' + cell.id"></label>
            </span>
        </td>

    </template>
</div>    
</template>
<script>

import {computed, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'


import dateStr from '@/utils/date.js'

export  default{
    name :'',
    components:{dateStr}, 
    setup(props){
        const currentDate = ref(dateStr.today)

        return {
            currentDate
        }
    }
    
}
</script>