<template>
  <div>
    {{ $t('Hello world') }}
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ru from './index.i18n.ru.json';
import en from './index.i18n.en.json';

/** STORE */
const { t: $t } = useI18n({ messages: { en, ru }});

</script>

<style module lang="scss">
</style>
