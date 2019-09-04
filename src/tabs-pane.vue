<template>
    <div class="co-tabs__pane" :class="{'co-pane--active': isActive}">
        <slot></slot>
    </div>
</template>

    <script>
  export default {
    name: 'wheel-tabspane',
    data() {
      return {
        isActive: false
      }
    },
    props: {
      name: {
        type: String || Number,
        required: true
      },
    },
    inject: ['eventBus'],
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.isActive = name === this.name;
      })
    },
  }
</script>

<style scoped lang="scss">
    .co-tabs__pane {
        display: none;

        &.co-pane--active {
            display: block;
        }
    }
</style>