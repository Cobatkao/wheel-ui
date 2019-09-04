<template>
    <div class="co-tabs__body">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'wheel-tabsbody',
    inject: ['eventBus'],
  }
</script>

<style scoped lang="scss">
    .co-tabs__body {
        padding: 25px 20px;
        background-color: #f8f8f8;
    }
</style>