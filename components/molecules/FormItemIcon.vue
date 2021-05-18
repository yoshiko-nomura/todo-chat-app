<template>
  <label class="form-item form-item-icon">
    <input v-bind="$attrs" class="file" @change="$emit('change', $event)" />
    <img v-if="img" :src="img" class="image" />
  </label>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.form-item-icon {
  width: 120px;
  height: 120px;
  border-radius: 99px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  display: block;
  background-image: url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 18.4132 1.28639 17.1268 2.87324 17.1268H17.1268V2.87324C17.1268 1.28639 18.4132 0 20 0C21.5868 0 22.8732 1.28639 22.8732 2.87324V17.1268H37.1268C38.7136 17.1268 40 18.4132 40 20C40 21.5868 38.7136 22.8732 37.1268 22.8732H22.8732V37.1268C22.8732 38.7136 21.5868 40 20 40C18.4132 40 17.1268 38.7136 17.1268 37.1268V22.8732H2.87324C1.28639 22.8732 0 21.5868 0 20Z" fill="black" fill-opacity="0.4"/></svg>');
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
  position: relative;

  > .file {
    display: none;
  }

  > .image {
    position: absolute;
    border-radius: 99px;
    width: 120px;
    height: 120px;
    border-radius: 99px;
  }
}
</style>
