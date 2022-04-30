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
        const itemKeyList = ref(["AuthorName", "userid", "email","AdminYN"])
         const itemList =computed(() => store.state.board.itemList)


        const searchDataList = async()=>{
                let searchData = {
                    test : ''
                   }   
            await store.dispatch('board/fetchItemListData',searchData)
        }


    onMounted(async() =>{
        await searchDataList()
    })


        return {
            headerList,
            itemKeyList,
            itemList,
             searchDataList
        }
    }

}
</script>

