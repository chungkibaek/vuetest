<template>
    <div class="paging-area">
           <div class="left">
                <span class="total">Total
                    <em>{{pagingData.totalRecordCount}}</em>
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
                :class="pagingData.pageNo == n ? 'active' : ''"    
                @click="movePage(n)">
                {{n == 0 ? '' : n}}
            </a>                


            <a href="#"
                class="next"
                v-show="pagingData.pageNo < pagingData.totalPageCount"
                @click="movePage(pagingData.pageNo+1)">
                next
            </a>
            <a href="#"
                class="last"
                v-show="(pagingData.pageNo != pagingData.totalPageCount) && (pagingData.totalPageCount > 1)"   
                @click="movePage(pagingData.totalPageCount)">
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
             return store.state.pageinfo.pagingBean
        })

        const currentTabkey = computed(() =>{
            // return store.state.treeMenu.tabKey
        })

        watch(pagingData, (newValue) =>{

          
            pageNoArr.value.length = 0
            console.log(newValue)

            for(let i = newValue.pageStartNo ; i <= newValue.pageEndNo ;i++){
                pageNoArr.value.push(i)
            }
    console.log(   pageNoArr.value.length )
              
        })

        const movePage = async(pageNo) =>{

               let tempPageData = [
                    {type:'pageNo', value : pageNo}
                   ] 

                 store.commit('pageinfo/setUpdateSearchData', tempPageData)
                 store.commit('pageinfo/setPagingNum', pageNo)

                  let tmpSearchData = store.state.pageinfo.searchData

                 await store.dispatch(store.state.tableinfo.listFetchUrl, tmpSearchData)
        }

        return {
            pageNoArr,
            pagingData,
            movePage
        }
        
    }
}
</script>