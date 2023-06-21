<template>
  <div class="bg-white">
    <div class="flex items-center">
      <UIButton
        icon-only
        variant="text"
        @click="menuButtonHandler"
      >
        <i v-if="isMainPageRoute" class="bi bi-list" />
        <i v-else class="bi bi-arrow-left" />
      </UIButton>

      <span>
        {{ headerStore.title }}
      </span>

      <div class="flex flex-col flex-grow items-end mr-2">
        <span class="h6">
          {{ $t('HP') }}: {{ userInfoStore.storeGetterUserCurrentHP }} / {{ userInfoStore.storeGetterUserMaxHP }}
        </span>

        <span class="h6">
          {{ $t('PW') }}: {{ userInfoStore.storeGetterUserCurrentPW }} / {{ userInfoStore.storeGetterUserMaxPW }}
        </span>
      </div>
    </div>

    <div class="flex justify-around">
      <UIButton
        v-for="(item) in bottomLinksArray"
        :key="item.link"
        :to="item.link"
        full-width
        variant="text"
      >
        {{ item.title }}
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ru from './index.i18n.ru.json'
import en from './index.i18n.en.json'
import { useLeftMenuStore } from '~/stores/leftMenu'
import { useHeaderStore } from '~/stores/header'
import { useUserInfoStore } from '~/stores/user'

/** STORE */
const leftMenuStore = useLeftMenuStore()
const userInfoStore = useUserInfoStore()
const headerStore = useHeaderStore()
const route = useRoute()
const router = useRouter()
const { t: $t } = useI18n({ messages: { en, ru } })

/** COMPUTED */
const bottomLinksArray = computed<{
  title: string
  link: string
}[]>(() => [ // TODO: move to routes.ts
  {
    title: $t('Personage'),
    link: '/personage'
  },
  {
    title: $t('Skills'),
    link: '/personage/skills'
  },
  {
    title: $t('Bag'),
    link: '/personage/bag'
  }
])

const isMainPageRoute = computed(() => route.fullPath === '/')

/** METHODS */
const menuButtonHandler = (): void => {
  if (isMainPageRoute.value) {
    leftMenuStore.toggle()
  } else {
    router.push('/')
  }
}
</script>
