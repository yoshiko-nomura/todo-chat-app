<template>
  <div class="page register">
    <div class="form">
      <p class="title">アカウントの作成</p>
      <FormRegisterProfile />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > .form {
    width: 680px;

    > .title {
      font-size: 24px;
      line-height: 150%;
      text-align: center;
    }

    > .form-register-profile {
      margin-top: 40px;
    }
  }
}
</style>
