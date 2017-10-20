<template>
  <header>
    <span
      v-if="isShow"
      class="glyphicon glyphicon-chevron-left col-xs-1 col-sm-1 col-md-1 col-lg-1"
      ></span>
      <p v-if="isShow" class="col-xs-9 col-sm-9 col-md-9 col-lg-9">{{ title }}</p>
      <p v-if="!isShow" class="col-xs-10 col-sm-10 col-md-10 col-lg-10"> {{ title }}</p>
      <span
        v-if="isFlash"
        class="glyphicon glyphicon-refresh col-xs-1 col-sm-1 col-md-1 col-lg-1"
      ></span>
  </header>
</template>
<script>
export default {
  props: [
    'title',
    'isShow',
    'isFlash'
    ],
    data() {
      return {}
    },
    components: {}
}
</script>
<style lang="scss">
header{
  z-index: 9999;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:4rem;
  line-height: 4rem;
  background: #cd161b;
  color: #fff;
  vertical-align: middle;
  text-align: center;
  p{
    font-size: 20px;
  }
  span{
    vertical-align: middle;
    display: inline-block;
    height: 4rem;
    line-height: 4rem!important;
  }
  .col-xs-10,col-sm-10{
    padding-left: 8rem;
  }
}
</style>
