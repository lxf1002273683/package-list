<template>
	<div id="Toast" class="blackBg" v-if="showStatus" @click.stop="'return false'">
		<div class="toast blackBg_content">{{message}}</div>
	</div>
</template>

<script>
	export default {
		name: 'Toast',
		props: {
      message: {
        type: String,
        twoWay: true,
      },
      showStatus: {
        type: Boolean
      }
    },
	}
</script>

<style lang="scss" scoped="scoped">
@import '../../assets/scss/util.scss';
#Toast{
  z-index: 9999;
  .toast{
    padding: torem(10) torem(20);
    background: rgba(0,0,0,0.8);
    border-radius: torem(6);
    color: #FFFFFF;
  }
}
</style>