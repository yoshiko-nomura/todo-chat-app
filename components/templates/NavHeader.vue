<template>
  <div class="nav nav-header">
    <h1 class="title">WeAre</h1>
    <IconUser :image="image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: this.$store.getters.user.photoURL,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-header {
  padding: 0 20px 0 18px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  width: 100%;

  > .title {
    font-family: 'Pacifico', cursive;
    font-size: 22px;
    line-height: 120%;
  }
}
</style>
