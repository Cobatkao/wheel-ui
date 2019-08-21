<template>
    <svg class="c-icon">
        <use :xlink:href="`#icon-${name}`" :fill="`${iconColor}`"></use>
    </svg>
</template>

<script>
  export default {
    name: "icon",
    props: ['name', 'iconColor']
  }
</script>

<style lang="scss" scoped>
    .c-icon {
        display: inline-block;
        vertical-align: middle;
        width: 1.3em;
        height: 1.3em;
        color: #333;
    }
</style>
