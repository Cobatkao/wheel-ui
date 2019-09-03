<template>
    <div class="tabs-item" @click.prevent="xxx" :class="{active: isActive}">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'wheel-tabsitem',
    data() {
      return {
        isActive: false,
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String || Number,
        required: true
      }
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
    .tabs-item {
        /*flex-grow: 1;*/
        flex-shrink: 0;
        padding: 0 1em;

        &.active {
            background: #83b582;
        }
    }
</style>