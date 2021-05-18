<template>
  <div class="view view-task"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.view-task {
  border-left: 1px solid #bbbbbb;
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

  > .form-task {
    margin: 8px 12px 15px;
  }
}
</style>
