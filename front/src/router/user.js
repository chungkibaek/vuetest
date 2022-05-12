import userInfo from '../views/user/userInfo'
import userDetail from '../views/user/userDetail'
import userReg from '../views/user/userReg'

export default [
      {
        path: '/userInfo',
        name: 'userInfo',
        component: userInfo    
      },
      {
        path: '/userDetail',
        name: 'userDetail',
        component: userDetail
      },
      {
        path: '/userReg',
        name: 'userReg',
        component: userReg
      },
]


