<template>
  <div class="box">

      <searchFrom :noTwoLine="false" :noButton="true" @searchDataList="searchDataList(false)">
          <template v-slot:oneLine>
              <li>
                  <searchBox
                      :hasWholeOpt="true"
                      :placeholder="'선택하세요'"
                      :selectData="searchOptionData"
                      v-model="searchOption"
                    >
                  </searchBox>
              </li>
              <li>
               <searchinput 
                    v-model="searchKeword"
                    @keyup.enter="searchDataList(false)"
                    :placeholder="'검색조건입력'">

               </searchinput>
               </li>
          </template>         
      </searchFrom>
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
import searchFrom from '../../components/common/search/searchForm'
import searchinput from '../../components/common/input/searchInput'
import searchBox from '../../components/common/selectBox/searchSelectBox'

import {useStore} from 'vuex'
import {ref, onMounted , computed, watch} from 'vue'
export  default{
    name :'pagintest',
    components : {
        defaultTable,
        searchFrom,
        searchinput,
        searchBox
    },
    setup(){



        const store = useStore()
        const headerList = ref( ["작성자", "아이디", "이메일", "관리자여부"])
        const itemKeyList = ref(["authorName", "userid", "email","adminYN"])     //userid, AuthorName, email, AdminYN 
        const searchKeword = ref('')
        const searchOption = ref('')
        
        const searchOptionData = ref([
            {id : 'userid', name: '아이디'},
            {id : 'authorname', name: '이름'},
            {id : 'email', name: '이메일'},
        ])

        const pageNo = store.state.pageinfo.pagingNum

         const itemList =computed(() => store.state.board.itemList)
         const listFetchUrl = computed(() => store.state.tableinfo.listFetchUrl)


        const searchDataList = async(onMountBool)=>{


                console.log('searchDataList---------------')
                console.log('onMountBool-->' + onMountBool)

                let searchData = {
                    pageNo : onMountBool ? pageNo : 1, //온마운트호출시 페이지번호 1로 세팅
                    searchKeyword : searchKeword.value
                   }   

            if(!onMountBool){
                store.commit("pageinfo/clearPaingNum")
            }

            store.commit("pageinfo/setSearchData",searchData )

            //데이터조회
            await store.dispatch('board/fetchItemListData',searchData)
        }


    const initSetSearchData = (searchData) =>{

        searchKeword.value = searchData.searchKeyword ?? ''
    }


    onMounted(async() =>{
        console.log("1.mounted")

        store.commit("tableinfo/setPathurl", {
            reg : 'userReg',
            list : 'userInfo',
            detail : 'userDetail',
            update : ''
            
        } )

        let tempSearchData = store.state.pageinfo.searchData

        console.log('tempSearchData------------')
        console.log(tempSearchData)
        console.log(tempSearchData.searchKeyword) /

        initSetSearchData(tempSearchData)
        // store.commit('tableinfo/setListFetchUrl', 'board/fetchItemListData')
        await searchDataList(true)
    })


        return {
            headerList,
            itemKeyList,
            itemList,
             searchDataList,
             listFetchUrl,
             searchKeword,
             searchOptionData,
             searchOption
        }
    }

}
</script>

