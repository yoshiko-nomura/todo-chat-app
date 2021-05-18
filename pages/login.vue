<template>
  <div class="page login">
    <div class="form">
      <p class="title">ログイン</p>
      <FormLogin />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > .form {
    width: 400px;

    > .title {
      font-size: 24px;
      line-height: 150%;
      text-align: center;
    }

    > .form-login {
      margin-top: 40px;
    }
  }
}
</style>
