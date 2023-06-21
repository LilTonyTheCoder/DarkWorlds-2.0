<template>
  <div class="main-chat">
    <div
      v-for="line in chatStore.messages"
      :key="line.text"
    >
      {{ line.time }} <b>{{ line.name }}:</b> {{ line.text }}
    </div>

    <div class="main-chat__release">
      v {{ headerStore.gameVersion }}
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { useHeaderStore } from '~/stores/header'
import { useChatStore } from '~/stores/chat'

export default {
  name: 'SectionChat',

  computed: {
    ...mapStores(useHeaderStore, useChatStore)
  }
}
</script>

<style lang="scss">
.main-chat {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: -1;
  font-size: 14px;
  padding: 0 1%;

  &__release {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 7px 12px;
    background: #fff;
    border: 1px dashed #848484;
  }
}
</style>
