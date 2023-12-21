<script setup lang="ts">
const { getAnimationConfig } = useAnimateConfig()
const { initialLeft, initialRight, enter } = getAnimationConfig()
import { useScroll } from '@vueuse/core'
const backgroundStyle = ref({
  background:
    'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%)',
})

const carouselSlides = [
  {
    upperHalf: {
      title: 'Project Idea',
      date: 'Q2 2021',
      content:
        "The project's idea was created during the market boom with the goal of how retail investors could have a chance to compete with professional investors.",
    },
    lowerHalf: {
      title: 'Finalized Model',
      date: 'Q3 2022',
      content:
        'After various designs and adjusting the model to find the most suitable design for the market, with the development of LSD in The Merge - Ethereum events, the model has been finalized using the liquidity staking mechanism as the core of the model.',
    },
  },
  {
    upperHalf: {
      title: 'Assemble Team',
      date: 'Q1 2023',
      content:
        'We searched for people who are most passionate about the development of crypto to develop this product together.',
    },
    lowerHalf: {
      title: 'Private Beta Launch',
      date: 'H1 2024',
      content:
        'Released Beta Launch with selected first blockchain and limited early beta testers.',
    },
  },
  {
    upperHalf: {
      title: 'Public Beta Launch',
      date: 'H3 2024',
      content:
        'Open Public Beta version for majority users, integrated two to four blockchains.',
    },
  },
]

const teamMembers = [
  {
    avatarUrl:
      'https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/jame.jpg',
    name: 'NIKOLA BOZIC',
    role: 'Founder',
  },
  {
    avatarUrl:
      'https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/joey.jpg',
    name: 'SELENA JOEY',
    role: 'Web Developer',
  },
  {
    avatarUrl:
      'https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/mark.jpg',
    name: 'MEMPHIS',
    role: 'Designer',
  },
  {
    avatarUrl:
      'https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/Olivia.jpg',
    name: 'OLIVIA',
    role: 'Designer',
  },
]

const indexActiveRoadMap = ref(0)
const slideRefs = ref([])
const slickList = ref(null)
const slideWidthRoadMap = ref(0)

let { x } = useScroll(slickList, { behavior: 'smooth' })

const setActiveBtnRoadMap = (index: number) => {
  const offset = (index - indexActiveRoadMap.value) * slideWidthRoadMap.value
  if (slickList.value) {
    x.value += offset
  }

  indexActiveRoadMap.value = index
}

onMounted(() => {
  slideWidthRoadMap.value = slideRefs.value[0]?.clientWidth
})
</script>

<template lang="pug">
main
    article
        section.bg-dark
            .container(class='mx-auto p-8 lg:p-10')
                .element-section
                    div(class='relative w-full h-fit flex flex-col gap-4 lg:gap-10')
                        h2.uppercase.font-ultraBold.text-white.text-center(class='text-5xl lg:text-6xl') WHO ARE WE
                        p.text-center.text-lightGray.text-base YxY is revolutionized LSDfi protocol for risk-free venture investing
                        div(class='block lg:hidden relative w-full min-h-[200px]')
                            img(src='~/assets/imgs/lightning-border-circle.svg' alt='homepage' width='120' height='120' class='absolute top-10 left-4 md:left-1/4' loading='lazy')
                            img(src='~/assets/imgs/flag-border-circle.svg' alt='homepage' width='64' height='64' class='absolute top-10 right-10 md:right-1/3' loading='lazy')
                            img(src='~/assets/imgs/gift-border-circle.svg' alt='homepage' width='120' height='120' class='absolute -bottom-24 right-16 md:-bottom-20 md:right-1/3' loading='lazy')
                        div(class='hidden lg:block').relative.w-full.h-fit.mb-40
                            img(src='~/assets/imgs/YxY-finance.svg' alt='homepage' width='400' height='104' class='hidden lg:block w-[80%] mx-auto lg:w-full' loading='lazy')
                            img(src='~/assets/imgs/green-arrow-left.svg' alt='homepage' width='310' height='400' class='hidden lg:block absolute w-[29%] top-[15%] left-2 mx-auto' loading='lazy')
                            img(src='~/assets/imgs/green-arrow-right-top.svg' alt='homepage' width='310' height='400' class='hidden lg:block absolute -top-16 right-48 mx-auto' loading='lazy')
                            img(src='~/assets/imgs/green-arrow-right-bottom.svg' alt='homepage' width='310' height='400' class='hidden lg:block absolute -bottom-16 right-24 mx-auto' loading='lazy')
                            img(src='~/assets/imgs/lightning-border-circle.svg' alt='homepage' width='52' height='52' class='hidden lg:block absolute -top-8 -left-5 mx-auto' loading='lazy')
                            img(src='~/assets/imgs/flag-border-circle.svg' alt='homepage' width='52' height='52' class='hidden lg:block absolute -top-32 right-[10%] mx-auto' loading='lazy')
                            img(src='~/assets/imgs/gift-border-circle.svg' alt='homepage' width='52' height='52' class='hidden lg:block absolute -bottom-20 right-[2%] mx-auto' loading='lazy')
                    div(class='grid grid-cols-1 lg:grid-cols-2 mt-44 lg:mt-0 lg:mb-40').gap-10
                        div(class='w-full lg:w-[55%]').flex.flex-col.items-start.justify-start.gap-6
                            h3.uppercase.font-ultraBold.text-white.text-left
                                |Our Concept
                                br
                                |& Mission
                            p.text-left.text-lightGray.text-base We offer to all underdogs out there from builders to investors, a solution for venture investing risk-free with LSDfi protocol.
                        div.flex.flex-col.gap-4
                            div(class='border-neutral border-t border-b py-4 px-2')
                                .flex.items-center.justify-between
                                    h3.uppercase.font-ultraBold.text-white.text-white.flex.items-center
                                        | 1500
                                        span.text-5xl.text-primary.pl-2 +
                                    div.flex.items-center.gap-4
                                        p(class='text-light') Validator nodes
                                        div(class='w-9 h-9 bg-neutral rounded-full flex items-center justify-center')
                                            img(src='~/assets/imgs/icons/arrow-right.svg' alt='homepage' width='16' height='16' class='' loading='lazy')
                            div(class='border-neutral border-b py-4 px-2')
                                .flex.items-center.justify-between
                                    h3.uppercase.font-ultraBold.text-white.text-white.flex.items-center
                                        | 50
                                        span.text-5xl.text-primary.pl-2 +
                                    div.flex.items-center.gap-4
                                        p(class='text-light') Ecosystem
                                        div(class='w-9 h-9 bg-neutral rounded-full flex items-center justify-center')
                                            img(src='~/assets/imgs/icons/arrow-right.svg' alt='homepage' width='16' height='16' class='' loading='lazy')
                    div(class='grid lg:grid-cols-3 mt-20 lg:mt-0').gap-10
                        .flex.flex-col.gap-4.items-start.justify-start 
                            h5.uppercase.font-ultraBold.text-white.text-left Our Mission
                            p.text-left.text-lightGray.text-base 
                                |We aim to build an LSDfi protocol that unlock potential
                                |of DeFi for multiple products. We are radically
                                |optimistic about crypto’s potential to create
                                |decentralized financial products and enable new kinds of investment.
                        .flex.flex-col.gap-4.items-start.justify-start 
                            h5.uppercase.font-ultraBold.text-white.text-left Our Vision
                            p.text-left.text-lightGray.text-base 
                                |We believe that crypto is just getting started. Our
                                |vision is to become one of the key players in web3
                                |industries, a bridge for traditional finance approach to
                                |web3 venture investment.
                        .flex.flex-col.gap-4.items-start.justify-start 
                            h5.uppercase.font-ultraBold.text-white.text-left Core Value
                            p.text-left.text-lightGray.text-base 
                                |We build and leverage liquid stacking mechanisms to
                                |decode market dynamics. We continuously seek to
                                |harness novel solutions and create new decentralized
                                |financial products.
        section.bg-primary.relative.overflow-hidden 
            div(class='p-6 lg:p-10').container.mx-auto.z-10
                .element-section
                    div(class='relative w-full h-fit rounded-3xl').flex.flex-col.items-center.justify-center.gap-14.w-full
                        h2.uppercase.font-ultraBold.text-BLACK
                            | ROADMAP
                        div.relative.w-full
                            .slick-list(ref='slickList')
                                .slick-track
                                    .slick-slide(v-for='(item, index) in carouselSlides' :key='item' :ref="el => slideRefs[index] = el")
                                        div(class='h-1/2')
                                            .w-full.h-full.inline-block.float-none
                                                .h-full.flex.relative
                                                    .absolute.-bottom-2.left-0
                                                        Icon(name="lets-icons:check-fill" color="black" size='1.5rem')
                                                    .line_dash
                                                    div(class='left-6 lg:left-8').flex-1.flex-col.gap-2.relative.h-full
                                                        h6.uppercase.text-black.font-ultraBold {{ item.upperHalf.title }}
                                                        p.mb-5.text-lightGray {{ item.upperHalf.date }}
                                                        div(class='w-1/2').mb-5
                                                            p.text-sm.text-black.content
                                                                | {{ item.upperHalf.content }}
                                        div(class='h-1/2 w-[90%] lg:w-[70%]').ml-auto(v-if='item?.lowerHalf')
                                            .w-full.h-full.inline-block.float-none
                                                .h-full.flex.relative
                                                    .absolute.-top-4.left-0
                                                        Icon(name="lets-icons:check-fill" color="black" size='1.5rem')
                                                    .line_dash.top-9 
                                                    div(class='left-6 lg:left-8').flex-1.flex-col.gap-2.relative.top-9 
                                                        h6.uppercase.text-black.font-ultraBold {{ item.lowerHalf.title }}
                                                        p.mb-5.text-lightGray {{ item.lowerHalf.date }}
                                                        div.mb-5
                                                            p.text-sm.text-black.content
                                                                | {{ item.lowerHalf.content }}
                    div(class='lg:hidden flex justify-center items-center pt-14 space-x-2 w-full roadmap-pagination')
                        div(
                            v-for='(btn, index) in carouselSlides'
                            :key='btn'
                            :class='{"active": indexActiveRoadMap === index}'
                            @click='setActiveBtnRoadMap(index)'
                        ).btn-pagination
        section.bg-dark
            .container(class='mx-auto p-8 lg:p-10')
                .element-section
                    div(class='relative w-full h-fit flex flex-col gap-4 lg:gap-4 mb-40')
                        h2.uppercase.font-ultraBold.text-white.text-center(class='text-5xl lg:text-6xl') Meet The Team
                        p.text-center.text-lightGray.text-base.mb-10 Meet our dedicated team that originally build this idea to from day zero
                        div.w-full.flex.flex-wrap.items-center.justify-center.gap-14
                            div.flex.flex-col.gap-2(v-for='member in teamMembers' :key='member')
                                div(class='member-card')
                                    img(:src='member.avatarUrl' alt='team member' width='16' height='16' class='w-full h-full align-middle rounded-full object-cover' loading='lazy')
                                h5.member-name.uppercase.font-ultraBold.text-white.text-center.mx-auto.mt-8
                                    | {{ member.name }}
                                p.text-center.text-lightGray.text-base.mb-2 {{ member.role }}
                                div.flex.items-center.w-full.justify-center.gap-2
                                  button.btn-social
                                    Icon(name="formkit:linkedin" size='1rem').icon
                                  button.btn-social
                                    Icon(name="mingcute:twitter-fill" size='1rem').icon
                    div(class='relative w-full h-fit flex flex-col gap-4 lg:gap-4 mb-20').element-section
                        h2.uppercase.font-ultraBold.text-white.text-center(class='text-5xl lg:text-6xl') Our Investor
                        div.flex.flex-col.justify-center.items-center.gap-4.w-full.mt-20
                          div(class='gap-x-8 gap-y-20 lg:gap-32 md:w-2/3 lg:w-[80%]').flex.flex-wrap.items-center.justify-center
                            img.img-investor(src='~/assets/imgs/investor/Poolin-1.svg' alt='homepage' width='150' height='150' class='w-28 lg:w-40' loading='lazy')
                            img.img-investor(src='~/assets/imgs/investor/neutrino-1.svg' alt='homepage' width='150' height='150' class='w-28  lg:w-40' loading='lazy')
                            img.img-investor(src='~/assets/imgs/investor/Coinbase-1.svg' alt='homepage' width='150' height='150' class='w-28  lg:w-40' loading='lazy')
                            img.img-investor(src='~/assets/imgs/investor/swop-1.svg' alt='homepage' width='120' height='150' class='w-28  lg:w-40' loading='lazy')
                            img.img-investor(src='~/assets/imgs/investor/BTCEX__1.svg' alt='homepage' width='120' height='150' class='w-28  lg:w-40' loading='lazy')
                            img.img-investor(src='~/assets/imgs/investor/huobi_global-1.svg' alt='homepage' width='200' height='150' class='w-28  lg:w-40' loading='lazy')
                    .element-section
                      div(class='grid lg:grid-cols-2').gap-10
                          div(class='w-full lg:w-[55%]').flex.flex-col.items-start.justify-start.gap-6
                              h3.uppercase.font-ultraBold.text-white.text-left
                                  |Our Partners
                              p.text-left.text-lightGray.text-base Meet our dedicated team that originally build this idea to from day zero
                              img(src='~/assets/imgs/partners/certik.svg' alt='homepage' width='223' height='223' class='w-40 lg:w-52' loading='lazy')
                          div(class='grid grid-cols-2 lg:grid-cols-3 grid-rows-2')
                              div(class='p-8 flex items-center justify-center border-neutral border')
                                img.img-investor(src='~/assets/imgs/investor/Poolin-1.svg' alt='homepage' width='150' height='150' class='' loading='lazy')
                              div(class='p-8 flex items-center justify-center border-neutral border')
                                img.img-investor(src='~/assets/imgs/investor/neutrino-1.svg' alt='homepage' width='150' height='150' class='' loading='lazy')
                              div(class='p-8 flex items-center justify-center border-neutral border')
                                img.img-investor(src='~/assets/imgs/investor/swop-1.svg' alt='homepage' width='150' height='150' class='' loading='lazy')
                              div(class='p-8 flex items-center justify-center border-neutral border')
                                img.img-investor(src='~/assets/imgs/investor/BTCEX__1.svg' alt='homepage' width='150' height='150' class='' loading='lazy')
                              div(class='p-8 flex items-center justify-center border-neutral border')
                                img.img-investor(src='~/assets/imgs/investor/Coinbase-1.svg' alt='homepage' width='150' height='150' class='' loading='lazy')
                              div(class='p-8 flex items-center justify-center border-neutral border')
                                img.img-investor(src='~/assets/imgs/investor/huobi_global-1.svg' alt='homepage' width='150' height='150' class='' loading='lazy')
                                section.bg-dark2.relative.overflow-hidden
    section.bg-dark2.relative.overflow-hidden
      .container.mx-auto.z-10
          .element-section
              div(class='relative w-full h-fit rounded-3xl').py-10
                  .flex.flex-col.items-center.justify-center.gap-6.w-full
                      div(class='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full')
                          div.z-20.col-1.flex.flex-col.gap-4.items-start.justify-center.w-full.h-full.p-8
                              h2.uppercase.font-ultraBold.text-white
                                  | EARLY BIRDS
                                  br
                                  | GET THE ALPHA
                              p.text-lg.text-lightGray Sign up for Waitlist
                              div(class='flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center w-full')
                                  div(class='w-full lg:w-2/3').border.border-primary.h-14
                                      input(type='text' class='placeholder:text-primary' placeholder="You email address...").w-full.h-full.p-4.outline-none.border-none.bg-transparent.text-primary
                                  button(type='button' class='bg-primary font-ultraBold px-6 py-3 w-full lg:w-fit h-14 cursor-pointer') Sign Up
                          div.z-0.col-1.flex.flex-col.items-start.justify-center.w-full.h-full.p-8.relative
                              div(class='absolute inset-0 -top-80 lg:top-0 bg-center bg-no-repeat bg-cover w-full')
                                  img(src='~/assets/imgs/icons/global.svg' alt='ellipse' width='855' height='482' loading='lazy' class='transform-center').transform-center
                              div(class='absolute inset-0 -top-80 lg:top-0 bg-center bg-no-repeat bg-cover bg-blend-overlay mix-blend-normal')
                                  img(src='~/assets/imgs/icons/background-blue.svg' alt='ellipse' width='470' height='620' loading='lazy' class='transform-center').transform-center                                             
</template>

<style lang="scss" scoped>
.roadmap-pagination {
  .btn-pagination {
    @apply w-4 h-1 bg-lightGray rounded-lg duration-300 ease-out cursor-pointer;

    &.active {
      @apply w-8 h-1 bg-black #{!important};
    }
  }
}

.member-card {
  &::before {
    @apply opacity-0 duration-300 ease-out z-10 absolute w-full h-full rounded-full bg-gradient-to-t from-primary/30 to-primary/50 transition-all;
    content: '';
  }

  @apply duration-300 ease-out relative w-60 h-60 rounded-full flex items-center justify-center;

  &:hover::before {
    @apply opacity-100 duration-300 ease-in-out;
  }
}

.member-name {
  &:hover {
    @apply text-primary duration-300 ease-out cursor-pointer;
  }
}

.img-investor {
  @apply opacity-50;
  &:hover {
    @apply opacity-100 duration-300 ease-out cursor-pointer;
  }
}

.btn-social {
  @apply w-9 h-9 flex items-center justify-center rounded-full bg-btnSocialColor duration-300 ease-out;

  .icon {
      @apply text-white;
  }

  &:hover {
    @apply bg-primary;

    .icon {
      @apply text-dark;
    }
    
  }
}


</style>
