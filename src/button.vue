<template lang="html">
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <!--Loading和Icon不能同时出现-->
        <c-icon v-if="icon && !loading" class="icon" :name="`${icon}`" :iconColor="`${color}`"></c-icon>
        <!--Loading的icon-->
        <c-icon class="loading" :class="{[`icon-${iconPosition}`]: true}" v-if="loading" name="loading"></c-icon>
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
      color: {
        type: String,
        default: "#333"
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: "left", // 接收默认值
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
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        > .content {
            order: 2;
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

        > .icon-left, .icon-right {
            animation: spin 2s linear infinite;
        }

        > .icon-left.loading {
            order: 1;
            margin-right: .1em;
            margin-left: 0;
        }

        > .icon-right.loading {
            order: 2;
            margin-left: .1em;
            margin-right: 0;
        }
    }
</style>
