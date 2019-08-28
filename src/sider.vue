<template>
	<transition name="fade">
    <div class="sider" v-if="visible">
        <slot></slot>
				<button class="close_btn" @click="visible = false">关闭</button>
    </div>
	</transition>
</template>

<script>
  export default {
    name: "wheel-sider",
    data() {
      return {
        visible: true
			}
    },
    components: {}
  }
</script>

<style scoped lang="less">
	.sider {
		position: relative;

		.close_btn {
			padding: 5px;
			position: absolute;
			top: 5px;
			right: 3px;
		}
	}

	.fade-enter-active, .fade-leave-active {
		transition: all .3s;
	}
	.fade-enter, .fade-leave-to {
		margin-left: -200px;
	}
</style>
