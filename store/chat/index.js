export const state = () => ({
  messages: [],
})

export const getters = {
  messages: (state) => {
    return state.messages
  },
}

export const actions = {
  async submitChat(_, payload) {
    try {
      await this.$fire.database.ref().push().set({
        text: payload.text,
        time: this.$fireModule.database.ServerValue.TIMESTAMP,
        uid: payload.uid,
      })
    } catch (error) {
      console.log(error)//eslint-disable-line
    }
  },
  async getData({ commit }) {
    try {
      await this.$fire.database.ref().on('value', (snapshot) => {
        const data = snapshot.val()
        commit('setData', data)
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
