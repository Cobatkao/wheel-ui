<template>
	<div
		class="col"
		:class="colClass"
		:style="colStyle"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "wheel-column",
	props: {
		span: {
			type: [Number, String]
		},
		offset: {
			type: [Number, String]
		}
	},
	data() {
		return {
			gutter: 0
		};
	},
	computed: {
		colClass() {
			let { span, offset } = this
			return [span && `col-${span}`, offset && `offset-${offset}`]
		},
		colStyle() {
			let { gutter } = this
			return {
				['padding-left']: `${gutter / 2}px`,
				['padding-right']: `${gutter / 2}px`
			}
		}
	}
};
</script>

<style scoped lang="scss">
.col {
	height: 100px;

	/*生成24个 .col-24 类*/
	$class-prefix: col-;
	@for $n from 1 through 24 {
		&.#{$class-prefix}#{$n} {
			width: ($n / 24) * 100%;
		}
	}

	/*生成24个 .offset-24 类*/
	$class-prefix: offset-;
	@for $j from 1 through 24 {
		&.#{$class-prefix}#{$j} {
			margin-left: ($j / 24) * 100%;
		}
	}
}
</style>
