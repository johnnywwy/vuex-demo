<template>
  <div>
    <h4>减法</h4>
    <h4>当前count的值为：{{ count }}</h4>
    <button>-1</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count'])
  }

}
</script>
