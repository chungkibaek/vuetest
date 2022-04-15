import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import NoticeList from '../views/board/noticeList.vue'
import NoticeDetail from '../views/board/noticeDetail.vue'
import NoticeWrite from '../views/board/noticeWrite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props : route =>({
      pageNumber : route.query.pageNumber,
      pageCount : route.query.pageCount
    })


  },
   {
    path: '/noticelist',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/noticedetail', //   path: '/user/:userId',  path: '/test/:name',
    name: 'NoticeDetail',
    component: NoticeDetail,
    props : route =>({
      boardseq : route.query.id
    })

  },
  {
    path: '/noticeWrite',
    name: 'NoticeWrite',
    component: NoticeWrite
  },
  {
    path: '/talkboardList',
    name: 'TalkboardList',
    component: () => import('../views/talkboard/talkboardList.vue'),

  }
  ,
  {
    path: '/talkboardView',
    name: 'TalkboardView',
    component: () => import('../views/talkboard/talkboardView.vue')
  }
  ,
  {
    path: '/talkboardWrite',
    name: 'TalkboardWrite',
    component: () => import('../views/talkboard/talkboardWrite.vue')
  },
  {
    path: '/userList',
    name: 'UserList',
    component: () => import('../views/admin/userList.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/member/login.vue')
  },
  {
    path: '/memberEdit',
    name: 'MemberEdit',
    component: () => import('../views/member/memberEdit.vue')
  },
  {
    path: '/memberRegist',
    name: 'MemberRegist',
    component: () => import('../views/member/memberRegist.vue')
  },
  {
    path: '/adminUserList',
    name: 'AdminUserList',
    component: () => import('../views/admin/userList.vue')
  }
  //item관련
  ,
  {
    path: '/itemlist',
    name: 'ItemList',
    component: () => import('../views/item/itemList.vue')
  }
  ,
  {
    path: '/itemview',
    name: 'ItemView',
    component: () => import('../views/item/itemView.vue')
  } ,
  {
    path: '/itemmodify',
    name: 'ItemModify',
    component: () => import('../views/item/itemModify.vue')
  },
  {
    path: '/itemwrite',
    name: 'ItemWrite',
    component: () => import('../views/item/itemWrite.vue')
  }









  //샘플관련vue
  ,{    path: '/tablelist',
        name: 'Tablelist',
        component: () => import('../views/sample/tableList.vue')

  }
  ,{    path: '/logintst',
      name: 'Logintst',
      component: () => import('../views/sample/logintst.vue')

  }
  ,{    path: '/modaltest',
      name: 'ModalTest',
      component: () => import('../views/sample/modaltest.vue')

  }
  ,{
    path: '/datepicker',
    name: 'Datepicker',
    component: () => import('../views/sample/datepicktest.vue')

  }
  ,{
    path: '/pagingtest',
    name: 'PagintTest',
    component: () => import('../views/sample/pagingTest.vue')

  }
  ,{
    path: '/es6test',
    name: 'Es6test',
    component: () => import('../views/sample/es6test.vue')

  }
]

const router = new VueRouter({
 mode: 'history',
  // mode : 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
