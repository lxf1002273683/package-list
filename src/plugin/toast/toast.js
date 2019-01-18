import ToastTemp from './toast.vue'

let toast

export default {
  install(Vue, options) {
    if (!toast) {
      const ToastPlugin = Vue.extend(ToastTemp);
      toast = new ToastPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild(toast.$el);
    }

    Vue.mixin({
      created() {
        this.$Toast = {
          show(text, timeout) {
            toast.showStatus = true
            toast.message = text || '提示'
            const time = timeout || 1500
            setTimeout(() => {
              toast.showStatus = false
            }, time)
          }
        }
      }
    })
  }
}
