<template>

   <div class="container">
         <div class="row justify-content-center">
          <div class="col-lg-7">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header"><h3 class="text-center font-weight-light my-4">회원가입</h3></div>
                  <div class="card-body">
                      <form>
                          <div class="row mb-3">
                              <div class="col-md-6">
                                  <div class="form-floating mb-3 mb-md-0">
                                      <input class="form-control" v-model="userinfo.userid" type="text" placeholder="아이디를 입력해야합니다." ref="idctl" />
                                      <label for="lblID">아이디</label>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-floating">
                                      <input type="text" v-model="userinfo.authorname" class="form-control" placeholder="이름을 입력해야합니다." ref="namectl" >
                                      <label for="lblUserName">이름</label>
                                  </div>
                              </div>
                          </div>
                          <div class="form-floating mb-3">
                              <input type="email" v-model="userinfo.email" class="form-control" placeholder="you@example.com" ref="emailctl"/>
                              <label for="lblEmail">이메일</label>
                          </div>
                          <div class="row mb-3">
                              <div class="col-md-6">
                                  <div class="form-floating mb-3 mb-md-0">
                                      <input type="password" v-model="userinfo.passwd" class="form-control" placeholder="비밀번호를 입력해야합니다." ref="pwdctl">
                                      <label for="lblPassword">비밀번호</label>
                                  </div>
                              </div>
                          </div>
                          <div class="mt-4 mb-0">
                              <div class="d-grid">
                                <button class="btn btn-primary btn-xs btn-block" type="button" @click.prevent="memberInsert">가입하기</button>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="card-footer text-center py-3">
                      <div class="small"><a href="/login">Have an account? Go to login</a></div>
                  </div>
              </div>
          </div>
      </div>



    </div>



</template>
<script>
export  default{
    name :'',
    components:{},
    data(){
        return {
            userinfo : {
                userid : '',
                passwd : '',
                authorname : '',
                email : '',
                delyn : 'N',
                AdminYN : 'N'
            }
        };
    },
    methods  : {
        checkValidation(){
            console.log('checkValidation')

            if(this.userinfo.userid == ''){
                this.$refs.idctl.focus()

                this.$swal("아이디를 입력하세요.");
                return false
            }

            if(this.userinfo.passwd == '')    {
                 this.$refs.pwdctl.focus()
                 this.$swal("비밀번호를 입력하세요.");
                 return false
            }

            if(this.userinfo.authorname == '')    {
                 this.$refs.namectl.focus()
                 this.$swal("이름을 입력하세요.");
                 return false
            }

            if(this.userinfo.email == '')    {
                 this.$refs.emailctl.focus()
                 this.$swal("이메일을 입력하세요.");
                 return false
            }

            return true

        },

        async memberInsert(){
            console.log('memberInsert')
            console.log(this.checkValidation())

            if(!this.checkValidation()){
                alert('false')
                return false
            }

            const param =[this.userinfo]

            this.$swal.fire({
                    title: '회원가입 하시겠습니까?',
                    showCancelButton: true,
                    confirmButtonText: `등록`,
                    cancelButtonText: `취소`
                }).then(async (result) => {
                    if (result.isConfirmed) {
                    await this.$api("/user/login2/memberInsert",{param:param});
                    this.$swal.fire('가입되었습니다!', '', 'success');
                    this.$router.push({path:'/login'});
                    }
                });


        }

    }
}
</script>
