

<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(item, i) in headerList" :key="'header-' + i">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in itemList" :key="'item-' + index">
                    <td v-for="(itemKey, subIndex) in itemKeyList" :key="'item-key-' + subIndex">
                       {{item[itemKey]}}                    
                    </td>
                </tr>
            </tbody>
        </table>

    </div>


</template>

<script>

import {ref,computed, watch, onBeforeMount, onBeforeUnmount, onMounted, onUpdated} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

import Paging from './paging.vue'

export default {
    components : {
        Paging
    },
    props: ['headerList', 'itemList', 'itemKeyList'],
    setup(props, {emit}){

        const store = useStore()
        const router = useRouter()

        onBeforeMount(() =>{

        })

        onUpdated(() =>{

        })

        onMounted(() =>{

        })

        onBeforeUnmount(() =>{
            // store.commit('treeMenu/clearPagingBean')
        })


        return {

        }
    }
}



</script>

<style scoped>

</style>
