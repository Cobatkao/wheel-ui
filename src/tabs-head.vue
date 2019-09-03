<template>
    <div class="tabs-head">
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

    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;

        > .extra_button_wrapper {
            margin-left: auto;
        }
    }
</style>