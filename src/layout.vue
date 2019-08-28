<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "wheel-layout",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="less">
    .layout {
        display: flex;
        flex-direction: column;
        border: 1px solid red;
    }
</style>
