<template>
  <div class="view view-chat"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.view-chat {
  height: 100vh;

  > .top {
    padding: 12px 17px;
    border-bottom: 1px solid #bbbbbb;
    height: 48px;
    background: #fff;

    > .title {
      font-weight: 700;
    }
  }

  > .form-chat {
    margin: 8px 12px;
  }
}
</style>
