//vue2.x 스타일

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 작성한 모듈을 가져옵니다.
// import userStore from '@/store/modules/userStore.js'
// import postStore from '@/store/modules/postStore.js'
import userInfoStore from '@/store/modules/userInfoStore.js'



import persistedstate from 'vuex-persistedstate';

const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장됩니다.
    // userStore: userStore,
    // postStore: postStore,
    userInfoStore : userInfoStore
  },
  plugins: [persistedstate({ paths: ["userInfoStore"] })]

})

export default store



//1번. vue3.x 스타일 시작
/*
import { createStore } from 'vuex'
import userStore from './modules/userStore'
import postStore from './modules/postStore'




export default createStore({
  modules: {
    userStore,
    postStore
  }
})



*/


//여기는 정상
/*
import {
  createStore
} from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [{
        product_id: 1,
        product_name: "아이폰 거치대",
        category: "A"
      }]
    }
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: {

    increment(state) {

      state.count++
    }
  },
  actions: {
    increment(context) {
      // 비동기 처리 로직 수행 가능
      context.commit('increment')
    }
  }
})

export default store;

*/
