<template lang="html">
    <button class="c-button">默认按钮</button>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import '../common.scss'

    .c-button {
        outline: none;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }
</style>
