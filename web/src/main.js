import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import mixins from './mixins/index'

 import VueLodash from 'vue-lodash'
 import lodash from 'lodash'

 import script from '@/util/scripts.js'

import '@/components'

// name is optional
 Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

Vue.config.productionTip = false

Vue.mixin(mixins);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(script)
// Vue.use(lodash)
// Vue.use(VueLodash)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
