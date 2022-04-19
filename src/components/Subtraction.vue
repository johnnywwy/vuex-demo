<template>
  <div>
    <h4>减法</h4>
    <h4>当前count的值为：{{ count }}</h4>
    <h4>{{showNum}}</h4>
    <button @click="sub">-1</button> |
    <button @click="subN(3)">-N</button> |
    <button @click="subAsync">异步1秒 -1</button> |
    <button @click="subAsyncN(3)">异步1秒 -N</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions,mapGetters} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subAsyncN']),
    //不知道，你会不会觉得很烦，每次都要绑定点击事件
  },


}
</script>
