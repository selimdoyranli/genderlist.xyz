<template lang="pug">
.layout.home-layout
  // App Preloader
  AppPreloader

  // App Header
  AppHeader

  // Layout Main
  .layout__inner
    .router-view
      slot
</template>

<style lang="scss" src="./styles/Home.layout.scss"></style>
