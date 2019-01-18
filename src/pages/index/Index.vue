<template>
  <div class="main">
    <button class="copy" @click="copy">复制</button>
  </div>
</template>

<script>
import utils from "../../js/utils"
import Clipboard from 'clipboard'
import Rx from '../../js/rx'


export default {
  name: "index",
  data() {
    return {
      copyText: '123',
    };
  },
  mounted() {
    
  },
  methods: {
    copy() {
      console.log(1)
      const that = this
      var copy = new Clipboard('.copy', {
        text: function() {
          return that.copyText
        }
      })
      copy.on('success', function(e) {
        that.$Toast.show('复制成功')
      })
      copy.on('error', function(e) {
        that.$Toast.show('复制失败')
      })
    }
  },
  components: {
  }
}
</script>

<style lang="scss" >
@import "../../assets/scss/common.scss";
@import '../../assets/scss/util.scss';
.copy{
  width: torem(80);
  height: torem(90);
  margin: 0 auto;
}
</style>
