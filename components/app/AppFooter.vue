<script setup lang="ts">
const footerSections = ref([
  {
    title: 'YxY',
    links: [
      { name: 'About Us', url: '#' },
      { name: 'YxY Token', url: '#' },
      { name: 'Careers', url: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Whitepaper', url: '#' },
      { name: 'Documentation', url: '#' },
      { name: 'For Understand', url: '#' },
    ],
  },
  {
    title: 'COMMUNITY',
    links: [
      { name: 'Blog', url: '#' },
      { name: 'Support', url: '#' },
      { name: 'Ecosystem', url: '#' },
    ],
  },
])
</script>

<template lang="pug">
footer.bg-dark.relative.overflow-hidden
    .absolute.inset-0.bg-footer.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay
    .container.mx-auto.p-10.z-10
        .footer-section
            div(class="xl:grid xl:grid-cols-3 xl:gap-8")
                div(class="space-y-8 xl:col-span-1")
                    img(src='~/assets/imgs/logo.svg' alt='Logo' width='207' height='32' class='w-10' loading='lazy')
                    p(class='text-neutralPink') Join this journey with us, today.
                    div(class='hidden lg:flex items-center w-full gap-4')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/telegram.svg' alt='Logo' width='20' height='20'  loading='lazy')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/discord.svg' alt='Logo' width='20' height='20'  loading='lazy')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/twitter.svg' alt='Logo' width='20' height='20'  loading='lazy')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/linkedin.svg' alt='Logo' width='20' height='20'  loading='lazy')
                    div(class='hidden lg:block')
                      AtomsLanguageButton 
                div(class="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2")
                    div(class="md:grid md:grid-cols-3 md:gap-8")
                        div(v-for='section in footerSections' :key='section')
                            h4.text-lg.text-white.leading-5.font-semibold.tracking-wider.text-gray-400.uppercase {{ section.title }}
                            ul(class='my-9 lg:mt-10')
                                li(v-for="(link, index) in section.links" :key="index" :class="{ 'mt-4': index !== 0 }")
                                    NuxtLink(:to='link.url' class="text-sm lg:text-base text-lightGray duration-300 ease-out leading-6 text-gray-300 hover:text-primary") {{ link.name }}
                div(class='lg:hidden flex flex-col items-center justify-center space-y-4 my-5')
                  .flex.items-center.justify-center.w-full.gap-4
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/telegram.svg' alt='Logo' width='20' height='20'  loading='lazy')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/discord.svg' alt='Logo' width='20' height='20'  loading='lazy')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/twitter.svg' alt='Logo' width='20' height='20'  loading='lazy')
                      div.w-8.h-8.bg-white.rounded-full.flex.items-center.justify-center.btn-social
                        img(src='~/assets/imgs/icons/linkedin.svg' alt='Logo' width='20' height='20'  loading='lazy')
                  div
                    AtomsLanguageButton 
            .flex.items-center.justify-between.mt-8(class='xl:mt-36')
                p(class='text-sm text-center lg:text-left lg:text-base leading-6 text-neutralPink')
                    | Copyright &copy; 2022 Crypteck UWS. All Rights Reserved.
                ul(class='hidden lg:flex items-center text-neutralPink')
                    li.text-base
                      NuxtLink(to='#' class="text-base text-neutralPink duration-300 ease-out leading-6 hover:text-primary") Term of Services
                    li.text-base.mx-6
                      NuxtLink(to='#' class="text-base text-neutralPink duration-300 ease-out leading-6 hover:text-primary") Privacy Policy
                    li.text-base
                      NuxtLink(to='#' class="text-base text-neutralPink duration-300 ease-out leading-6 hover:text-primary") Security

</template>

<style lang="scss" scoped>
.btn-social {
  @apply hover:bg-primary duration-300 ease-out cursor-pointer hover:-translate-y-2;
}
</style>
