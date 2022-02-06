<template>
  <div>
    <div
      :class="[
        $style.header,
        $style.borderBottom,
        'py-3 pl-2 flex align-center h5 font-bold cursor-pointer',
        { [$style.collapsed]: isCollapsed }
      ]"
      @click="handleClick"
    > {{ title }}</div>

    <transition name="fade">
      <div v-if="isCollapsed" :class="[$style.borderBottom, $style.bottom]">
        <div
          :class="['pb-3 pl-2 h5']"
        >
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
interface Props {
  title?: string
  innerText?: string
}
const collapseProps = withDefaults(defineProps<Props>(), {
  title: 'title',
  innerText: null
})

const isCollapsed = ref(false)

const handleClick = () => {
  isCollapsed.value = !isCollapsed.value
}

/**
 * TODO:
 * https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js
 * https://vuejs.org/v2/guide/transitions.html
 * https://element.eleme.io/#/en-US/component/collapse
 *
 * + fix when nothing to collapse
 * + add icon: '>'
 */
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
</style>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: 1s;
}

.fade-enter-active, .fade-leave-to {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.fade-enter-to, .fade-leave-active {
  height: 40px;
}
</style>