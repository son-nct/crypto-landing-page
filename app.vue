<script setup>
const route = useRoute()
</script>

<template lang="pug">
NuxtLayout
  NuxtPage(:key='route.fullPath')
</template>

<style lang="scss" scoped></style>
