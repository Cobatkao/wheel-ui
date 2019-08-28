<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "wheel-content",
    data() {
      return {}
    },
    components: {}
  }
</script>

<style scoped lang="less">
    .content {
        flex-grow: 1;
    }
</style>
