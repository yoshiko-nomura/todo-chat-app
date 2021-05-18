<template>
  <li class="list-item list-item-task"></li>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.list-item-task {
  padding: 6px 12px 6px 32px;

  > .text {
    padding-top: 6px;
    display: inline-block;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      display: inline-block;
      width: 676px;
      height: 1px;
      background-color: #bbbbbb;
    }
  }
}
</style>
