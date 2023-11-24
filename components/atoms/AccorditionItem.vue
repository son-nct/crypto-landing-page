<script setup lang="ts">
import type { Accordition } from '~/types/accordition'
const props = defineProps<{
    accordition: Accordition
}>()

const emit = defineEmits(['toggleActive'])

const toggleActive = () => {
    emit('toggleActive', {
        id: props.accordition.id,
        isOpen: !props.accordition.isOpen
    })
}

const active = computed(() => ({
    'active': props.accordition.isOpen
}))
</script>

<template lang="pug">
div.faq(@click='toggleActive' ref='faq' :class='active')
    div.question
        h3 {{  accordition.title }}
    div.answer
        p {{ accordition.description }}
</template>



<style lang="scss" scoped>
.faq {
    @apply max-w-[700px] mt-8 pb-4 border-t border-primary cursor-pointer;

    .question {
        @apply flex justify-between items-center;

        h3 {
            @apply text-xl text-white font-ultraSemiBold mt-6;
        }
    }

    &.active {
        .question {
            @apply flex justify-between items-center;

            h3 {
                @apply text-primary;
            }
        }

        .answer {
            @apply max-h-[300px];
            animation: fade 1s ease-in-out;
        }
    }

    .answer {
        @apply max-h-0 overflow-hidden;
        transition: max-height 1.3s ease;
        p {
            @apply pt-4 text-base text-lightGray;
        }
    }
}

@keyframes fade {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>