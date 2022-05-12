<template>
 <main class="mt-3">
    <div class="container">
      <h2 class="text-center">사용자 정보</h2>
   <div class="mb-3 row">
        <label class="col-md-3 col-form-label">아이디</label>
        <div class="col-md-9">
            <input type="text" class="form-control" v-model="userid">
         
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">이름</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="authorName">
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">이메일</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
               <input type="text" class="form-control" v-model="email">
          </div>
        </div>
      </div>      
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">관리자  여부</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
              <!-- <input type="text" class="form-control" v-model="adminYN"> -->
              <input type="radio" name="rdoAdmin" id="rdoAdminY" @click="adminYN=1" :checked="adminYN==1">
              <label for="rdoAdminY">관리자</label>
              <input type="radio" name="rdoAdmin" id="rdoAdminN" @click="adminYN=0" :checked="adminYN==0">
                <label for="rdoAdminN">일반</label>
          </div>
        </div>
      </div>    

      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark float-right" @Click="moveRoter('userInfo')">목록
            
          </button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger float-right" @click="saveUser()">등록</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'

import {ref, onMounted , computed, onUnmounted} from 'vue'
import LabelCheckbox from '../../components/common/checkbox/labelCheckbox.vue'
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

        const userid = ref('')
        const authorName = ref('')
        const email = ref('')
        const adminYN = ref('0')


        onUnmounted(async() =>{
            //상세화면 조회
            store.commit('board/clearItemDetailData')
        })

        onMounted(async() =>{
            console.log("1.userdetail mounted")
            console.log(route.query.idx)

            //상세화면 조회
             await store.dispatch('board/fetchItemDetail',route.query.idx)

             const data = store.state.board.itemDetailData
             console.log(data.adminYN)

             userid.value = data.userid ?? ''
             authorName.value = data.authorName ?? ''
             email.value = data.email ?? ''
             adminYN.value = (data.adminYN =='Y') ? '1' : '0'

        })

        const moveRoter =  (value) =>{
            router.push({
                name : value
            })
        }

        const saveUser = () =>{

             if(userid.value == ''){
                 store.commit("temp/setAlterMessage", '아이디를 입력하세요.')
                 store.commit("temp/setIsAlertPopup") 

                 return
             }
            // alert('save')
            //수정 updateUserInfoAjax
            //저장 regUserInfoAjax

            
        }

        return {
         userid,
         authorName,
         email,
         adminYN,
          pageNo,
          listPage,
          regPage,
          moveRoter,
          saveUser
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

