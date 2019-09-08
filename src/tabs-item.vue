<template>
    <div
            class="co-tabs__item"
            @click.prevent="onClick"
            :class="{'co-tab--active': isActive, 'co-tab--disabled': disabled}"
            :data-name="name"
    >
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'wheel-tabsitem',
    data() {
      return {
        isActive: false,
      }
    },
    props: {
      // 禁用item
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String || Number,
        required: true
      }
    },
    inject: ['eventBus'],
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.isActive = name === this.name;
        })
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {return}
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }z
</script>

<style scoped lang="scss">
    @import '../common.scss';

    .co-tabs__item {
        /*flex-grow: 1;*/
        flex-shrink: 0;
        padding: 0 1em;
        color: #7d7e80;
        cursor: pointer;
        font-size: 14px;
        height: 100%;
        display: inline-flex;
        align-items: center;

        > .c-icon {
            margin-right: 3px;
        }

        &.co-tab--active {
            color: rgb(145, 184, 89);
            background: #ffffff;
            font-weight: bold;
        }

        &.co-tab--disabled {
            cursor: not-allowed;
            color: $disabledColor;
        }
    }
</style>