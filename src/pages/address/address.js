import Vue from 'vue'
import 'lib-flexible/flexible.js'
import Address from './Address.vue'
import Toast from '../../plugin/toast/toast'
import MessageBox from '../../plugin/messageBox/messageBox'

Vue.use(Toast)
Vue.use(MessageBox)


new Vue({
  el: '#address',
  render: h => h(Address)
})
