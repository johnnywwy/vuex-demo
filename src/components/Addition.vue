<template>
  <div>
    <h4>加法</h4>
    <h4>当前count的值为：{{ $store.state.count }}</h4>
    <button @click="btnAdd">+1</button>
  </div>
</template>

<script>

export default {
  methods: {
    btnAdd() {
      this.$store.commit('add')
    }
  }
}
</script>