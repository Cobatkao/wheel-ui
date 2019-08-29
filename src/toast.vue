<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'wheel-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 3
      }
    },
    mounted() {
      // if (this.autoClose) {
      //   setTimeout(() => {
      //       this.close()
      //   }, this.autoCloseDelay * 1000)
      // }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$destroy() // 取消绑定的事件
      }
    }
  }
</script>

<style scoped lang="scss">

    @import '../common.scss';

    .toast {
        display: inline-flex;
        align-items: center;
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        height: $toast-height;
        font-size: $toast-fontSize;
        line-height: 1.8;
        color: #ffffff;
        padding: 0 16px;
        background: $toast-bgColor;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        border-radius: 3px;
    }
</style>