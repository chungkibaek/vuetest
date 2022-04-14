<template>
   <div class="container" align="center" style="padding:50px;">
        <div class="card align-middle" style="width:20rem; border-radius:20px;">

                <div class="card-title" style="margin-top:30px;">
                    <h2 class="card-title text-center" style="color:#113366;">{{pageTitleData}}</h2>
                </div>

                <span>로그인 아이디 : {{this.loginid}}</span>
                <div class="card-body">
                    <form>
                        <label for="inputEmail" class="sr-only">아이디</label>
                        <input type="text" v-model="userinfo.userid"   class="form-control" placeholder="id를 입력하세요" required autofocus ref="idctl"><br>
                        <label for="inputPassword" class="sr-only">비밀번호</label>
                        <input type="password"  v-model="userinfo.passwd" class="form-control" autoComplete="off" placeholder="비밀번호를 입력하세요" required ref="pwdctl"><br>
                        <!-- <button id="btn-Yes" class="btn btn-lg btn-primary btn-block" type="button" @click.prevent="loginClick">로 그 인</button>
                        <router-link to="/memberRegist">회원가입</router-link> -->

                      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a class="small" href="password.html">비밀번호 찾기</a>
                          <button id="btn-Yes" class="btn btn-lg btn-primary btn-block" type="button" @click.prevent="loginClick">로 그 인</button>
                      </div>

                    </form>
                </div>
                <div class="card-footer text-center py-3">
                    <div class="small"><a href="/memberRegist">회원가입</a></div>
                </div>
            </div>



    </div>
</template>

<script>

import {  mapGetters,mapActions } from 'vuex'
const userInfoStore = 'userInfoStore'

export  default{
    name :'logintest',
    data(){
        return {
            pageTitleData : '로그인',
            userinfo : {
                userid : '',
                passwd : ''
            },
            loginid : {}
        };
    },
    computed : {
         //로그인 정보를 store를 통해 가져온다.
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
    //로그인 정보를 store를 통해 가져온다.
    ...mapActions(userInfoStore, [
      'AC_USER'
    ]),

        async loginClick (){

            if(this.userinfo.userid == ''){
                this.$refs.idctl.focus()

                return this.$swal("아이디를 입력하세요.");
            }

            if(this.userinfo.password == '')    {
                 this.$refs.pwdctl.focus()
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


        }


    }


}


</script>
