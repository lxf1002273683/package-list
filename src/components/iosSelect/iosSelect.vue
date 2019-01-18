<template>
	<div @click.stop="'return false'">
  </div>
</template>

<script>
  import IosSelect from './iosSelect.js'
  import addressData from './addressData'
  import utils from '../../js/utils.js'
	export default {
		name: 'IosSelect',
		props: {
      activeAddress: {
        twoWay: true
      },
      close: {
        type: Function
      }
    },
    mounted() {
      this.showIosSelect()
    },
    methods: {
      showIosSelect() {
        let that = this
        const defaultAddress= [{
          id: 110000
        },{
          id: 110100
        }]
        let activeAddress = this.activeAddress ? this.activeAddress : defaultAddress
        new IosSelect(
          2,
          // [addressData.rovincesList, addressData.citysList, addressData.citysList],
          [addressData.rovincesList, addressData.citysList],
          {
            itemHeight: utils.pxtorem(48),
            headerHeight: utils.pxtorem(86),
            oneLevelId: activeAddress[0]['id'],
            twoLevelId: activeAddress[1]['id'],
            cssUnit: 'rem',
            relation: [1, 1],
            callback: function(selectOne, selectTwo) {
              that.close()
              that.$emit('callback', [selectOne, selectTwo])
            },
            fallback: function() {
              that.close()
            },
            maskCallback: function() {
              that.close()
            }
          }
        )
      }
    }
	}
</script>

<style lang="scss">
@import './iosSelect.css';
.ios-select-widget-box {
  header.iosselect-header a{
    @include font-dpr(15);
    color: #030303;
    &.close{
      padding-left: .3rem;
    }
    &.sure{
      padding-right: .3rem;
    }
  }
  ul li{
    @include font-dpr(12);
    &.at{
      @include font-dpr(15);
      font-weight: 600;
    }
    &.side1{
      @include font-dpr(14);
    }
    &.side2{
      @include font-dpr(13);
    }
  }
}
</style>