

<template>
    <div>
        {{itemList.length}}
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(item, i) in headerList" :key="'header-' + i">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in itemList" :key="'item-' + index">
                    <td v-for="(itemKey, subIndex) in itemKeyList" :key="'item-key-' + subIndex">
                           <a @click="goToDetail(item);" style="cursor:pointer;"> 
                       
                       {{item[itemKey]}}                    
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <Paging>
            <template #buttonArea>
                <div style="float: right;">
                        <button type="button" class="btn btn-primary" @Click="moveRegage()">등록</button>
                </div>
            </template>
        </Paging>

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
    // props: ['headerList', 'itemList', 'itemKeyList'],
    props:{
        itemList : {
            type : Array
        },
        headerList : {
             type : Array
        },
        itemKeyList : {
             type : Array
        }       
    },
    setup(props, {emit}){

        const store = useStore()
        const router = useRouter()
        const detailPage = store.state.tableinfo.pathUrl.detail
        const regPage = store.state.tableinfo.pathUrl.reg

        const pagingBean = computed(()  => store.state.pageinfo.pagingBean)

        onBeforeMount(() =>{

        })

        onUpdated(() =>{

        })

        onMounted(() =>{

        })

        onBeforeUnmount(() =>{
            // store.commit('treeMenu/clearPagingBean')
        })

        const goToDetail = (item) =>{

            let tmpQuery = {}

            tmpQuery = {
                idx : item.idx
            }
            
            router.push({
                name : detailPage,
                query : tmpQuery
            })

  
        }

        const moveRegage = () =>{

            console.log(regPage)
            router.push({
                name : regPage,
                query : ''
            })
        }


        return {
            pagingBean,
            regPage,
            detailPage,
            goToDetail,
            moveRegage
        }
    }
}



</script>

<style scoped>

</style>
