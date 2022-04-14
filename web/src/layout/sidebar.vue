<template>

            <div id="layoutSidenav_nav">
              <!-- sb-sidenav-dark -->
                <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">웹 메뉴</div>
                            <router-link to="/noticelist" class="nav-link" >게시판</router-link>
                            <router-link to="/talkboardList" class="nav-link" >게시판2</router-link>
                            <router-link to="/about" class="nav-link" >About</router-link>



                            <div class="sb-sidenav-menu-heading">관리자</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                관리자
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">회원관리</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">아이템관리</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                메뉴
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        회원관리
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                          <router-link to="/login" class="nav-link" >로그인</router-link>
                                           <router-link to="/memberRegist" class="nav-link" >회원가입</router-link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts2">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                예제
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="/tablelist">EX_테이블리스트</a>
                                    <a class="nav-link" href="/logintst">EX_로그인</a>
                                    <a class="nav-link" href="/modaltest">EX_모달</a>
                                    <a class="nav-link" href="/about">EX_로드시</a>
                                    <a class="nav-link" href="/datepicker">EX_DatePicker</a>
                                    <a class="nav-link" href="/pagingtest">EX_페이징테스트</a>
                                    <a class="nav-link" href="/es6test">EX_es6test</a>
                                </nav>
                            </div>




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
