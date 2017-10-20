<template>
  <div>
    <xy-header v-bind:title="title"></xy-header>
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <xy-footer></xy-footer>
  </div>
</template>
<script>
 import xyHeader from '../components/header'
 import xyFooter from '../components/footer'
  
  export default {
    name: 'index',
    data () {
      return {
        msg: 'my-mine page',
        title: '我的'
      }
    },
    components: {
     xyHeader,
     xyFooter
    }
  }
</script>
<style lang="scss">

</style>
