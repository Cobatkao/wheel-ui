<template>
    <div class="co-tabs">
        <slot></slot>
    </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'wheel-tabs',
    props: {
      selected: {
        type: String,
        required: true,
      },
      direction: {
        type: String,
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'wheel-tabshead') {
          vm.$children.forEach((item) => {
            if (item.$options.name === 'wheel-tabsitem' && item.name === this.selected) {
              // tabs mounted后通知给所有子孙组件 当前选中的tab 并传递选中item名字和vue对象
              this.eventBus.$emit('update:selected', this.selected, item)
            }
          })
        }
      })
    }
  }
</script>

<style scoped lang="scss">
    .co-tabs {

    }
</style>