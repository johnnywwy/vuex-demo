<template>
  <div>
    <h4>减法</h4>
    <h4>当前count的值为：{{ count }}</h4>
    <button @click="btnSub">-1</button>
    |
    <button @click="btnSubN">-N</button>
    |
    <button @click="btnSubAsync">异步1秒 -1</button>
    |
    <button @click="btnSubAsyncN">-N</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subAsyncN']),
    btnSub() {
      this.sub()
    },

    btnSubN() {
      this.subN(3)
    },
    btnSubAsync() {
      this.subAsync()
    },
    btnSubAsyncN() {
      this.subAsyncN(3)
    }
  },


}
</script>
