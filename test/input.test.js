const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  })

  it('接收 value', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        value: '测试内容'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('input')
    expect(useElement.value).to.equal('测试内容')
    vm.$destroy()
  })
})