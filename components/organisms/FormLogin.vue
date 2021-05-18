<template>
  <form class="form form-login" @submit.prevent>
    <FormItemInput v-model="email" type="text" placeholder="メールアドレス" />
    <FormItemInput
      v-model="password"
      type="password"
      placeholder="パスワード"
    />
    <div class="button">
      <nuxt-link to="/register" class="link"> アカウントを作成 </nuxt-link>
      <FormItemButton type="submit" label="次へ" @click="login" />
    </div>
  </form>
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
    login(email, password) {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.form-login {
  > .form-item-input:nth-child(2) {
    margin-top: 8px;
  }

  > .button {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .link {
      color: #008eff;
    }
  }
}
</style>
