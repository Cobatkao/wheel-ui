<template>
    <div class="co-tabs__item" @click.prevent="xxx" :class="{'co-tab--active': isActive}">
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
        this.isActive = name === this.name;
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
    .co-tabs__item {
        /*flex-grow: 1;*/
        flex-shrink: 0;
        padding: 0 1em;
        color: #7d7e80;
        cursor: pointer;
        font-size: 14px;

        &.co-tab--active {
            color: #323233;
        }
    }
</style>