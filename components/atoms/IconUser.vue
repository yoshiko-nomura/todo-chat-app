<template>
  <div class="icon icon-user">
    <img v-if="!!image" :src="image" alt="プロフィール画像" class="image" />
    <img
      v-else
      src="/atoms/icons/user.jpg"
      alt="プロフィール画像"
      class="image"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-user {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  min-width: 32px;
  height: 32px;
  overflow: hidden;

  > .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
