import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import buttonGroup from './buttonGroup';
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

Vue.component('c-button', Button);
Vue.component('c-icon', Icon);
Vue.component('c-button-group', buttonGroup);

new Vue({
	el: "#app",
  data: {
	  isLoading: false
  }
});

// 单元测试
const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  vm.$mount();
  let useNode = vm.$el.querySelector('use');
  let href = useNode.getAttribute('xlink:href');
  expect(href).to.eq('#icon-settings');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      loading: true
    }
  });
  vm.$mount();
  let useNode = vm.$el.querySelector('use');
  let href = useNode.getAttribute('xlink:href');
  expect(href).to.eq('#icon-loading');
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1');
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: 'right'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount();
  // mock函数
  let spy = chai.spy(function () {
  // 暂时空函数
  });

  vm.$on('click', spy);
  let button = vm.$el;
  button.click();
  // 期待间谍函数被调用
  expect(spy).to.have.been.called();
}

