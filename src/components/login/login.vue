<template>
  <header>
    <img class="bg" src="../../assets/img/login/background.png" />
    <img class="logo" src="../../assets/img/login/logo.png" />
    <p>金融资产管理系统</p>
  </header>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login page'
    }
  }
}
</script>
<style lang="scss">
header{
   text-align: center;
  img.bg{
    width: 100%;
  }
  img.logo{
    width: 4rem;
    margin-top: -2rem;
  }
  p{
    font-weight: bold;
    font-size: 32px;
  }
}
</style>
