<template>
  <div>
    <h4>减法</h4>
    <h4>当前count的值为：{{ count }}</h4>
    <button @click="btnSub">-1</button>
    |
    <button @click="btnSubN">-N</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    btnSub() {
      this.sub()
    },
    btnSubN() {
      this.subN(3)
    }
  },


}
</script>
