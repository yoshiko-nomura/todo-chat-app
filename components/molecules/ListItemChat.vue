<template>
  <div class="list-item list-item-chat"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.list-item-chat {
  padding: 6px 12px;
  display: flex;

  > .content {
    margin-left: 8px;

    > .name {
      font-weight: 700;
      margin-right: 4px;
      display: inline;
    }

    > .time {
      font-size: 10px;
    }

    > .text {
      margin-top: 4px;
      line-height: 160%;
    }
  }
}
</style>
