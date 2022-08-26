<template>
  <div>
    <div
      :class="[
        $style.header,
        $style.borderBottom,
        'py-3 pl-2 flex items-center h5 font-bold cursor-pointer relative noselect',
        { [$style.collapsed]: isCollapsed }
      ]"
      @click="handleClick"
    >
      {{ title }}

      <div
        v-if="hasAnyInnerContent"
        :class="[
          $style.arrow,
          'absolute flex items-center',
          { [$style.rotated]: isCollapsed }
        ]"
      >
        <i class="bi bi-chevron-right" />
      </div>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        v-if="isCollapsed"
        :class="[$style.borderBottom, $style.bottom]"
      >
        <div :class="['pb-3 pl-2 h5']">
          <span
            v-if="innerText"
            v-text="innerText"
          />

          <slot v-else />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave } from './CollapseTransition'
import { useSlots } from 'vue'

interface Props {
  title?: string
  innerText?: string
}

/** PROPS */
const collapseProps = withDefaults(defineProps<Props>(), {
  title: 'title',
  innerText: null
})

/** DATA */
const isCollapsed = ref(false)

/** COMPUTED */
const hasAnyInnerContent = computed(() => {
  return !!useSlots().default()[0].children.length || !!collapseProps.innerText
})

/** METHODS */
const handleClick = () => {
  if (!hasAnyInnerContent.value) return

  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" module>
.header {
  transition: .3s;
}
.bottom {
  overflow: hidden;
}
.borderBottom {
  border-bottom: 1px solid #eee;
}
.collapsed {
  border-color: transparent;
}
.arrow {
  right: 10px;
  top: 0;
  height: 100%;
  transition: .3s;

  &.rotated {
    transform: rotate(90deg);
  }
}
</style>
