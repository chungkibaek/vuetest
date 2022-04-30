import datepicker from '../views/sample/datepicktest'
import logintest from '../views/sample/logintst'
import modaltest from '../views/sample/modaltest'

export default [
    {
        path: '/datepicker',
        name: 'datepicker',
        component: datepicker
      },
      {
        path: '/logintest',
        name: 'logintest',
        component: logintest    
      },
      {
        path: '/modaltest',
        name: 'modaltest',
        component: modaltest
      },
]


