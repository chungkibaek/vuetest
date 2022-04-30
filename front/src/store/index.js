import { createStore } from 'vuex'
import modules from './modules'

import persistedstate from 'vuex-persistedstate'
export default createStore({
  modules,
  plugins: [persistedstate({
    paths :['temp']
  })]
})


