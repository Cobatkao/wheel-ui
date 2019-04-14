<template lang="html">
    <button class="c-button">
      <svg class="icon">
        <use xlink:href="#isetting"></use>
      </svg>
      默认按钮
    </button>
</template>

<script>
    import '../common.scss';
    export default {

    }
</script>

<style lang="scss" scoped>

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
