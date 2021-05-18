<template>
  <div class="page">
    {{ user }}
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  > .nav-header {
    position: fixed;
  }

  > .container {
    display: flex;

    > .view-chat,
    .view-task {
      width: 50%;
      position: fixed;
      top: 40px;
    }

    > .view-task {
      right: 0;
    }
  }
}
</style>
