import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bootstrapvue from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'



createApp(App)
.use(store)
.use(router)
.use(Bootstrapvue)
.mount("#app");




