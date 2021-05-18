<template>
  <div class="icon icon-brand" @click="$emit('click')">
    <img
      v-if="itemStatus === 'google'"
      class="icon icon-brand-google"
      src="/atoms/icons/google.svg"
      alt="google"
    />
    <img
      v-if="itemStatus === 'twitter'"
      class="icon icon-brand-twitter"
      src="/atoms/icons/twitter.svg"
      alt="twitter"
    />
    <img
      v-if="itemStatus === 'facebook'"
      class="icon icon-brand-facebook"
      src="/atoms/icons/facebook.svg"
      alt="facebook"
    />
  </div>
</template>

<script>
export default {
  props: {
    itemStatus: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
