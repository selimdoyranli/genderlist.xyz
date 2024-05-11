<template lang="pug">
header.header.app-header(:class="[revealClass]")
  AppLogo

  .app-header__actions
    .app-header-action-item
      DropdownMenu.language-dropdown-menu(with-dropdown-closer direction="right" :overlay="false")
        template(#trigger)
          VsButton(color="dark" size="small" active)
            AppIcon.me-0.me-lg-1(name="prime:language")
            span.d-none.d-lg-inline-block {{ $i18n.localeProperties.title }}
            AppIcon.ms-1(name="prime:caret-down")
        template(#body)
          li.language-dropdown-menu-item(dropdown-closer @click="$i18n.setLocale('en')")
            span.language-dropdown-menu-item__title English
          li.language-dropdown-menu-item(dropdown-closer @click="$i18n.setLocale('de')")
            span.language-dropdown-menu-item__title Deutsch
          li.language-dropdown-menu-item(dropdown-closer @click="$i18n.setLocale('nl')")
            span.language-dropdown-menu-item__title Dutch
          li.language-dropdown-menu-item(dropdown-closer @click="$i18n.setLocale('tr')")
            span.language-dropdown-menu-item__title Türkçe

    .app-header-action-item
      VsButton(color="secondary" size="small" active @click="isOpenCreditsDialog = true")
        AppIcon(name="charm:heart")
        span.color-text-02.d-none.d-lg-inline-block.ms-0.ms-lg-1 Donate

  // App Credits Dialog
  AppCreditsDialog(:is-open="isOpenCreditsDialog" @on-close="isOpenCreditsDialog = false")
</template>

<script lang="ts" setup>
import DropdownMenu from 'v-dropdown-menu'
import '../../../node_modules/v-dropdown-menu/dist/vue3/v-dropdown-menu.css'

const baseClassName = 'app-header'

const isScrolledWindow = ref(false)

const handleScroll = () => {
  const scrollThreshold = 64
  isScrolledWindow.value = window.scrollY > scrollThreshold
}

const isOpenCreditsDialog = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const revealClass = computed(() => {
  return isScrolledWindow.value ? `${baseClassName}--reveal` : null
})
</script>

<style lang="scss" src="./AppHeader.component.scss"></style>
