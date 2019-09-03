<template>
    <div class="tabs">
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
      // tabs mounted后通知给所有子孙组件 当前选中的tab
      this.eventBus.$emit('update:selected', this.selected)
    }
  }
</script>

<style scoped lang="scss">

</style>