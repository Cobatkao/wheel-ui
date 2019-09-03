<template>
    <div class="tabs-pane" :style="{display: inactive}" :class="{active: isActive}">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'wheel-tabspane',
    data() {
      return {
        isActive: false,
        inactive: 'none'
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
        if (name === this.name) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      })
    },
  }
</script>

<style scoped lang="scss">
    .tabs-pane {

        &.active {
            display: block !important;
        }
    }
</style>