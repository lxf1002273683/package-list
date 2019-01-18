<template>
	<div class="main">
    <div class="address_content">
      <div class="user_info">
        <div class="label border">
          <div class="label_name">收货人</div>
          <input class="content" @blur="blur" @focus="focus" v-model.trim="userInfo.addrContact" type="text" placeholder="请输入收货人真实姓名" />
        </div>
        <div class="label">
          <div class="label_name">手机号</div>
          <input class="content" @blur="blur" @focus="focus" v-model.trim="userInfo.addrUserTel" type="number" placeholder="请输入收货人手机号" />
        </div>
      </div>
      <div class="address_info">
        <div class="label border">
          <div class="label_name">所在地区</div>
          <div class="address_icon" @click="showSelect">
            <img src="1" />
          </div>
          <div class="content address_region" v-if="activeAddress">{{activeAddress[0]['value']}} {{activeAddress[1]['value']}}</div>
        </div>
        <div class="label">
          <div class="label_name">详细地址</div>
          
          <textarea ref="textarea" @blur="blur" @focus="focus" v-model.trim="userInfo.addrAddress" @input="changeDetails" class="content address_details" placeholder="请输入详细收货地址"></textarea>
        </div>
      </div>
      <button class="save_address btnStyle1" @click="saveAddress">
        <span>保存地址</span>
      </button>
    </div>
    <IosSelect :activeAddress="activeAddress" :close="() => {selectShow = false}" v-on:callback="selectData" v-if="selectShow" />
	</div>
</template>

<script>
  import utils from '../../js/utils.js'
  import iosSelect from '../../components/iosSelect/iosSelect.vue'
	export default {
    name: 'Address',
    data() {
      return {
        userInfo: {
          addrContact: null,
          addrUserTel: null,
          addrAddress: null,
          userId: null,
          goodsId: null,
        },
        textareaHeight: null,
        selectShow: false,
        activeAddress: null,
        timeout: null,
      }
    },
    components: {
      'IosSelect': iosSelect
    },
    mounted() {
      const query = utils.urlQuery()
      this.userInfo.userId = query.sunlandUserId
      this.userInfo.goodsId = query.goodsId
    },
    methods: {
      saveAddress() {
        // history.back()
        // return
        this.blink('saveAddress', 'click', '保存地址-点击')
        let status = true
        for (const key in this.userInfo) {
          if(!this.userInfo[key]){
            status = false
          }
        }
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (!myreg.test(this.userInfo.addrUserTel)) {
          return this.$Toast.show('请填写正确的手机号')
        }
        if(!status){
          return this.$Toast.show('请将信息填写完整')
        }
        let that = this
        this.$MessageBox.show({
          message: '确定提交此地址？',
          closeBtnStatus: true,
          callback: () => {
            
          }
        })
      },
      changeDetails() {
        var e = this.$refs.textarea
        this.textareaHeight = this.textareaHeight || e.scrollHeight
        e.style.height = 0
        e.scrollTop = 0
        e.style.height = this.setTextareaHeight(e.scrollHeight)
      },
      setTextareaHeight(num) {
        const height = utils.pxtorem(104)
        return num / this.textareaHeight * height + 'rem'
      },
      showSelect() {
        this.selectShow = true
      },
      selectData(data) {
        this.activeAddress = data
        this.userInfo.addrAddress = data[0]['value'] + ' ' + data[1]['value']
        this.changeDetails()
      },
      focus() {
        clearTimeout(this.timeout)
      },
      blur() {
        this.timeout = setTimeout(() => {
            document.body.scrollTop = document.body.scrollHeight
        },300)
      },
      catchDefault(err) {
        console.log(err)
        this.$Toast.show('兑换失败')
      },
      blink(func, action, target) {
        console.log(func, action, target)
        // api.blink({
        //   func: func,
        //   action: action,
        //   target: target,
        // })
      }
    }
	}
</script>

<style lang="scss">
@import "../../assets/scss/common.scss";
@import '../../assets/scss/util.scss';
.main{
  background: #F3F4F5;
  .address_info,
  .user_info{
    margin-top: torem(40);
    background: #FFFFFF;
  }
  .label{
    margin-left: torem(30);
    // width: torem(720);
    min-height: torem(104);
    @include font-dpr(17);
    position: relative;
    &.border{
      border-bottom: torem(1) solid #E7E7E7;
    }
    .label_name{
      position: absolute;
      top: 0;
      left: 0;
      line-height: torem(104);
      color: #222222;
    }
    input{
      height: torem(104);
      width: torem(500);
      color: #333333;
    }
    .content{
      margin-left: torem(146);
      @include font-dpr(17);
    }
  }
  .address_info{
    margin-top: torem(30);
     .content{
      margin-left: torem(180);
    }
    .address_region{
      width: torem(402);
      padding: torem(28) 0;
      line-height: torem(48);
    }
    .address_icon{
      position: absolute;
      top: 0;
      right: 0;
      width: torem(96);
      padding: torem(33) 0;
      &::after{
        content: "";
        position: absolute;
        top: torem(22);
        height: torem(60);
        left: 0;
        width: torem(2);
        background: #E7E7E7;
      }
      img{
        width: torem(37);
        height: torem(37);
        background: #111111;
        margin: 0 auto;
      }
    }
    .address_details{
      padding: torem(28) 0;
      height: torem(104);
      // height: auto;
      min-height: torem(48);
      line-height: torem(48);
      width: torem(420);
      box-sizing: border-box;
    }
  }
  .save_address{
    width: torem(360);
    position: absolute;
    bottom: torem(60);
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
  }
}
</style>