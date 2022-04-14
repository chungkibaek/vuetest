<template>
   <div class="container" align="center" style="padding:50px;">
        <div class="card align-middle" style="width:20rem; border-radius:20px;">

                <div class="card-title" style="margin-top:30px;">
                    <h2 class="card-title text-center" style="color:#113366;">{{sampleData}}</h2>
                </div>

로그인 아이디 : {{this.loginid}}
                <div class="card-body">
                    <form>
                    <h5 class="form-signin-heading">로그인 정보를 입력하세요</h5>
                    <label for="inputEmail" class="sr-only">아이디</label>
                    <input type="text" v-model="userinfo.userid"   class="form-control" placeholder="id를 입력하세요" required autofocus><br>
                    <label for="inputPassword" class="sr-only">비밀번호</label>
                    <input type="password"  v-model="userinfo.passwd" class="form-control" autoComplete="off" placeholder="비밀번호를 입력하세요" required><br>
                    <button id="btn-Yes" class="btn btn-lg btn-primary btn-block" type="button" @click="loginClick">로 그 인</button>            
                    </form>
                </div>
            </div>

     

<button type="button" class="btn btn-lg btn-danger"  @click="openModal">오픈 모달</button>

<!-- <g-ModalForm ref="dlguser">
    <template>
        <div>
            test
        </div>

    </template>

</g-ModalForm> -->

<noticinfoComponent :id="'dignotice'" ref="dlgnotice" @saveSubmit="saveSubmit">

</noticinfoComponent>


    </div>
</template>

<script>

import {  mapGetters,mapActions } from 'vuex'
import noticinfoComponent from '../common/NoticeDetailModal.vue'
const userInfoStore = 'userInfoStore'


export  default{
    name :'logintest',
    components: {
          noticinfoComponent
     },
    data(){
        return {
            sampleData : '로그인 테스트',
            userinfo : {
                userid : '',
                passwd : ''
            },
            loginid : {}
        };
    },       
    computed : {
        ...mapGetters(userInfoStore, {storeUser : 'GE_USER'})
    },
    created (){
        this.loginid = this.storeUser.user.userid
    },
  watch: {
    // getters에 watch를 걸 수 있습니다.
    storeUser(val) {
      this.loginid = val.user.userid
    }
  },     
    methods:{

    ...mapActions(userInfoStore, [
      'AC_USER'
    ]),

        async loginClick (){
               

            if(this.userinfo.id == ''){
                return this.$swal("아이디를 입력하세요.");
            }
                
            if(this.userinfo.password == '')    {
                 return this.$swal("비밀번호를 입력하세요.");
            }
          
              const param = [this.userinfo.userid, this.userinfo.passwd]
              let itemInfoResult = await this.$api("/user/login2/login",{param:param});

              if(itemInfoResult.length > 0){

                    console.log( itemInfoResult[0].userid)
                    const paylod = {
                        user : itemInfoResult[0]
                    }

                    this.AC_USER(paylod)

                      this.$router.push({path:'/'}); 
              }

            
        },
        openModal(){
         
            // this.$refs.dlguser.modalShow()

            this.$refs.dlgnotice.show()            

        },
        saveSubmit(e){
            console.log(e.data)
            alert("aaaa--->" + e.data.userid)

            const result = 'success'
            e.done(result)

        }

    }


}


</script>