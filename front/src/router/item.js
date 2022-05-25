import itemInfo from '../views/item/itemInfo'
import itemDetail from '../views/item/itemDetail'
import itemReg from '../views/item/itemReg'

export default [
    {
        path: '/itemReg',
        name: 'itemReg',
        component: itemReg
      },
      {
        path: '/itemInfo',
        name: 'itemInfo',
        component: itemInfo    
      },
      {
        path: '/itemDetail',
        name: 'itemDetail',
        component: itemDetail
      },
]


