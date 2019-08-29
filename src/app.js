import Vue from 'vue';

import Button from './button';
import Icon from './icon';
import buttonGroup from './buttonGroup';
import Input from './input'
import Row from './row'
import col from './col'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'

Vue.use(Plugin)

import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

Vue.component('c-button', Button);
Vue.component('c-icon', Icon);
Vue.component('c-button-group', buttonGroup);
Vue.component('c-input', Input);
Vue.component('c-row', Row);
Vue.component('c-col', col);
Vue.component('c-footer', Footer);
Vue.component('c-header', Header);
Vue.component('c-layout', Layout);
Vue.component('c-content', Content);
Vue.component('c-sider', Sider);
Vue.component('c-toast', Toast);

new Vue({
	el: "#app",
  data: {
	  isLoading: false,
    msg: '模拟v-model双向绑定'
  },
  methods: {
	  inputChange(e) {
	    console.log(e.target.value)
    },
    // Toast组件使用方法
    showToast0() {
      this.$toast({
        message: '这是一个吐司', // Toast文本
        closeText: '明白', // 关闭按钮文本
        callback () { // 关闭时回调
          console.log('您的🍞关闭了')
        }
      })
    },
    showToast1() {
	    this.$toast({
        message: '这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司这是一个吐司', // Toast文本
        closeText: '明白', // 关闭按钮文本
        callback () { // 关闭时回调
          console.log('您的🍞关闭了')
        }
      })
    },
    showToast2() {
      this.$toast()
    },
    showToast3() {
      this.$toast({
        message: '<i><a href="www.baidu.com">接收HTML</a></i>', // Toast文本
        closeText: '喔森', // 关闭按钮文本
        enableHTML: true,
        callback () { // 关闭时回调
          console.log('您的🍞关闭了')
        }
      })
    }
  }
});

//单元测试
const expect = chai.expect;

{
  // 测试按钮是否含有icon
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
  // 传入loading，只显示loading图标
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
      iconPosition: 'right' // 提供iconPosition后断言order应该为2
    }
  });
  vm.$mount(div); // 必须挂载到节点后元素才会渲染，因此才会有css属性
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2');
  vm.$el.remove(); // (删除button元素)测试时创建元素，测试结束后再销毁元素，防止页面有多余元素
  vm.$destroy(); // 删除button对象
}

{
  // 测试click事件
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
  // 期待button被click后，间谍函数已被调用
  expect(spy).to.have.been.called();
}

