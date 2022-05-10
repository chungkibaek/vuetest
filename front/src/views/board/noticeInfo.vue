<template>
  <div class="box">


        <defaultTable 
                :headerList="headerList"
                :itemList="itemList"
                :itemKeyList="itemKeyList"
            >
        </defaultTable>


  </div>
</template>

<script>
import defaultTable from '../../components/common/table/defaultTable'
import {useStore} from 'vuex'
import {ref, onMounted , computed, watch} from 'vue'
export  default{
    name :'pagintest',
    components : {
        defaultTable
    },
    setup(){

        const store = useStore()
        const headerList = ref( ["작성자", "아이디", "이메일", "관리자여부"])
        const itemKeyList = ref(["authorName", "userid", "email","adminYN"])     //userid, AuthorName, email, AdminYN 
   

        const pageNo = store.state.pageinfo.pagingNum

         const itemList =computed(() => store.state.board.itemList)
         const listFetchUrl = computed(() => store.state.tableinfo.listFetchUrl)


        const searchDataList = async(onMountBool)=>{
                let searchData = {
                    pageNo : onMountBool ? pageNo : 1
                   }   

            if(!onMountBool){
                store.comit("paginfo/clearPaingNum")
            }

            //데이터조회
            await store.dispatch('board/fetchItemListData',searchData)
        }


    onMounted(async() =>{
        console.log("1.mounted")

        store.commit("tableinfo/setPathurl", {
            reg : '',
            list : '',
            detail : 'noticeDetail',
            update : ''
            
        } )
        // store.commit('tableinfo/setListFetchUrl', 'board/fetchItemListData')
        await searchDataList(true)
    })


        return {
            headerList,
            itemKeyList,
            itemList,
             searchDataList,
             listFetchUrl
        }
    }

}
</script>

