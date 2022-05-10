import { createStore } from 'vuex'
import modules from './modules'

import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  modules,
  plugins: [createPersistedstate({
    paths :['temp','pageinfo','board','tableinfo']
  })]
})


