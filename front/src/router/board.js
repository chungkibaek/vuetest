import noticeInfo from '../views/board/noticeInfo'
import noticeReg from '../views/board/noticeReg'
import noticeDetail from '../views/board/noticeDetail'

export default [
    {
        path: '/noticeReg',
        name: 'noticeReg',
        component: noticeReg
      },
      {
        path: '/noticeInfo',
        name: 'noticeInfo',
        component: noticeInfo    
      },
      {
        path: '/noticeDetail',
        name: 'noticeDetail',
        component: noticeDetail
      },
]


