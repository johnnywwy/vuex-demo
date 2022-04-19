<template>
  <div>
    <h3>计数器</h3>
    <Addition></Addition>
    <hr>
    <Subtraction></Subtraction>
  </div>
</template>

<script>
import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'

export default {
  name: 'App',
  components: {
    Addition, Subtraction
  }
}
</script>


