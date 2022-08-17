<template>
  <div :class="[$style.defaultLayout, 'flex justify-center']">
    <div :class="[$style.defaultLayout__wrapper, 'relative']">
      <SectionHeader />

      <div :class="[$style.defaultLayout__mainSection, 'relative bg-white']">
        <slot />
      </div>

      <SectionLeftMenu />

      <SectionChat />

      <div id="popup-target" />
    </div>
  </div>
</template>

<script setup lang="ts">
useMeta({
  link: [
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css',
      rel: "stylesheet",
    },
    {
      href: '/favicon.png',
      rel: "icon",
      type: "image/x-icon"
    },
  ]
})
</script>

<style module lang="scss">
.defaultLayout {
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;

  &__wrapper {
    max-width: 575px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  &__mainSection {
    overflow-y: scroll;
    height: 76%;
    padding-top: 10px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  }
}
</style>
