<template>
    <div class="wrapper" :class="toastPositionClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHTML"></slot>
                <div v-else v-html="$slots.default"></div>
            </div>
            <template v-if="closeButton">
                <span class="close_line" ref="close"></span>
                <span class="close_text" v-if="closeButton.closeText" @click="tapClose">{{ closeButton.closeText }}</span>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'wheel-toast',
    props: {
      autoClose: { // 接收数字表示delay时间、或false表示关掉自动关闭
        type: [Boolean, Number],
        default: 3,
        validator (value) {
          return value === false || typeof value === 'number'
        }
      },
      closeButton: {
        type: Object,
        // default() {
        //   return {
        //     closeText: 'Close Me',
        //     callback: undefined
        //   }
        // }
      },
      enableHTML: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'middle',
        validator(val) {
          return ['top', 'middle', 'bottom'].indexOf(val) !== -1
        }
      }
    },
    computed: {
      toastPositionClasses() {
        return [`position-${this.position}`]
      }
    },
    mounted() {
      this.updateLineStyle()
      this.execAutoClose()
    },
    methods: {
      updateLineStyle() {
        this.$nextTick(() => {
          this.$refs.close.style.height = this.$refs.toast.getBoundingClientRect().height
        })
      },
      execAutoClose() {
        this.autoClose && setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      },
      close() { // 移除并销毁组件（解绑事件等等 ）
        this.$el.remove()
        this.$emit('beforeclose')
        this.$destroy()
      },
      tapClose() {
        // 关闭时执行用户自定义回调
        // 如果有回调函数就执行，没有就不执行
        this.closeButton && (typeof this.closeButton.callback === 'function') && this.closeButton.callback(this)
        this.close() // 移除并销毁组件
      }
    }
  }
</script>

<style scoped lang="scss">

    @import '../common.scss';
    
    @keyframes slide-up {
        from {
            opacity: 0;
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $toast-animation;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

            .toast {
                animation: fade_in $toast-animation;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $toast-animation;
            }
        }
    }

    .toast {
        display: inline-flex;
        align-items: center;
        min-height: $toast-height;
        font-size: $toast-fontSize;
        line-height: 1.8;
        color: #ffffff;
        padding: 0 16px;
        background: $toast-bgColor;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        border-radius: 5px;

        .message {
            max-width: 420px; /*默认最大宽度*/
            padding: 8px 0;
        }

        .close_line {
            border-left: 1px solid #ffffff;
            margin-left: 10px;
            margin-right: 10px;
        }

        .close_text {
            color: #ffffff;
            font-size: 14px;
            flex-shrink: 0;
        }
    }
</style>