const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('开始测试 Row', () => {
	it('存在', () => {
		expect(Row).to.be.exist
	})

	it('接收 Props gutter', (done) => {
		Vue.component('c-row', Row)
		Vue.component('c-col', Col)

		const div = document.createElement('div')
		document.body.appendChild(div)
		div.innerHTML = `
			<c-row :gutter="10">
				<c-col :span="12"></c-col>
				<c-col :span="12"></c-col>
			</c-row>
		`
		const vm = new Vue({
			el: div
		})

		setTimeout(() => {
			const row = vm.$el.querySelector('.row')
			expect(getComputedStyle(row).marginLeft).to.be.equal('-5px')
			expect(getComputedStyle(row).marginRight).to.be.equal('-5px')
			const cols = vm.$el.querySelectorAll('.col')
			expect(getComputedStyle(cols[0]).paddingRight).to.be.equal('5px')
			expect(getComputedStyle(cols[1]).paddingLeft).to.be.equal('5px')
			done()
			vm.$el.remove()
			vm.$destroy() // 异步执行完，退出测试用例前销毁本次测试实栗
		}, 1500)
	})

	it('接收 Props align', () => {
		const Constructor = Vue.extend(Row)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				align: 'left'
			}
		}).$mount(div)
		const element = vm.$el
		expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
		vm.$el.remove()
		vm.$destroy()
	})
})
