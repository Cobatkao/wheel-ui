<template>
	<div class="layout" :class="{hasSider: ifHasSider}">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "wheel-layout",
		mounted() {
      this.$children.forEach(item => {
        if (item.$options.name === 'wheel-sider') {
          this.ifHasSider = true
        }
      })
    },
    data() {
      return {
        ifHasSider: false
			}
    },
  }
</script>

<style scoped lang="less">
	.layout {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		background-color: #e3e3e3;

		&.hasSider {
			flex-direction: row;
		}
	}
</style>
