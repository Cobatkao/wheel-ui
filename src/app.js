import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import buttonGroup from './buttonGroup';

Vue.component('c-button', Button);
Vue.component('c-icon', Icon);
Vue.component('c-button-group', buttonGroup);

new Vue({
	el: "#app",
  data: {
	  isLoading: false
  }
});
