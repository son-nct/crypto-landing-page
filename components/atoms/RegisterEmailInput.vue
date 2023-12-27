<script setup lang="ts">
import * as yup from 'yup'
const email = ref('')
const registerEmaiSchema = yup.object({
    email: yup
        .string()
        .min(5, '* Email must be at least 5 characters')
        .max(254, '* Email must be at most 254 characters')
        .email('* Email must be a valid email')
        .label('Email')
})

const registerNewEmail = () => {
    const { registerNewEmail } = useSupaBase()
    registerNewEmail(email.value)
}


</script>

<template lang="pug">
VeeForm(:validation-schema='registerEmaiSchema' @submit="registerNewEmail" class='flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center w-full xl:w-[80%]')
    div(class='flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center w-full')
        div(class='w-full').border.border-primary.h-14    
            VeeField(name="email" v-model="email" type='text' class='placeholder:text-primary' placeholder="You email address...").w-full.h-full.p-4.outline-none.border-none.bg-transparent.text-primary
            span.mt-4
                VeeErrorMessage(name='email' class="mt-4 text-red-500")
    button(type='submit' class='bg-primary font-ultraBold px-6 py-3 w-full lg:w-2/3 xl:w-1/3 lg:min-w-fit h-14 cursor-pointer') Sign Up
</template>
