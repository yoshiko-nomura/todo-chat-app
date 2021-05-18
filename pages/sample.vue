<template>
  <div>
    <form @submit.prevent>
      <label>
        <span> email </span>
        <input type="text" v-model="email" />
      </label>
      <label>
        <span> password </span>
        <input type="password" v-model="password" />
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
            console.log('done!')
          })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
