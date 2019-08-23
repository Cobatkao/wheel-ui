const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  })

  // 分组1：测试props
  describe('测试 props 接收参数', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '测试内容'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.value).to.equal('测试内容')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.disabled).to.equal(true)
    })

    it('接收 readOnly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '出错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
      const errorMsg = vm.$el.querySelector('error-msg')
      expect(errorMsg.innerText).to.equal('出错了')
    })
  })

  describe('测试 event 事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('测试 change 事件', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback) // 触发change时执行callback
      let event = new Event('change') // 开始手动触发input change事件
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event) // 期待回调会被调用且传递的第一个参数是event
    })

    it('测试 input 事件', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      // 手动触发input change事件
      let event = new Event('input')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event) // 期待回调会被调用且传递的第一个参数是event
    })

    it('测试 focus 事件', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('focus', callback)
      // 手动触发input change事件
      let event = new Event('focus')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event) // 期待回调会被调用且传递的第一个参数是event
    })

    it('测试 blur 事件', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('blur', callback)
      // 手动触发input change事件
      let event = new Event('blur')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event) // 期待回调会被调用且传递的第一个参数是event
    })
  })


})