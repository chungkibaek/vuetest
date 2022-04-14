<template>

   <div class="container">
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            <h2>회원정보 수정</h2>
        </div>
        <div class="col-md-12 order-md-1">
            <h4 class="mb-3">회원정보 수정</h4>
     
                <div class="mb-3">
                    <label for="username" align="left">아이디</label>
                    <div class="input-group"> 
                        <input type="text" class="form-control" id="real-name" placeholder="아이디를 입력해야합니다." value="" required name="user-real-name" >
                    </div>
                </div>
                
                <div class="mb-3">
                    <label for="password">비밀번호</label> 
                    <input type="text" class="form-control" id="real-name" placeholder="비밀번호를 입력해야합니다." value="" required name="user-real-name" >
                </div>

                <div class="mb-3">
                    <label for="email">이메일</label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com" name="user-email">
                </div>


                <hr class="mb-4">
                <button class="btn btn-primary btn-xs btn-block" type="submit">수정하기</button>
                <button class="btn btn-xs btn-danger row_delete_btn" >홈으로</button>
                <hr class="mb-4">

          
        </div>

    </div>



</template>
<script>
export  default{
    name :'',
    components:{},
    data(){
        return {
            sampleData : 'aaaaaaaaaa'
        };
    }
}
</script>