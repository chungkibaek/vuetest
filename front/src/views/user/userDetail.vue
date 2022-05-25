<template>
 <main class="mt-3">
    <div class="container">
      <h2 class="text-center">사용자 정보</h2>
   <div class="mb-3 row">
        <label class="col-md-3 col-form-label">아이디</label>
        <div class="col-md-9">
         {{data.userid}}
         
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">이름</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
                {{data.authorName}}
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">이메일</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
               {{data.email}}
          </div>
        </div>
      </div>      
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">관리자  여부</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
              {{data.adminYN}}
          </div>
        </div>
      </div>    

      <div style="float:left">     
          <button type="button" class="btn btn-dark" @Click="moveRoter('userInfo')">목록 </button>               
      </div>  
        <div style="float:right">
          <button type="button" class="btn btn-primary" @Click="moveRoter('userReg')">수정</button>      
          <button type="button" class="btn btn btn-danger" @Click="deleteUser()">삭제</button>
      </div>
    </div>
  </main>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
import {deleteUserInfoAjax} from '@/api/boardApi'
import {ref, onMounted , computed, onUnmounted} from 'vue'
export  default{
    name :'',
    components : {        
    },
    setup(){

        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const pageNo = store.state.pageinfo.pagingNum
        const regPage = store.state.tableinfo.pathUrl.detail
        const listPage = store.state.tableinfo.pathUrl.list

        const data = computed(() => store.state.board.itemDetailData)


        onUnmounted(async() =>{
            //상세화면 조회
            store.commit('board/clearItemDetailData')
        })

        onMounted(async() =>{
            console.log("1.userdetail mounted")
            console.log(route.query.idx)

            //상세화면 조회
             await store.dispatch('board/fetchItemDetail',route.query.idx)
        })

        const moveRoter =  (value) =>{

          let tmpQuery = {
                idx : route.query.idx
            }
            
            router.push({
                name : value,
                query :  value = 'userReg' ? tmpQuery: ''
            })

        }


        const deleteUser = async () =>{


          let tempSaveData = {
            idx : route.query.idx
          }          
           let result = await deleteUserInfoAjax(tempSaveData)


            if(result.result == 'success'){
                 
                  router.push({
                      name : listPage
                  })

            }     
        }


        return {
          data,
          pageNo,
          listPage,
          regPage,
          moveRoter,
          deleteUser
        }
    }

}
</script>

<style scoped>

@media (min-width: 1200px) {
  .container {
    width: 800px;
  }
}
</style>>

