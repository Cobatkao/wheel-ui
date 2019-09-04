<template>
    <div class="co-tabs__head co-tab__horizontal-line">
        <slot></slot>
        <div class="extra_button_wrapper">
            <slot name="extra_button"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'wheel-tabshead',
    inject: ['eventBus'],
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