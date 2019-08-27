const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('开始测试 Col', () => {
	it('存在', () => {
		expect(Col).to.be.exist
	})

	it('接收 Props span', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				span: '1'
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

	it('接收 Props offset', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				offset: '1'
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('offset-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

	it('接收 Props xs', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				xs: {span: '1', offset: '1'}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-xs-1')).to.be.ok
		expect(vm.$el.classList.contains('offset-xs-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

	it('接收 Props sm', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				sm: {span: '1', offset: '1'}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-sm-1')).to.be.ok
		expect(vm.$el.classList.contains('offset-sm-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

	it('接收 Props md', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				md: {span: '1', offset: '1'}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-md-1')).to.be.ok
		expect(vm.$el.classList.contains('offset-md-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

	it('接收 Props lg', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				lg: {span: '1', offset: '1'}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-lg-1')).to.be.ok
		expect(vm.$el.classList.contains('offset-lg-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

	it('接收 Props xl', () => {
		const Constructor = Vue.extend(Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		const vm = new Constructor({
			propsData: {
				xl: {span: '1', offset: '1'}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-xl-1')).to.be.ok
		expect(vm.$el.classList.contains('offset-xl-1')).to.be.ok
		vm.$el.remove()
		vm.$destroy()
	})

})
