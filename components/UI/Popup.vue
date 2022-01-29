<template>
  <teleport to="#popup-target">
    <div>
      <div
        :class="[$style.shadow, 'absolute cursor-pointer w-100 h-100']"
        @click="handleClose"
      />

      <div :class="[$style.dialog, 'absolute w-100 bg-white']">
        <div class="py-3 px-5 h4 font-bold relative">
          {{ title }}

          <div
            :class="['absolute cursor-pointer', $style.closeButton]"
            @click="handleClose"
          >
            <i class="bi bi-x-lg" />
          </div>
        </div>

        <div class="px-5">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: null,
})
const { title } = props

const emit = defineEmits(['close'])

onMounted(() => {
  document.addEventListener("keyup", setKeyPressToClose)
})

onBeforeUnmount(() => {
  document.removeEventListener("keyup", setKeyPressToClose)
})

const handleClose = (): void => {
  emit('close')
}

const setKeyPressToClose = (event: KeyboardEvent) => {
  if (event.keyCode === 27 || event.keyCode === 13) handleClose()
}
</script>

<style lang="scss" module>
.shadow {
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.7);
}
.dialog {
  z-index: 110;
  min-height: 50vh;
  top: 10%;
  left: 0%;
  cursor: default;
  max-height: 80%;
  overflow: scroll;
}

.closeButton {
  right: 20px;
  top: 10px;
}
</style>
