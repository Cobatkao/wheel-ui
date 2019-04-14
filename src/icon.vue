<template>
    <svg class="c-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
  export default {
    name: "icon",
    props: ['name']
  }
</script>

<style lang="scss" scoped>
    .c-icon {
        width: 1em;
        height: 1em;
        color: #333;
    }
</style>
