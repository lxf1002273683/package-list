import MessageBox from './messageBox.vue'


export default {
  install(Vue, options) {
    let message = null
    const MessageBoxPlugin = Vue.extend(MessageBox);
    message = new MessageBoxPlugin({
      el: document.createElement('div')
    })
    document.body.appendChild(message.$el);

    Vue.mixin({
      created() {
        this.$MessageBox = {
          show(obj) {
            message.showStatus = true
            message.message = obj
            message.close = (status) => {
              message.showStatus = false
              if (obj.callback && status) {
                obj.callback()
              }
            }
          },
        }
      }
    })
  }
}
