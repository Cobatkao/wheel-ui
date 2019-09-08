import {describe} from 'mocha'

const expect = chai.expect
import Vue from 'vue'

Vue.config.productionTip = false
Vue.config.devtools = false

import Tabs from '../src/tabs'
import Tabhead from '../src/tabs-head'
import Tabbody from '../src/tabs-body'
import Tabpane from '../src/tabs-pane'
import Tabitem from '../src/tabs-item'

Vue.component('c-tabs', Tabs);
Vue.component('c-tabs-head', Tabhead);
Vue.component('c-tabs-item', Tabitem);
Vue.component('c-tabs-pane', Tabpane);
Vue.component('c-tabs-body', Tabbody);

describe('TabItem exist', () => {
  it('存在', () => {
    expect(Tabitem).to.be.exist
  })

  it('接收 props - name', () => {
    const Constructor = Vue.extend(Tabitem)
    const vm = new Constructor({
      propsData: {
        name: 'testName'
      }
    }).$mount()
    expect(vm.$el.dataset.name).to.be.equal('testName')
  })

  it('接收 props - disabled', () => {
    const Constructor = Vue.extend(Tabitem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('co-tab--disabled')).to.be.ok
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })

})