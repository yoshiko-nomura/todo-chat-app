<template>
  <div class="form form-task">
    <FormItemInput
      v-model="task"
      item-status="small"
      type="text"
      placeholder="タスク名"
    />
    <FormItemButton label="送信" @click="submitTask" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
    }
  },
  computed: {
    uid() {
      return this.$store.getters.user.uid
    },
  },
  methods: {
    submitTask() {
      this.$store.dispatch('todo/submitTask', {
        task: this.task,
        uid: this.uid,
      })
      this.task = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.form-task {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .form-item-input {
    width: calc(100% - 88px);
  }
}
</style>
