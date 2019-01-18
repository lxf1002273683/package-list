import Vue from 'vue'
import 'lib-flexible/flexible.js'
import Index from './Index.vue'
import Toast from '../../plugin/toast/toast'
import MessageBox from '../../plugin/messageBox/messageBox'



Vue.use(Toast)
Vue.use(MessageBox)

new Vue({
  el: '#index',
  render: h => h(Index)
})

