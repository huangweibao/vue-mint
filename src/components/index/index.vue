<template>
<div>
  <xy-header></xy-header>
  <div class="container">
    <div class="statisticsContainer" >
      <h3>统计</h3>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <p class="fontBig">111</p>
        <p>在线用户</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <p class="fontBig">111</p>
        <p>持仓手数</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 noneRightBorder">
        <p class="fontBig">111</p>
        <p>平仓手数</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <p class="fontBig" style="color:#f69c00;">111</p>
        <p>客户总资金</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <p class="fontBig"
        >111</p>
        <p>总浮动盈亏</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 noneRightBorder">
        <p class="fontBig"
        >111</p>
        <p>总平仓盈亏</p>
      </div>
    </div>
    <div class="oprationContainer">
      <h3>操作</h3>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <img src="../../assets/img/index/client-confirm.png">
        <p>客户认证</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <img src="../../assets/img/index/client-way.png">
        <p>客户出金</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <img src="../../assets/img/index/agent-way.png">
        <p>代理出金</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <img src="../../assets/img/index/income.png">
        <p>入金记录</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <img src="../../assets/img/index/cc-order.png">
        <p>持仓订单</p>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <img src="../../assets/img/index/wt-order.png">
        <p>委托订单</p>
      </div>
    </div>
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
      msg: 'index page'
    }
  },
  components: {
    xyHeader,
    xyFooter
  }
}
</script>
<style lang="scss">
  .container{
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    margin-bottom: 3rem;
    //border-bottom: 1px solid #eee;
  }
  .statisticsContainer{
    margin-top: 2rem;
    //border-top: 1px solid #eee;
    h3{
      text-indent: 1rem;
      height: 1.8rem;
      line-height: 1.8rem;
      background: #f0f0f0;
      color: #626262;
      //border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0;
    }
    div{
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-right: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      text-align: center;
      p.fontBig{
        font-size: 24px;
        font-weight: bold;
      }
      p.red{
        color: #cd161b;
      }
      p.green{
        color: #22ac38;
      }
    }
    div.noneRightBorder{
      border-right: none;
    }
  }
  .statisticsContainer::after{
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .oprationContainer{
    h3{
      text-indent: 1rem;
      height: 1.8rem;
      line-height: 1.8rem;
      background: #f0f0f0;
      color: #626262;
      //border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0;
    }
    div{
      margin-top: .5rem;
      text-align: center;
      img{
        border-radius: 50%;
        width: 3rem;
      }
      p{
        color: #626262;
      }
    }
  }

</style>
