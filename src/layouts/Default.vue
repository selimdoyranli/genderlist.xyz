<template lang="pug">
.layout.default-layout
  // App Preloader
  AppPreloader

  // App Header
  AppHeader

  // Layout Main
  .layout__inner
    .router-view
      slot
</template>

<style lang="scss" src="./styles/Default.layout.scss"></style>
