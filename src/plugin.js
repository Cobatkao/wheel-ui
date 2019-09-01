import Toast from './toast'

export default {
  install(Vue, options) { // 暴露一个 install 方法，接收 Vue 构造器和选项对象
    Vue.prototype.$toast = (toastOptions) => {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        propsData: { // 数据传入toast组件props内
          closeButton: toastOptions,
          autoCloseDelay: toastOptions.autoCloseDelay,
          autoClose: toastOptions.autoClose,
          position: toastOptions.position
        }
      })
      toast.$slots.default = toastOptions && toastOptions.message ? toastOptions.message : 'Custom Close Button' // 传递默认插槽内容
      const vm = toast.$mount()
      // document.querySelector('#app').appendChild(vm.$el)
      const el = vm.$el
      document.body.appendChild(el)
    }
  }
}