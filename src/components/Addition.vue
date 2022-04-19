<template>
  <div>
    <h4>加法</h4>
<!--    <h4>当前count的值为：{{ $store.state.count }}</h4>-->
    <h4>{{$store.getters.showNum}}</h4>
    <button @click="btnAdd">+1</button> |
    <button @click="btnAddN">+N</button> |
    <button @click="btnAddAsync1">异步1秒 +1</button> |
    <button @click="btnAddAsyncN">异步1秒 +N</button>
  </div>
</template>

<script>

export default {
  methods: {
    btnAdd() {
      this.$store.commit('add')
    },
    btnAddN(){
      this.$store.commit('addN',3)
    },
    btnAddAsync1(){
      this.$store.dispatch('addAsync')
    },
    btnAddAsyncN(){
      this.$store.dispatch('addAsyncN',3)
    }
  }
}
</script>