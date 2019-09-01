import {describe} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.be.exist
  })

  describe('Props', function () {
    it('接收 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 0.5,
        }
      }).$mount(div)
      vm.$on('beforeclose', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('接收 closeButton', function () {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 0.5,
          closeButton: {
            closeText: '关闭吧',
            callback,
          },
        }
      }).$mount()
      // console.log(vm.$el.outerHTML)
      // 测试closeText
      let span = vm.$el.querySelector('.close_text')
      expect(span.textContent.trim()).to.be.equal('关闭吧')
      // 测试回调函数是否被调用
      span.click()
      expect(callback).to.have.been.called
    })

    it('接收 enableHTML', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHTML: true
        }
      })
      vm.$slots.default = ['<h1 id=test>Hello World</h1>']
      vm.$mount()
      console.log(vm.$el.outerHTML)
      let h1Tag = vm.$el.querySelector('#test')
      expect(h1Tag).to.exist
    })

    it('接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      document.body.appendChild(vm.$el)
      console.log(vm.$el.outerHTML)
      expect(vm.$el.classList.contains('position-bottom')).to.be.ok
    })
  })
})