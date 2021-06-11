<template>
  <div class="form form-chat">
    <FormItemTextarea v-model="text" type="text" item-status="small" />
    <FormItemButton label="送信" @click="submitChat" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid
    },
  },
  methods: {
    submitChat() {
      this.$store.dispatch('chat/submitChat', {
        text: this.text,
        uid: this.uid,
      })
      this.text = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.form-chat {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > .form-item-textarea {
    width: calc(100% - 88px);
  }
}
</style>
