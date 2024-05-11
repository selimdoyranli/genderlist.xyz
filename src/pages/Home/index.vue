<template lang="pug">
.page.home-page
  .container
    .page-head
      h1.page-head__title {{ $t('app.slogan') }}
      p.page-head__description {{ $t('app.description') }}

    GenderList
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home'
})
</script>

<style lang="scss" src="./Home.page.scss"></style>
