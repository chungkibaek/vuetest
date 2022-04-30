<template>

            <div id="layoutSidenav_nav">
              <!-- sb-sidenav-dark -->
                <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">웹 메뉴</div>
                            <router-link to="/noticeInfo" class="nav-link" >게시판</router-link>
                            <a class="nav-link" href="/logintest">EX_로그인</a>
                            <a class="nav-link" href="/modaltest">EX_모달</a>
                            <a class="nav-link" href="/datepicker">EX_DatePicker</a>


                        </div>
                    </div>

                </nav>
            </div>

</template>
<script>
export  default{
  name :'',
  data(){
    return {
      sampleData : ''
    };
  },
}
</script>
