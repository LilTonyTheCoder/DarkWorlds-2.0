<template>
  <div class="main-page__wrapper">
    <div class="main-page__info info">
      <div class="info__map-wrapper">
        <div
          :style="{
            width: `${mapStore.oneBlockSize * 0.7}px`,
            height: `${mapStore.oneBlockSize * 0.7}px`,
          }"
          class="block__current-position"
        />

        <div
          class="info__map-inner"
          :style="[
            {height: `${(mapArray.length+1) * mapStore.oneBlockSize}px`},
            {marginTop: `${(userPosition[POSITIONS.Y] - mapArray.length/2) * -mapStore.oneBlockSize - 10}px`},
            {marginLeft: `${(userPosition[POSITIONS.X] - mapArray[0].length/2) * -mapStore.oneBlockSize - mapStore.oneBlockSize/2}px`}
          ]"
        >
          <div
            v-for="(row, rowIndex) in mapArray"
            :key="`rowIndex ${rowIndex}`"
            class="info__row"
            :style="`width: ${mapStore.oneBlockSize * row.length}px`"
          >
            <div
              v-for="(block, blockIndex) in row"
              :key="`blockIndex ${blockIndex}`"
              class="info__block block"
              :style="[
                {width: `${mapStore.oneBlockSize}px`},
                {height: `${mapStore.oneBlockSize}px`}
              ]"
            >
              <template v-if="block.area !== 'empty'">
                <div
                  :data-area-name="block.area"
                  class="block__border"
                />

                <img
                  v-if="areaIconMatch.get(block.area) !== 'no-image'"
                  :src="`/images/map/${areaIconMatch.get(block.area)}.png`"
                  alt=""
                  class="block__icon"
                >

                <template v-if="block.possibleMoves">
                  <div
                    v-if="block.possibleMoves.includes('b')"
                    class="block__no-border block__no-border--b"
                  />
                  <div
                    v-if="block.possibleMoves.includes('t')"
                    class="block__no-border block__no-border--t"
                  />
                  <div
                    v-if="block.possibleMoves.includes('l')"
                    class="block__no-border block__no-border--l"
                  />
                  <div
                    v-if="block.possibleMoves.includes('r')"
                    class="block__no-border block__no-border--r"
                  />
                </template>

                <template v-else>
                  <div class="block__no-border block__no-border--b" />
                  <div class="block__no-border block__no-border--t" />
                  <div class="block__no-border block__no-border--l" />
                  <div class="block__no-border block__no-border--r" />
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mapArray } from '~/backendInfo/map'
import { computed } from 'vue'
import { POSITIONS } from '~/constants/creaturesParams'
import { useMapStore } from '~/stores/map'
import { useUserInfoStore } from '~/stores/user';

const mapStore = useMapStore()

const areaIconMatch = {
  ground: 'no-image',
  star: 'star',
  shop: 'shop',
  port: 'port',
  library: 'library',
  circle: 'circle',
  'exclusive-shop': 'exclusive-shop',
  sword: 'sword',
  shield: 'shield',
  cleaning: 'cleaning',
  beer: 'beer',
  key: 'key',
  dollar: 'dollar',
  hat: 'hat',
  battle: 'battle',
  clothes: 'clothes',
  ring: 'ring',

  get(prop) {
    return this[prop] ? this[prop] : 'in-progress'
  },
}

const userInfoStore = useUserInfoStore();
const userPosition = computed(() => userInfoStore.position)
</script>

<style lang="scss">
.main-page {
  &__wrapper {
    .info {
      margin-bottom: 20px;
      .el-card__body {
        padding: 0;
      }
      &__title {
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: bold;
      }
      &__text {
        font-size: 12px;
        color: #eee;
      }
      &__map-wrapper {
        height: 240px;
        position: relative;
        overflow: hidden;
        background: #c1bcad;
      }
      &__map-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgb(193, 188, 173);
        padding: 10px;
        height: 300px;
        transition: .3s;
      }
      &__row {
        display: flex;
      }
      .block {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &__current-position {
          border-radius: 50%;
          background: rgba(255,255,255, .5);
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 10;
          transform: translate(-50%, -50%);
          filter: blur(4px);
        }
        &__icon {
          width: 50%;
          height: 50%;
        }
        &__border {
          position: absolute;
          width: 80%;
          height: 80%;
          border: 1px solid #000;
          top: 10%;
          left: 10%;
          border-radius: 5px;
        }
        &__no-border {
          background: #c1bcad;
          position: absolute;
          &--b {
            left: 33%;
            width: 33%;
            height: calc(20% + 2px);
            bottom: calc(-10% - 1px);
            border-left: 1px solid #000;
            border-right: 1px solid #000;
          }
          &--t {
            width: 33%;
            left: 33%;
            height: 2px;
            top: 10%;
          }
          &--l {
            height: 33%;
            top: 33%;
            width: calc(20% + 2px);
            left: calc(-10% - 1px);
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
          }
          &--r {
            height: 33%;
            top: 33%;
            right: 10%;
            width: 2px;
          }
        }
      }
    }
  }
}
</style>