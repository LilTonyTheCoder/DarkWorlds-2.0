<template>
  <div
    :class="[
      'cursor-pointer flex align-center justify-center',
      $style.button,
      { [$style.w100]: fullWidth},
      { [$style.noBorder]: variant === 'text'},
      { [$style.iconOnly]: iconOnly},
      { [$style.sizeM]: size === 'M'},
      { 'h5': size === 'M'},
      { [$style.sizeS]: size === 'S'},
      $style[variant]
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

interface Props {
  to?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'text',
  iconOnly?: boolean
  size?: 'L' | 'M' | 'S'
}
const props = withDefaults(defineProps<Props>(), {
  to: null,
  fullWidth: false,
  variant: 'primary',
  iconOnly: false,
  size: 'L'
})
const { to, fullWidth, variant, iconOnly, size } = props

const router = useRouter();
const emit = defineEmits(['click'])

const handleClick = () => {
  if (to) {
    router.push(to)
  } else {
    emit('click')
  }
}
</script>

<style lang="scss" module>
.button {
  border: 1px solid #dcdfe6;
  height: 40px;
  border-radius: 5px;
  padding: 0 23px;
  width: fit-content;
  color: #565656;
  background: #fff;

  &:hover, &.secondary {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &.noBorder {
    border-color: transparent;
  }

  &.iconOnly {
    width: 40px;
    padding: 0;
  }

  &.sizeM {
    height: 32px;

    &.iconOnly {
      width: 32px;
    }
  }

  &.sizeS {
    height: 20px;

    &.iconOnly {
      width: 20px;
    }
  }
}
.w100 {
  width: 100%;
}
</style>