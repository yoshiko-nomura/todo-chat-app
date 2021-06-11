<template>
  <div class="page">
    <NavHeader />
    <div class="container">
      <ViewChat :image="image" :name="name" />
      <ViewTask />
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('checkLogin')
    store.dispatch('todo/getData')
    store.dispatch('chat/getData')
  },
  computed: {
    image() {
      return this.$store.getters.user.photoURL
    },
    name() {
      return this.$store.getters.user.name
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
