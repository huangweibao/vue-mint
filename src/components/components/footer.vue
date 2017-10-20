<template>
<div class="footer">
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
    <router-link to="/index">
      <!--<span class="glyphicon glyphicon-home"></span>&nbsp;首页-->
      <img v-if="!isShow" src="../../assets/img/index/footer-1.png">
      <img v-if="isShow" src="../../assets/img/index/footer-1-select.png">
      <p>首页</p>
    </router-link>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    <!--<span class="glyphicon glyphicon-file"></span>&nbsp;持仓单-->
    <img v-if="!isEntrustOrder" src="../../assets/img/index/footer-2.png">
    <img v-if="isEntrustOrder" src="../../assets/img/index/footer-2-select.png">
    <p>持仓单</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    <!--<span class="glyphicon glyphicon-book"></span>&nbsp;委托单-->
    <img v-if="!isPositionOne" src="../../assets/img/index/footer-3.png">
    <img v-if="isPositionOne" src="../../assets/img/index/footer-3-select.png">
    <p>委托单</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    <router-link to="/index/MyMine">
      <!--<span class="glyphicon glyphicon-user"></span>&nbsp;我的-->
      <img v-if="!isMyMe" src="../../assets/img/index/footer-3.png">
      <img v-if="isMyMe" src="../../assets/img/index/footer-3-select.png">
      <p>我的</p>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            isEntrustOrder: true,
            isPositionOne: true,
            isMyMe: true
        }
    },
    components: {}
}
</script>
<style lang="scss">
  .footer{
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    //line-height: 3rem;
    background: #000;
    //border-top: 1px solid #eee;
    
    div{
      text-align: center;
      img{
        margin-top: .2rem;
        width: 1rem;
      }
      p{
        color: #b7b7b7;
        font-size: 12px;
      }
      p.red{
        color: #cd161b;
      }
    }
  }
  
</style>
