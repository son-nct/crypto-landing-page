<script setup lang="ts">
defineProps<{
  type: 'string'
}>()
</script>

<template lang="pug">
button.large-btn.flex.items-center(v-if='type === `large`' type="button")
    slot    
button.small-btn.flex.items-center(v-else-if='type === `small`' type="button")
    slot
button.outline-btn.w-fit(v-else-if='type === `outline`'  type="button")
    slot
button.outline-btn-gray(v-else-if='type === `outline-gray`'  type="button")
    slot                                     
</template>

<style lang="scss" scoped></style>
