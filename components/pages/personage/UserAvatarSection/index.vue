<template>
  <div
    :class="$style.wrapper"
  >
    <img
      :src="userInfoStore.common[BASE_INFO.AVATAR]"
      alt="current user avatar"
      class="cursor-pointer"
      @click="toggleAvatarsPopup"
    >

    <UIPopup
      v-if="dialogVisible"
      :title="$t('Avatar choosing')"
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
            :alt="$t('choose avatar')"
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
import { useI18n } from 'vue-i18n';
import ru from './index.i18n.ru.json';
import en from './index.i18n.en.json';

/** STORE */
const userInfoStore = useUserInfoStore()
const { t: $t } = useI18n({ messages: { en, ru }});

/** DATA */
const dialogVisible = ref(false);

/** COMPUTED */
const dialogInnerItems = computed<string[]>(() => {
  const avatarsUrls = userInfoStore.settings.availableAvatars.map((el) => {
    return `/images/avatars/${userInfoStore.settings.gender}${el}`
  })
  return avatarsUrls
})

/** METHODS */
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
