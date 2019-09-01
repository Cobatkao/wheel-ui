import Toast from './toast'

let currentToast

export default {
  install(Vue) { // 暴露一个 install 方法，接收 Vue 构造器和选项对象
    Vue.prototype.$toast = (message, toastOptions) => {
      // 若当前存在Toast，则立即关闭
      currentToast && currentToast.close()
      currentToast = createToast.call(null, {
        Vue,
        message,
        propsData: toastOptions,
        oncBeforeClose: () => {
          currentToast = null
        }})
    }
  }
}

function createToast({Vue, propsData, message, oncBeforeClose}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    // 调用时的对象整体传入toast组件props内
    propsData
  })
  toast.$slots.default = message ? message : 'Custom Close Button' // 传递默认插槽内容
  const vm = toast.$mount()
  // document.querySelector('#app').appendChild(vm.$el)
  toast.$on('beforeclose', oncBeforeClose)
  const el = vm.$el
  document.body.appendChild(el)
  return toast
}