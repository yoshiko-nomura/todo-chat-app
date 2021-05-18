<template>
  <ButtonLink v-bind="$attrs" :label="label" @click="$emit('click')" />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'label',
    },
  },
}
</script>

<style lang="scss" scoped>
.button-link {
  width: 80px;
  height: 37px;
}
</style>
