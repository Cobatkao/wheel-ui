<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>

</style>