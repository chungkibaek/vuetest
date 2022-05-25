<template>

            <div id="layoutSidenav_nav">
              <!-- sb-sidenav-dark -->
                <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">웹 메뉴</div>
                            <!-- <router-link to="/noticeInfo" class="nav-link" >게시판</router-link> -->
                            <a class="nav-link" href="#" @click="moveRouter('user')">사용자정보</a>
                            <a class="nav-link" href="#" @click="moveRouter('item')">아이템평가</a>
                            <a class="nav-link" href="#" @click="moveRouter('notice')">게시판</a>
                            <a class="nav-link" href="#" @click="moveRouter('login')">EX_로그인</a>
                            <a class="nav-link" href="/modaltest">EX_모달</a>
                            <a class="nav-link" href="/datepicker">EX_DatePicker</a>


                        </div>
                    </div>

                </nav>
            </div>

</template>
<script>

import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
export  default{
  setup(props){

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const moveRouter = (value) =>{

          store.commit('pageinfo/clearPaingNum')
          let path = ''

          switch(value){
            case 'notice':
              path = '/noticeInfo'
              break;
            case 'user' :
              path = '/userInfo'
              break;
            case 'login':
              path = '/logintest'
              break;
              case 'item' :
                path = 'itemInfo'
                break;
          }

          router.push({
              path : path
          })

    }

    return {
      moveRouter
    }

  }
}
</script>
