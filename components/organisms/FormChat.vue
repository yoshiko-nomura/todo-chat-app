<template>
  <div class="form form-chat"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-chat {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > .form-item-textarea {
    width: calc(100% - 88px);
  }
}
</style>
