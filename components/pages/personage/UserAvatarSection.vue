<template>
  <div
    :class="$style.wrapper"
  >
    <img
      :src="userCommon[BASE_INFO.AVATAR]"
      alt="current user avatar"
      class="cursor-pointer"
      @click="toggleAvatarsPopup"
    >

    <UIPopup
      v-if="dialogVisible"
      title="Выбор образа"
      @close="toggleAvatarsPopup"
    >
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in dialogInnerItems"
          :key="index"
          :class="[$style.popupImgItem, 'mb-2']"
        >
          <img
            :src="item"
            alt="выбрать аватар"
            class="cursor-pointer"
            @click="changeAvatar(item)"
          >
        </div>
      </div>
    </UIPopup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BASE_INFO } from '~/constants/creaturesParams'
import { useUserInfoStore } from '~/stores/user';

const dialogVisible = ref(false);

const userInfoStore = useUserInfoStore()
const userSettings = computed(() => userInfoStore.settings)
const userCommon = computed(() => userInfoStore.common)

const dialogInnerItems = computed<string[]>(() => {
  const avatarsUrls = userSettings.value.availableAvatars.map((el) => {
    return `/images/avatars/${userSettings.value.gender}${el}`
  })
  return avatarsUrls
})

const toggleAvatarsPopup = (): void => {
  dialogVisible.value = !dialogVisible.value
}

const changeAvatar = (avatarUrl: string): void => {
  userInfoStore.storeActionPutOnAvatar(avatarUrl)
  dialogVisible.value = false
}
</script>

<style lang="scss" module>
.wrapper {
  line-height: 0;
}

.popupImgItem {
  opacity: 0.5;
  transition: .3s;

  &:hover {
    opacity: 1;
  }
}
</style>
