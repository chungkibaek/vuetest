

const userInfoStore = {
  namespaced: true,
  state : {
      user : {}
  },
  getters : {
      GE_USER : state => state.user
  },
  mutations : {
      MU_USER : (state, paylod) => {
          state.user = paylod
      }
  },
  actions : {
      AC_USER : ({commit}, paylod) => {
          commit('MU_USER',paylod)
      }
  }
}

export default userInfoStore
