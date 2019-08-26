<template>
	<div
		class="row"
		:style="rowStyle"
		:class="rowClass"
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
		},
		align: {
			type: String,
			validator: (value) => {
				return ['left', 'center', 'right'].includes(value)
			}
		}
	},
	data() {
		return {};
	},
	computed: {
		rowStyle() {
			let { gutter } = this
			if (gutter) {
				return {
					['margin-left']: `-${gutter / 2}px`,
					['margin-right']: `-${gutter / 2}px`
				}
			}
			return
		},
		rowClass() {
			let { align } = this
			return [align && `align-${align}`]
		}
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

	> div:nth-child(odd) {
		background-color: #d6e4aa;
		background-clip: content-box;
	}

	> div:nth-child(even) {
		background-color: #83b582;
		background-clip: content-box;
	}

	&.align-left {
		justify-content: flex-start;
	}

	&.align-center {
		justify-content: center;
	}

	&.align-right {
		justify-content: flex-end;
	}
}
</style>
