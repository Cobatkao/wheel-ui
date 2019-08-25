<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'row'
  }
</script>

<style scoped lang="scss">
    .row {
        display: flex;

        > div:nth-child(odd) {
            background-color: #D8D827;
        }

        > div:nth-child(even) {
            background-color: #EBEB14;
        }
    }
</style>