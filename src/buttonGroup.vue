<template>
    <div class="c-button-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "buttonGroup",
    mounted () {
      //  验证c-button-group子元素类型
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();
        if (name !== 'button') {
          console.warn(`请注意，c-button-group的直接子节点类型必须为 button，但你给出的是 ${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .c-button-group {
        display: inline-block;
        font-size: 0;

        > .c-button {
            margin: -1px;
            border-radius: 0;

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 9;
            }
        }
    }
</style>
