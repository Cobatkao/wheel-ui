<template>
	<div class="wrapper" :class="{error: error}">
		<input
			class="input-com" type="text"
			:disabled="disabled"
			:readonly="readonly"
			:value="value"
			@change="$emit('change', $event)"
		/>
		<template v-if="error">
			<c-icon class="icon-error" :name="icon"></c-icon>
			<span class="error-msg" v-text="error"></span>
		</template>
	</div>
</template>

<script>
import Icon from './icon'

export default {
	name: 'wheel-input',
	components: {
		'c-icon': Icon
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		value: {
			type: String
		},
		error: {
			type: String
		},
		icon: {
			type: String,
			default: 'setting'
		}
	}
};
</script>

<style lang="scss" scoped>
	$height: 32px;
	$border-color: #999999;
	$border-color-hover: #333333;
	$border-radius: 4px;
	$font-size: 12px;
	$box-shadow-color: rgba(0,0,0,.5);
	$error-red: #F1453D;
	$theme-color: #44d7b6;

	.wrapper {
		display: inline-flex;
		align-items: center;

		> :not(:last-child) {
			margin-right: .5em;
		}

		> .input-com {
			height: $height;
			font-size: $font-size;
			padding: 0 8px;
			outline: none;
			border: 1px solid $border-color;
			border-radius: $border-radius;

			&:hover {
				border-color: $border-color-hover;
				box-shadow: 0  0 1px 1px $border-color-hover;
			}

			&:focus {
				box-shadow: 0  0 1px 1px $box-shadow-color;
			}

			&[disabled], &[readonly] {
				border: 1px solid #bbb;
				color: #bbb;
				cursor: not-allowed;
			}
		}

		&.error {
			> input {
				border-color: $error-red;

				&:hover, &:focus {
					border-color: $error-red;
					box-shadow: 0  0 1px 1px $error-red;
				}
			}
		}

		> .icon-error {
			fill: $error-red;
		}

		.error-msg {
			color: $error-red;
			font-size: 12px;
		}
	}
</style>