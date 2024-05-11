<template lang="pug">
NuxtLink.app-logo(:to="localePath('/')" :title="$t('app.name')")
  img.app-logo__img(src="@/assets/media/core/logo/genderlist.xyz-logo.png" alt="genderlist.xyz" width="auto" height="42px")
  span.app-logo__title {{ $t('app.name') }}
</template>

<style lang="scss" src="./AppLogo.component.scss"></style>
