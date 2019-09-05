<template>
    <div class="co-tabs__head co-tab__horizontal-line">
        <slot></slot>
        <div class="co-tabs__line"></div>
        <div class="extra_button_wrapper">
            <slot name="extra_button"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'wheel-tabshead',
    inject: ['eventBus'],
    created() {
      // 监听tab-item的选中事件
      this.eventBus.$on('update:selected', (name, vm) => {
        console.log(name)
        console.log(vm)
      })
    }
  }
</script>

<style scoped lang="scss">
    @import '../common.scss';

    .co-tabs__head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        background-color: #f8f8f8;

        > .co-tabs__line {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgb(145, 184, 89);
            height: 3px;
            border-radius: 3px;
            z-index: 1;
            width: 100px;
        }

        &.co-tab__horizontal-line::after {
            display: inline-block;
            position: absolute;
            content: ' ';
            pointer-events: none;
            border: 1px solid #ebedf0;
            transform: scaleY(0.5);
            bottom: 0;
            left: 0;
            right: 0;
            top: 100%;
            width: 100%;
        }

        > .extra_button_wrapper {
            margin-left: auto;
        }
    }
</style>