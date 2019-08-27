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
	// 保证传入的参数必须是span或offset
	let validator = (value) => {
		let valid = true
		Object.keys(value).forEach((item) => {
			if(!['span', 'offset'].includes(item)) {
				valid = false
			}
		})
		return valid
	}
export default {
	name: "wheel-column",
	props: {
		span: {
			type: [Number, String]
		},
		offset: {
			type: [Number, String]
		},
		xs: {
			type: Object,
			validator
		},
		sm: {
			type: Object,
			validator
		},
		md: {
			type: Object,
			validator
		},
		lg: {
			type: Object,
			validator
		},
		xl: {
			type: Object,
			validator
		},
	},
	data() {
		return {
			gutter: 0
		};
	},
	computed: {
		colClass() {
			let { span, offset, xs, sm, md, lg, xl } = this
			return [
					span && `col-${span}`,
					offset && `offset-${offset}`,
					xs && `col-xs-${xs.span}`,
					sm && `col-sm-${sm.span}`,
					md && `col-md-${md.span}`,
					lg && `col-lg-${lg.span}`,
					xl && `col-xl-${xl.span}`,
			]
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

	
	@media (min-width: 0) {
		$class-prefix: col-xs-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-xs-;
		@for $j from 1 through 24 {
			&.#{$class-prefix}#{$j} {
				margin-left: ($j / 24) * 100%;
			}
		}
	}

	@media (min-width: 577px) {
		$class-prefix: col-sm-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-sm-;
		@for $j from 1 through 24 {
			&.#{$class-prefix}#{$j} {
				margin-left: ($j / 24) * 100%;
			}
		}
	}

	@media (min-width: 769px) {
		$class-prefix: col-md-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-md-;
		@for $j from 1 through 24 {
			&.#{$class-prefix}#{$j} {
				margin-left: ($j / 24) * 100%;
			}
		}
	}

	@media (min-width: 993px) {
		$class-prefix: col-lg-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-lg-;
		@for $j from 1 through 24 {
			&.#{$class-prefix}#{$j} {
				margin-left: ($j / 24) * 100%;
			}
		}
	}

	@media (min-width: 1201px) {
		$class-prefix: col-xl-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-xl-;
		@for $j from 1 through 24 {
			&.#{$class-prefix}#{$j} {
				margin-left: ($j / 24) * 100%;
			}
		}
	}

}
</style>
