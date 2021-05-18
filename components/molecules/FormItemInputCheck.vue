<template>
  <label class="form-item form-item-input-check"> </label>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-item-input-check {
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 99px;
    border: 1px solid #008eff;
  }

  &:checked ~ .mark {
    // content: "";
    // display: block;
    // position: absolute;
    // top: 3px;
    // left: 3px;
    width: 11px;
    height: 11px;
    background: #d01137;
    border-radius: 50%;
    // opacity: 0;
  }

  > .input {
    // display: none;
    &:checked {
      display: none;
    }
  }
}
</style>
