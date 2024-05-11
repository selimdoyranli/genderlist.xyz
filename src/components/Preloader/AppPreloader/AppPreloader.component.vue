<template lang="pug">
.app-preloader(v-if="preloaderStore.preloader.isVisible")
  .app-preloader__inner
    AppLogo.app-preloader__logo
    p.app-preloader__message {{ $t('general.loading') }} ...

  .app-preloader__bar
</template>

<script lang="ts" setup>
const preloaderStore = usePreloaderStore()

onMounted(async () => {
  await nextTick()

  setTimeout(() => {
    preloaderStore.preloader.hide()
  }, 2000)
})
</script>

<style lang="scss" src="./AppPreloader.component.scss"></style>
