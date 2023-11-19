<script setup lang="ts">
defineProps<{
  type: 'string'
}>()
</script>

<template lang="pug">
button.large-btn.flex.items-center(v-if='type === `large`')
    slot    
button.small-btn.flex.items-center(v-else-if='type === `small`')
    slot
button.outline-btn.w-fit(v-else-if='type === `outline`')
    slot                                 
</template>

<style lang="scss" scoped></style>
