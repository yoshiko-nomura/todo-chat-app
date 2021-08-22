export const state = () => ({
  messages: [],
})

export const getters = {
  messages: (state) => {
    return state.messages
  },
}

export const actions = {
  async submitChat({ dispatch }, payload) {
    try {
      await this.$fire.database.ref('users/').push().set({
        text: payload.text,
        time: this.$fireModule.database.ServerValue.TIMESTAMP,
        uid: payload.uid,
      })
      dispatch('getData')
    } catch (error) {
      console.log(error)//eslint-disable-line
    }
  },
  async getData({ commit }) {
    try {
      // const uid = this.$fire.auth.currentUser.uid
      await this.$fire.database
        .ref()
        .child('users')
        .once('value')
        .then((data) => {
          // console.log('取得のやつ' + data.val())
          commit('setData', data.val())
        })
    } catch (error) {
      console.log(error)//eslint-disable-line
    }
  },
}

export const mutations = {
  setData(state, data) {
    state.messages = data
  },
}
