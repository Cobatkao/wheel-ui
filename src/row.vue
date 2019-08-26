<template>
	<div
		class="row"
		:style="{ marginLeft: `-${gutter / 2}px`, marginRight: `-${gutter / 2}px` }"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "wheel-row",
	props: {
		gutter: {
			type: [Number, String]
		}
	},
	data() {
		return {};
	},
	mounted() {
		this.$children.forEach(vm => {
			vm.gutter = this.gutter;
		});
	}
};
</script>

<style scoped lang="scss">
.row {
	display: flex;
	/*background-color: #F6F6F6;*/
	/*background-clip: padding-box;*/
	/*padding-top: 10px;*/
	/*padding-bottom: 10px;*/

	> div:nth-child(odd) {
		background-color: #d6e4aa;
		background-clip: content-box;
	}

	> div:nth-child(even) {
		background-color: #83b582;
		background-clip: content-box;
	}
}
</style>
