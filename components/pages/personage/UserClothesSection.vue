<template>
  <div>
    <div
      v-for="(item, index) in clothes"
      :key="`clothes ${index}`"
      :class="[
        'inventory__item',
        item.styleClass
      ]"
      @click="showItemsToWear(item.title, item.type)"
      @contextmenu="handleRightClick(item.title, $event)"
    >
      <img
        v-if="!userEquip[item.title]"
        :src="`/images/items/default/char_${item.type || item.title}.gif`"
        :alt="item.type || item.title"
      >

      <img
        v-if="userEquip[item.title]"
        :src="getItemById(userEquip[item.title]).img"
        :alt="item.type || item.title"
      >
    </div>

    <UIPopup
      v-if="dialogVisible"
      :title="dialogTitle"
      @close="closeDialog"
    >
      <BlockClothesItem
        v-for="(item, index) in dialogInnerItems"
        :key="`dialog item ${index}`"
        :item="item"
        :current-active-title="currentActive.title"
        @close="closeDialog"
      />

      <div
        v-if="!dialogInnerItems.length"
        class="mt-2"
      >пусто...</div>
    </UIPopup>
  </div>
</template>

<script setup lang="ts">
import UserItemsMixin from '~/components/mixins/user-items'
import { armorNameMatch } from '~/helpers/paramsNames'
import { ref, toRefs, computed, withDefaults } from "vue";
import { ClientEquipmentItem, BackEquipmentMultitypes } from '~/typings/equipments-items'
import { getItemById } from '~/backendInfo/items'
import { WearingInfo } from '~/helpers/personageWearingInfo'
import { EquipedTypes } from '~/typings/store'
import { useUserInfoStore } from '~/stores/user';

interface Props {
  clothes: WearingInfo[]
}
const props = withDefaults(defineProps<Props>(), {
  clothes: null
})
const { clothes } = props

const { allUserItemsExpanded } = UserItemsMixin()

const dialogVisible = ref(false);
const dialogTitle = ref('title');
const dialogInnerItems = ref<ClientEquipmentItem[]>([]);
const currentActive = ref<{
  type: EquipedTypes
  title: EquipedTypes
}>({
  type: null,
  title: null,
});

const isMultiType = computed(() => currentActive.value.type !== currentActive.value.title)
const typeToNameMatch = computed(() => armorNameMatch)

const userInfoStore = useUserInfoStore()
const userEquip = computed(() => userInfoStore.equipped)

const closeDialog = (): void => {
  dialogVisible.value = false
}

const dressTextToMultiType = (itemId: string): string => {
  let outputText = ''
  Object.keys(userEquip.value).forEach((objKey) => {
    if (userEquip.value[objKey] === itemId) {
      outputText = `( снимется со слота ${objKey} )`
    }
  })
  return outputText
}

const handleRightClick = (title: EquipedTypes, evt: Event): void => {
  evt.preventDefault()
  userInfoStore.storeActionUndressItem(title)
}

const showItemsToWear = (title: EquipedTypes, type: EquipedTypes = title): void => {
  currentActive.value.type = type
  currentActive.value.title = title

  // Hide other types
  dialogInnerItems.value = allUserItemsExpanded.value.filter(el => el.type === type)

  // Hide current type which is already weared
  dialogInnerItems.value = dialogInnerItems.value.filter(el => {
    const isElWear = Object.values(userEquip.value).includes(el.id)
    const isElWearToCurrentTitle = userEquip.value[title] === el.id
    if (isElWear && !isElWearToCurrentTitle) return false
    return true
  })

  dialogInnerItems.value = dialogInnerItems.value.map((item) => {
    const equippedIn = (userEquip.value[currentActive.value.title] === item.id) ? currentActive.value.title : null
    return {
      ...item,
      equippedIn,
    }
  })
  dialogTitle.value = typeToNameMatch.value[type]
  dialogVisible.value = true
}
</script>

<style lang="scss">
.personage-page {
  .inventory {
    width: 30%;
    max-width: 75px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    &--left {
      justify-content: flex-end;
      .inventory__item {
        text-align: right;
      }
    }
    &--right {
      justify-content: flex-start;
      .inventory__item {
        text-align: left;
      }
    }
    &--avatar {
      width: 40%;
      max-width: 105px;
      img {
        max-width: 100%;
        max-height: 210px;
      }
    }
    &--w100 {
      width: 100%;
      max-width: 100%;
      flex-direction: row;
      img {
        background: #dedede;
      }
      .inventory__item {
        width: auto;
      }
    }
    &__item {
      height: 35px;
      width: 100%;
      text-align: center;
      left: 0;
      font-size: 0;
      margin: 0;
      padding: 0;
      border: none;
      max-width: 70px;
      row-gap: 0;
      column-gap: 0;
      img {
        max-width: 100%;
        max-height: 100%;
        background: #dedede;
      }
      &--ring {
        width: 35px;
        &--grow {
          flex-grow: 1;
        }
      }
      &--helmet, &--boots {
        img {
          width: 70px;
        }
      }
      &--double {
        height: 70px;
      }
      &--triple {
        height: 105px;
      }
    }
    &__runes {
      display: flex;
    }
  }
}
</style>
