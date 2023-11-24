<script setup lang="ts">
import type { Accordition } from '~/types/accordition'

const props = defineProps<{
    accorditionList: Accordition[]
}>()

const emit = defineEmits(['toggleActive'])

const toggleActive = (value: Accordition) => {
    emit('toggleActive', value)
}
</script>

<template lang="pug">
.w-full.h-full
    div(v-for='accordition in accorditionList' :key='accordition')
        AtomsAccorditionItem(:accordition='accordition' @toggle-active='toggleActive')
</template>



<style scoped>

</style>