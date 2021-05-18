export const state = () => ({
  user: {
    uid: '',
    email: '',
    name: '',
    photoURL: '',
  },
})

export const getters = {
  user: (state) => {
    return state.user
  },
}

export const actions = {
  login({ dispatch }, payload) {
    this.$fire.auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        dispatch('checkLogin')
        this.$router.push('/')
      })
      .catch()
  },
  checkLogin({ commit }) {
    const user = this.$fire.auth.currentUser
    commit('getData', {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    })
  },
  async register({ dispatch, state }, payload) {
    try {
      await this.$fire.auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          dispatch('checkLogin')
          const storageRef = this.$fire.storage.ref()
          storageRef
            .child(`users/${state.user.uid}.png`)
            .put(payload.thumbnail)
            .then(() => {
              storageRef
                .child(`users/${state.user.uid}.png`)
                .getDownloadURL()
                .then((url) => {
                  this.$fire.auth.currentUser.updateProfile({
                    displayName: payload.name,
                    photoURL: url,
                  })
                  this.$router.push('/register/finish')
                })
            })
        })
    } catch (error) {}
  },
  loginGoogle({ dispatch }) {
    const provider = new this.$fire.auth.GoogleAuthProvider()
    this.$fire
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        dispatch('checkLogin')
      })
      .catch()
  },
}

export const mutations = {
  getData(state, user) {
    state.user = user
  },
}
