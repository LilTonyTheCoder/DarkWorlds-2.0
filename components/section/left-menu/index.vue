<template>
  <transition :duration="500" name="leftSlider">
    <div v-if="leftMenuStore.isOpen" class="left-menu">
      <div
        class="left-menu__shadow cursor-pointer"
        @click="leftMenuStore.toggle"
      />

      <div class="left-menu__inner inner">
        <div class="inner__row row row--info">
          <div class="row--info__avatar">
            <img
              :src="userInfoStore.common[BASE_INFO.AVATAR]"
              alt=""
            >
          </div>

          <div class="row--info__text">
            <div class="row--info__name">
              {{ userInfoStore.common[BASE_INFO.NAME] }}
            </div>

            <div class="row--info__lvl">
              {{ userInfoStore.common[BASE_INFO.CLASS] }} {{ userInfoStore.common[BASE_INFO.LVL] }} уровня
            </div>
          </div>
        </div>

        <div class="inner__top-links">
          <div
            v-for="(item, index) in topLinks"
            :key="index"
            class="inner__row row"
            @click="itemHandler(item.href)"
          >
            <div class="row__icon">
              <i :class="item.icon" />
            </div>

            <div class="row__title">
              {{ item.title }}
            </div>
          </div>
        </div>

        <div class="inner__middle-links">
          <div
            v-for="(item, index) in middleLinks"
            :key="index"
            class="inner__row row"
            @click="itemHandler(item.href)"
          >
            <div class="row__icon">
              <i :class="item.icon" />
            </div>

            <div class="row__title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { BASE_INFO } from '~/constants/creaturesParams'
import { useLeftMenuStore } from '~/stores/leftMenu'
import { useUserInfoStore } from '~/stores/user';

const leftMenuStore = useLeftMenuStore()

const userInfoStore = useUserInfoStore()
const router = useRouter()

type LinksArray = {
    title: string
    icon: string
    href: string
}

const topLinks: LinksArray[] = [
  { title: 'Персонаж', icon: 'bi bi-person', href: '/personage' },
  { title: 'Умения', icon: 'bi bi-bookmark', href: '/personage/skills' },
  { title: 'Сумка', icon: 'bi bi-bag', href: '/personage/bag' },
]

const middleLinks: LinksArray[] = [
  { title: 'Локация', icon: 'bi bi-geo-alt', href: '/' },
  { title: 'Задания', icon: 'bi bi-journal-text', href: '#' },
  { title: 'Друзья', icon: 'bi bi-person-check', href: '#' },
  { title: 'Обмен', icon: 'bi bi-arrow-down-up', href: '#' },
  { title: 'История сражений', icon: 'bi bi-clock-history', href: '#' },
]

const itemHandler = (href: string): void => {
  router.push(href)
  leftMenuStore.toggle()
}
</script>

<style lang="scss">
.left-menu {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &__shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,.7);
    opacity: 1;
  }
  &__inner {
    transform: translateX(0%);
  }
  .inner {
    background: #fff;
    position: absolute;
    z-index: 2;
    width: 80%;
    height: 100%;
    padding-top: 4px;
    &__top-links, &__middle-links {
      border-bottom: 1px solid #eee;
    }
    .row {
      height: 42px;
      padding-left: 5%;
      padding-right: 5%;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:first-child {
        margin-top: 8px;
      }
      &:last-child {
        margin-bottom: 8px;
      }
      &--info {
        height: 60px;
        margin-top: 0 !important;
        &__avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-right: 6%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        &__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        &__name {
          display: block;
          margin-bottom: 8px;
        }
        &__lvl {
          color: #909399;
          font-size: 14px;
        }
      }
      &__icon {
        font-size: 20px;
        margin-right: 12%;
      }
      &__title {
        font-size: 14px;
      }
    }
  }
}
</style>

<style lang="scss">
.leftSlider-enter-active .left-menu__inner,
.leftSlider-leave-active .left-menu__inner {
  transition: transform 0.5s ease;
}

.leftSlider-enter-from .left-menu__inner,
.leftSlider-leave-to .left-menu__inner {
  transform: translateX(-100%);
}

.leftSlider-enter-active .left-menu__shadow,
.leftSlider-leave-active .left-menu__shadow {
  transition: opacity 0.5s ease;
}

.leftSlider-enter-from .left-menu__shadow,
.leftSlider-leave-to .left-menu__shadow {
  opacity: 0;
}
</style>
