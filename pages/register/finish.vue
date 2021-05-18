<template>
  <div class="page register-finish">
    <div class="form">
      <p class="title">アカウントの作成</p>
      <div class="text">
        <p class="main">There is always light behind the clouds.</p>
        <p class="sub">from Louisa May Alcott</p>
      </div>
      <FormItemButton label="始める" @click="$router.push('/')" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.register-finish {
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

    > .text {
      margin: 40px 0;

      > .main {
        text-align: center;
        font-size: 14px;
        line-height: 150%;
        font-weight: 700;
      }

      > .sub {
        text-align: right;
        font-size: 12px;
        line-height: 150%;
        margin-top: 8px;
      }
    }

    > .button-link {
      margin-left: auto;
    }
  }
}
</style>
