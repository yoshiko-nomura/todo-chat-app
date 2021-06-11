<template>
  <label class="form-item form-item-input-check">
    <input
      :checked="checked"
      type="checkbox"
      class="input"
      @input="$emit('switch', $event.target.checked)"
    />
    <span class="mark"></span>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.form-item-input-check {
  padding-right: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > .mark {
    background: #dddddd !important;
    border: solid 2px $blue;
    border-radius: 50%;
  }

  .input {
    margin: 0;
    width: 0;
    opacity: 0;
  }

  .input:focus + .mark {
    background: #dddddd !important;
    border: solid 1px $blue;
  }

  .input:checked + .mark {
    border: solid 1px $blue;
    background: #ffffff;
  }

  .input:checked + .mark::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: $blue;
  }

  .mark {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 12px;
    height: 12px;
    border: solid 1px #93cfff;
    background: #ffffff;
    border-radius: 50%;
  }

  .text {
    margin-left: 12px;
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
