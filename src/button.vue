<template lang="html">
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <c-icon v-if="icon && !loading" class="icon" :name="icon"></c-icon>
        <c-icon class="loading" v-if="loading" name="loading"></c-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  import '../common.scss';

  export default {
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(val) {
          return val === "left" || val === "right";
        }
      }
    }
  }
</script>

<style lang="scss">

    @keyframes spin {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    }

    .c-button {
        outline: none;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        // 默认图标为左
        &.icon-left {
            > .icon {
                order: 1;
                margin-right: .1em;
            }
            > .content {
                order: 2;
            }
        }
        // 传值后图标为右
        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
            > .content {
                order: 1;
            }
        }

        > .loading {
            animation: spin 2s linear infinite;
        }
    }
</style>
