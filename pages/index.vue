<script setup lang="ts">
const { getAnimationConfig} = useAnimateConfig()
const { initialLeft, initialRight, enter } = getAnimationConfig()
import { useScroll } from '@vueuse/core'
const backgroundStyle = ref({
    background:
        'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%)'
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

const indexActiveRoadMap = ref(0)
const slideRefs  = ref([])
const slickList  = ref(null)
const slideWidthRoadMap = ref(0)

let { x } = useScroll(slickList, { behavior: 'smooth' })

const setActiveBtnRoadMap = (index: number) => {
    const offset = (index - indexActiveRoadMap.value) * slideWidthRoadMap.value
    if(slickList.value) {
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
        LazyMoleculesPartical
            .absolute(class='top-[50%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')
                .container.mx-auto
                    .element-section
                        .flex.flex-col.items-center.justify-center.gap-8
                            h2(
                                v-motion
                                :initial='initialLeft'
                                :visible='enter'
                            ).uppercase.font-ultraBold.text-primary
                                | YIELDS
                                span.text-white.mx-4 ON
                                | YIELDS
                            p(
                                v-motion
                                :initial='initialLeft'
                                :visible='enter'
                            ).text-center
                                | Unlock potential of Compounding Yield
                                br
                                | Keep your collateral 100% safe. Supercharge your yields
                            AtomsCustomButton(
                                type='large'
                                v-motion
                                :initial='initialRight'
                                :visible='enter'
                            )
                                | How it work
                                Icon(name="uil:arrow-down" color="black" size='1.5rem').ml-2.-mt-1
        section.bg-dark
            .container(class='mx-auto p-8 lg:p-10')
                .element-section
                    div(class='relative w-full h-fit bg-primary rounded-3xl')
                        div(class='grid grid-cols-1 lg:grid-cols-2 py-8 px-2 lg:p-12')
                            .w-full.flex.flex-col.gap-6.px-4
                                h3.uppercase.font-ultraBold.text-black
                                    | BUILT BY UNDERDOGS, FOR UNDERDOGS
                                p.text-gray
                                    |YxY was designed for crypto enthusiasts & long-term holders that
                                    | retail become VC, breaking the unfair advantage between Whale and Fish
                                ul.list-none.p-0.flex.flex-col.w-full.gap-2
                                    li.flex.items-center
                                        Icon(name="lets-icons:check-fill" color="gray" size='1.5rem').-ml-2.mr-2
                                        p.text-gray Safety to hold digital assets for long term profit.
                                    li.flex.items-center
                                        Icon(name="lets-icons:check-fill" color="gray" size='1.5rem').-ml-2.mr-2
                                        p.text-gray Take advantage of LSD for an always-liquid position.
                                    li.flex.items-center
                                        Icon(name="lets-icons:check-fill" color="gray" size='1.5rem').-ml-2.mr-2
                                        p.text-gray Maximized yield potential into Venture Investment opportunity.
                                AtomsCustomButton(type='outline') Learn more
                            div(class='hidden md:block').w-full
                                img(src='~/assets/imgs/home1.webp' alt='homepage' width='400' height='400' class='w-[80%] mx-auto lg:w-full lg:-mt-12' loading='lazy')
        section.bg-dark.relative.overflow-hidden
            .absolute.inset-0.bg-pattern.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay.mix-blend-overlay
            .container(class='mx-auto p-8 lg:p-10 z-10')
                .element-section
                    div(class='relative w-full h-fit rounded-3xl')
                        .flex.flex-col.items-center.justify-center.gap-10.w-full
                            h2.uppercase.font-ultraBold.text-white.text-center
                                | YXY MAJOR PRODUCT FEATURES
                            div(class='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full')
                                div.col-1.bg-card.p-10.rounded-lg
                                    .flex.flex-col.gap-4
                                        div.relative.w-20.h-20.rounded-full
                                            div( :style="backgroundStyle").w-20.h-20.rounded-full
                                            img(src='~/assets/imgs/icons/asset1.svg' alt='asset 1' width='35' height='35' loading='lazy' class='transform-center')
                                        h5.uppercase.text-white.font-ultraBold INVESTMENT ACCESS
                                        p.text-lightGray Decentralize NO-RISK-high-return investment opportunities for stakers
                                div.col-1.bg-card.p-10.rounded-lg
                                    .flex.flex-col.gap-4
                                        div.relative.w-20.h-20.rounded-full
                                            div( :style="backgroundStyle").w-20.h-20.rounded-full
                                            img(src='~/assets/imgs/icons/asset2.svg' alt='asset 2' width='35' height='35' loading='lazy' class='transform-center')
                                        h5.uppercase.text-white.font-ultraBold RISK-REWARD RATIO
                                        p.text-lightGray Minimizing risk for principal tokens while maximizing yields
                                div.col-1.bg-card.p-10.rounded-lg
                                    .flex.flex-col.gap-4
                                        div.relative.w-20.h-20.rounded-full
                                            div( :style="backgroundStyle").w-20.h-20.rounded-full
                                            img(src='~/assets/imgs/icons/asset3.svg' alt='asset 3' width='35' height='35' loading='lazy' class='transform-center')
                                        h5.uppercase.text-white.font-ultraBold DUAL TOKEN
                                        p.text-lightGray Allow token holders the freedom to invest future yields
        section(class='h-[750px]').bg-dark2.relative
            .container(class='mx-auto p-8 lg:p-10 z-10')
                .element-section
                    div(class='relative w-full h-fit rounded-3xl lg:py-20')
                        .flex.flex-col.items-center.justify-center.gap-6.w-full
                            div(class='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full')
                                div(class='lg:p-8').col-1.flex.flex-col.items-start.justify-center.w-full.h-full
                                    h2.uppercase.font-ultraBold.text-white
                                        | Cross-Chain
                                        | liquidity staking derivative
                                div.col-1.flex.flex-col.items-start.justify-center.w-full.h-full.p-8.relative
                                    div(class='absolute top-60 md:top-72 lg:top-1/2 left-0 right-0 bottom-0 bg-center bg-no-repeat bg-cover bg-blend-overlay mix-blend-soft-light')
                                        img(src='~/assets/imgs/icons/ellipse-right.svg' alt='ellipse' width='460' height='620' loading='lazy' class='transform-center w-96 md:w-[460px] lg:w-[460px]').transform-center
                                        img(src='~/assets/imgs/icons/ellipse-left.svg' alt='ellipse' width='580' height='620' loading='lazy' class='transform-center w-96 md:w-[460px]  lg:w-[520px]').transform-center
                                    div(class='top-56 md:top-72 lg:top-0').absolute.inset-0.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay.mix-blend-hard-light
                                        img(src='~/assets/imgs/icons/background-green.svg' alt='ellipse' width='470' height='620' loading='lazy' class='transform-center').transform-center
                                    .absolute.top-0.left-0.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay.mix-blend-hard-light.z-10
                                            //- p.text-white.absolute.top-32.left-20 {{ 123 }}
                                            img(src='~/assets/imgs/icons/crossChain1.svg' alt='crosschain icon' width='120' height='120' loading='lazy' class='relative top-32 left-10 w-24 lg:top-6 lg:left-40 lg:w-32')
                                            img(src='~/assets/imgs/icons/crossChain2.svg' alt='crosschain icon' width='100' height='100' loading='lazy' class='relative top-8 left-44 w-20 lg:-top-32 lg:left-96 lg:w-24')
                                            img(src='~/assets/imgs/icons/crossChain3.svg' alt='crosschain icon' width='120' height='120' loading='lazy'  class='relative w-24 left-48 top-16 lg:left-[25rem] lg:-top-8 lg:w-32')
                                            img(src='~/assets/imgs/icons/crossChain4.svg' alt='crosschain icon' width='100' height='100' loading='lazy'  class='relative w-20 left-16 top-0 lg:left-52 lg:-top-32 lg:w-24')
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

        section.bg-primary.relative.overflow-hidden
            .container.mx-auto.p-10.z-10.bg-pattern2.bg-center.bg-no-repeat.bg-cover.relative.overflow-hidden
                .element-section
                    div(class='relative w-full h-fit rounded-3xl').flex.flex-col.items-center.justify-center.gap-14.w-full
                        h2(class='w-full lg:w-2/3').uppercase.font-ultraBold.text-BLACK.text-center
                            | Venture Investing with NO RISK
                            | Now!!!
                        div(class='flex flex-col md:flex-row items-center justify-center gap-8 w-full')
                            AtomsCustomButton(type='outline-gray').outline-btn-gray Login
                            AtomsCustomButton(type='outline-gray').outline-btn-gray.flex.items-center
                                img(src='~/assets/imgs/icons/google-play_3.svg' alt='crosschain icon' width='36' height='38' loading='lazy')
                                .flex.flex-col.ml-2.items-start.-translate-y-1
                                    p.text-sm.text-gray.uppercase.translate-y-1 GET IT ON
                                    h5.text-medium.font-description.font-bold Google Play
                            AtomsCustomButton(type='outline-gray').outline-btn-gray.flex.items-center
                                img(src='~/assets/imgs/icons/apple.svg' alt='crosschain icon' width='42' height='38' loading='lazy').-translate-y-1
                                .flex.flex-col.ml-2.items-start.-translate-y-1
                                    p.text-sm.text-gray.uppercase.translate-y-1 DOWNLOAD ON THE
                                    h5.text-medium.font-description.font-bold App Store

                                    
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
</style>
