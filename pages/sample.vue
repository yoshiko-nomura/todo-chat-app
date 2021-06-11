<template>
  <div>
    <form @submit.prevent>
      <label>
        <span> email </span>
        <input v-model="email" type="text" />
      </label>
      <label>
        <span> password </span>
        <input v-model="password" type="password" />
      </label>
      <button type="submit" @click="createAccount">createAccount</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async createAccount() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log('done!') //eslint-disable-line
          })
      } catch (e) {
        console.log(e) //eslint-disable-line
      }
    },
  },
}
</script>
