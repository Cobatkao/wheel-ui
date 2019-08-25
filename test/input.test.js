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
  describe('接收 props', () => {
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
          error: '出错了',
          icon: 'error'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
      const errorMsg = vm.$el.querySelector('.error-msg')
      expect(errorMsg.innerText).to.equal('出错了')
    })
  })

  // 分组2：测试事件
  describe('测试事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持input/change/focus/blur事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback) // 触发change时执行callback
        let event = new Event(eventName) // 开始手动触发input change事件
        Object.defineProperty(event, 'target', {value: {value: 'hi'}, enumerable: true})
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi') // 期待回调会被调用且传递的event.target.value
      })
    })

  })
})