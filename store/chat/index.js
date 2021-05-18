import axios from 'axios'

export const state = () => ({
  posts: [],
})

export const getters = {
  posts: state => {
    return state.posts
  },
}

export const actions = {
  submit ({ dispatch }, userMessage) {
    let Ref = this.$fire.database().ref().child('userMessage')
      Ref.push(userMessage)
      .then(response => {
        console.log(response)
        dispatch('getData')
      })
  },
  getData ({ commit }) {
    return axios
      .get('https://sample-6a560.firebaseio.com/userMessage.json')
      .then((res) => {
        console.log(res.data)
        // const postArray = []
        // for (const key in res.data) {
        //   let allKey = res.data[key]
        //   postArray.push(allKey)
        // }
        commit('getData', res.data)
      })
  },
}

export const mutations = {
  getData (state, postArray) {
    state.posts = postArray
  },
}