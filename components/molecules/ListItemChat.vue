<template>
  <li class="list-item list-item-chat">
    <IconUser :image="image" />
    <div class="content">
      <p class="name">{{ name }}</p>
      <time class="time">{{
        $dayjs(messages.time).format('YYYY.MM.DD HH:mm')
      }}</time>
      <p class="text">{{ messages.text }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: '',
    },
    messages: {
      type: Object,
    },
    name: {
      type: String,
      default: '',
    },
  },
}
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
