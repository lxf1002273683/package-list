<template>
	<div id="MessageBox" class="blackBg" v-if="showStatus" @click.stop="'return false'">
		<div class="message blackBg_content" v-if="!message.type">
      <div class="title">{{message.title ? message.title : '提示'}}</div>
      <div class="content">{{message.message}}</div>
      <div :class="message.closeBtnStatus ? 'btns' : 'btns alert'">
        <button class="close" @click="closeMessage(false)">取消</button>
        <button class="confirm" @click="closeMessage(true)">确认</button>
      </div>
    </div>
    <div class="message blackBg_content message_type1" v-if="message.type == 1">
      <div class="title">
        <span>确定使用</span>
        <span class="message_num">{{message.num}}积分</span>
        <span>兑换{{message.message}}？</span>
      </div>
      <div class="content">请按后续的提示使用</div>
      <div :class="message.closeBtnStatus ? 'btns' : 'btns alert'">
        <button class="close" @click="closeMessage(false)">取消</button>
        <button class="confirm" @click="closeMessage(true)">确认</button>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'MessageBox',
		props: {
      message: {
        type: Object,
        twoWay: true
      },
      close: {
        type: Function,
      },
      showStatus: {
        type: Boolean
      },
    },
    methods: {
      closeMessage(status) {
        this.close(status)
      }
    }
	}
</script>

<style lang="scss" scoped="scoped">
@import '../../assets/scss/util.scss';
#MessageBox{
  z-index: 9999;
  .message{
    width: torem(600);
    min-height: torem(270);
    max-height: torem(300);
    border-radius: torem(6);
    background: #FFFFFF;
  }
  .title{
    color: #333333;
    @include font-dpr(17);
    text-align: center;
    line-height: torem(80);
  }
  .content{
    color: #222222;
    text-align: center;
    @include font-dpr(17);
    line-height: torem(42);
    padding: torem(20) torem(40) torem(108) torem(40);
  }
  .btns{
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: torem(1) solid #ECECEC;
    height: torem(88);
    &::after{
      content: "";
      position: absolute;
      left: 50%;
      width: torem(1);
      height: 100%;
      border-left: torem(1) solid #ECECEC;
    }
  }
  button{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    @include font-dpr(15);
    line-height: torem(88);
  }
  .confirm{
    left: 50%;
    color: #FF8A06;
  }
  .alert{
    &::after{
      display: none;
    }
    .close{
      display: none;
    }
    .confirm{
      left: 0;
      width: 100%;
    }
  }
  .message_type1{
    .title{
      line-height: torem(60);
      font-weight: 600;
      margin-top: torem(50);
      .message_num{
        color: #FF8A06;
      }
    }
    .content{
      @include font-dpr(14);
      color: #C0C0C0;
      line-height: torem(40);
    }
  }
}
</style>