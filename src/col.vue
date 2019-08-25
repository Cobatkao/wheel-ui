<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'wheel-column',
    props: {
      span: {
        type: [Number, String]
      }
    },
  }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;

        /*生成24个 .col-24 类*/
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>