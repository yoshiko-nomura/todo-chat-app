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
  async login({ dispatch }, payload) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )
      dispatch('checkLogin')
      this.$router.push('/')
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
  async checkLogin({ commit }) {
    try {
      const user = this.$fire.auth.currentUser
      await commit('getData', {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
  async register({ dispatch, state }, payload) {
    try {
      await this.$fire.auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      )
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
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
  async loginGoogle({ dispatch }) {
    try {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      await this.$fire.auth.signInWithPopup(provider).then(() => {
        dispatch('checkLogin')
        this.$router.push('/')
      })
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
  async loginTwitter({ dispatch }) {
    try {
      const provider = new this.$fireModule.auth.TwitterAuthProvider()
      await this.$fire.auth.signInWithPopup(provider).then(() => {
        dispatch('checkLogin')
        this.$router.push('/')
      })
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
  // async loginFacebook({ dispatch }) {
  //   try {
  //     const provider = new this.$fireModule.auth.FacebookAuthProvider()
  //     await this.$fire.auth.signInWithPopup(provider).then(() => {
  //       dispatch('checkLogin')
  //       this.$router.push('/')
  //     })
  //   } catch (error) {
  //     console.log(error) //eslint-disable-line
  //   }
  // },
}

export const mutations = {
  getData(state, user) {
    state.user = user
  },
}
