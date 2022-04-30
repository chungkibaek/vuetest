<template>
    <div class="paging-area">
           <div class="left">
                <span class="total">Total
                    <em>{{PagingData.totalRecordCount}}</em>
                </span>
            </div> 

            <a href="#"
                class="first"
                v-show="pagingData.pageNo != 1"
                @click="movePage(1)">
                first
            </a>
            <a href="#"
                class="prev"
                v-show="pagingData.pageNo > 1"    
                @click="movePage(pagingData.pageNo - 1)">
                prev
            </a>

            <a href="#"
                v-for="n in pageNoArr"
                :key="n"
                class="prev"
                v-show="pagingData.pageNo == n ? 'active' : ''"    
                @click="movePage(n)">
                {{n == 0 ? '' : n}}
            </a>                


            <a href="#"
                class="next"
                v-show="pagingData.pageNo < pagingData.totalRecordCount"
                @click="movePage(pagingData.pageNo+1)">
                next
            </a>
            <a href="#"
                class="last"
                v-show="(pagingData.pageNo != pagingData.totalRecordCount) && (pagingData.totalRecordCount > 1)"   
                @click="movePage(pagingData.totalRecordCount)">
                last
            </a>
            <slot name="buttonArea"></slot>

    </div>
</template>
<script>

import {ref,computed, watch} from 'vue'
import {useStore} from 'vuex'

export  default{
    components:{},
    setup(props, {emit}){

        const store = useStore()
        const pageNoArr = ref([])
        const pagingData = computed(()=>{
            // return store.state.treeMenu.pagingBean
        })

        const currentTabkey = computed(() =>{
            // return store.state.treeMenu.tabKey
        })

        watch(pageingData, (newValue) =>{
            pageNoArr.value.length = 0

            for(let i = newValue.pageStartNo ; i <= newValue.pageEnd ;i++){
                pageNoArr.value.push(i)
            }
        })

        const movePage = async(pageNo) =>{
               let tempPageData = [
                    {type:'tabkey', value : currentTabkey.value}, 
                    {type:'pageNo', value : pageNo}
                   ] 

                // store.commit('treeMenu/setUpdateSearchData', tempPageData)
                // store.commit('treeMenu/setPagingNum', pageNo)

                // let tmpSearchData = store.state.treeMnu.tmpSearchData

                // await store.dispatch(store.state.tableInfo.listFetchUrl, tmpSearchData)
        }

        return {
            pageNoArr,
            pageingData,
            movePage
        }
        
    }
}
</script>