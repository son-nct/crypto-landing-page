<script setup lang="ts">
import FlowProductImg from '~/assets/imgs/flow-product.svg'
import FlowProductMobile from '~/assets/imgs/flow-product-mobile.svg'
import type { Accordition } from '~/types/accordition'
const carouselSlides = [
    {
        title: 'Step 1',
        content:
            'Users Staking supported digital assets (ETH, Aleph Zero,...) and receive ptToken represent their current staked assets',
    },
    {
        title: 'Step 2',
        content:
            'Hold their ptToken to receive ytToken represent for yield generated through their staked assets',
    },
    {
        title: 'Step 3',
        content:
            'Invest in early stage projects using their ytToken and receive profit after vesting phase and exit is finished.',
    },
]

const accorditionList = ref([
    {
        id: 1,
        title: 'What is LSD',
        description: 'Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non.',
        isOpen: true
    },
    {
        id: 2,
        title: 'Why dual-token model ?',
        description: 'Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non.',
        isOpen: false
    },
    {
        id: 3,
        title: 'How many assets are currently supported ?',
        description: 'Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non.',
        isOpen: false
    }
])

const toggleActive = (value: Accordition) => {
    const { id, isOpen } = value
    const findIndex = accorditionList.value.findIndex(item => item.id === id)
    accorditionList.value[findIndex].isOpen = isOpen
}

const showModalImage = ref(false)
const toggleModalImage = () => {
    showModalImage.value = !showModalImage.value 
}

provide('closeModal', showModalImage)
</script>

<template lang="pug">
main
    article
        ClientOnly
            MoleculesParticalWave
                .container.mx-auto
                    .absolute(class='w-full px-10 top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2')
                        .element-section
                            .flex.flex-col.w-full.items-center.justify-center.gap-8.text-center
                                h2.uppercase.font-ultraBold.text-white.text-center(class='text-5xl')
                                    | Experience venture investing 
                                    | NO RISK
                                p.text-center.text-lightGray
                                    | YxY is revolutionizing the $30B+ global web3 venture investing by tokenized yield
                                    br
                                    | from staking activities to early stage web3 startup that have great ideas could bring
                                    br
                                    | profit for longterm crypto supporters —so users can access to high return
                                    br
                                    | investment with NO RISK to current holding digital assets.
                                div(class='grid gap-6 lg:gap-32 grid-cols-1 md:grid-cols-3')
                                    div(class='w-[300px] h-[160px] bg-cardNeutral/90 flex flex-col items-center justify-center rounded-md p-6')
                                        p.text-whiteCustom LSD Under Management
                                    div(class='lg:translate-y-20 w-[300px] h-[160px] bg-cardNeutral/90 flex flex-col items-center justify-center rounded-md p-6')
                                        p.text-whiteCustom Assets Under Management
                                    div(class='w-[300px] h-[160px] bg-cardNeutral/90 flex flex-col items-center justify-center rounded-md p-6')
                                        p.text-whiteCustom Percentage Profit From Investing
        section.bg-primary.relative.overflow-hidden
            .container.mx-auto.p-10.z-10
                div(class='relative w-full h-fit rounded-3xl lg:py-10')
                    .element-section
                        .flex.flex-col.items-center.justify-center.gap-6.w-full
                            div(class='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full')
                                div.col-1.flex.flex-col.gap-4.items-start.justify-center.w-full.h-full
                                    h2.uppercase.font-ultraBold.text-black(class='text-xl lg:text-5xl')
                                        | Fundamentals-driven.
                                        br
                                        |DATA-BACKED.
                                        br
                                        |FOR-PROFIT.
                                    .flex.flex-col.items-start.gap-4
                                        p.text-base.text-neutral(class='lg:pr-14')
                                            | YxY’s investment ticket size from $50K-$2M from the
                                            | protocol yield pool that was decided by ytToken owner, to
                                            | drive successful web3 startup growth worldwide, for the greater good of the market and for profit too.
                                        p.text-base.text-neutral(class='lg:pr-14')
                                            | Why? Because we are the underdog both in investors and
                                            | builders' perspective. Web3 projects with huge potential are
                                            | difficult to raise funds if they are not well-connected. On the other hand,
                                            | retail investors rarely have opportunities to invest into high quality projects from an early stage and
                                            | having too little capital to risk it all. We are here to disrupt it.
                                        p.text-base.text-neutral(class='lg:pr-14')
                                            | Invest in potential projects with risk-free tokenized yield
                                            | from your current assets, safely hold your assets for profit,
                                            | while unlocking the promise of potential high return venture investment.
                                div.col-1.flex.flex-col.items-start.justify-center.w-full.h-full.relative
                                    div
                                        img(src='~/assets/imgs/mechanism1.svg' alt='ellipse' width='550' height='572' loading='lazy' class='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2')
        section.bg-dark2.relative.overflow-hidden
            .container.mx-auto.p-10.z-10
                .element-section
                    div(class='relative w-full h-fit rounded-3xl')
                        .flex.flex-col.items-center.justify-center.gap-10.w-full
                            h2.uppercase.font-ultraBold.text-white
                                | FLOW PRODUCT
                            div(class='min-h-[600px]')
                                div(class='w-full h-full' @click='toggleModalImage')
                                    img(:src='FlowProductMobile' alt='ellipse' width='550' height='572' loading='lazy' class='h-96 scale-125 my-20 lg:hidden')
                                    ClientOnly
                                        VueMagnifier(:src='FlowProductImg' class='hidden lg:block w-full' @close='toggleModalImage')
                                AtomsCustomButton(type='outline-green' class='block lg:hidden mt-20') View
        section.bg-primary.relative.overflow-hidden
            .container.mx-auto.z-10.p-10
                .element-section
                    div(class='relative w-full h-fit rounded-3xl').flex.flex-col.items-center.justify-center.gap-4.w-full
                        h2.uppercase.font-ultraBold.text-black.text-center
                            | Put your yield to work
                        p(class='w-full lg:w-1/2').text-base.text-neutral.text-center
                            | Your limited yield will be maximized into unlimited potential on YxY.
                            | Use the LSD mechanism to tokenize your yield to invest risk-free into a high|
                            | return web3 startup.
                        div.relative.w-full.mt-20
                            .slick-list
                                .slick-track-column
                                    .slick-slide-2(v-for='item in carouselSlides' :key='item')
                                        div(class='h-1/2')
                                            .w-full.h-full.inline-block.float-none
                                                .h-full.flex.relative
                                                    div(class='left-0 lg:left-8').flex-1.flex-col.gap-2.relative.h-full
                                                        h5.uppercase.text-black.font-ultraBold {{ item.title }}
                                                        div(class='top-8 lg:top-14').absolute.-left-1.icon-check-wrapper
                                                            Icon(name="lets-icons:check-fill" color="black" size='2rem')
                                                            .strikethrough(class='hidden lg:block')
                                                        .line_dash_2
                                                        div(class='w-1/2').flex-1.flex-col.gap-2.relative.left-8.top-14.h-full
                                                            p.text-base.text-neutral.content.pt-2
                                                                | {{ item.content }}
        section.bg-dark2.relative.overflow-hidden
            .container.mx-auto.p-10.z-10
                .element-section
                    div(class='relative w-full h-fit rounded-3xl lg:py-10')
                        .flex.flex-col.items-center.justify-center.gap-6.w-full
                            div(class='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full')
                                div(class='items-center lg:items-start').col-1.flex.flex-col.gap-4.justify-start.w-full.h-full
                                    h2.uppercase.font-ultraBold.text-white.pt-8(class='text-4xl')
                                        | FAQS.
                                div.col-1.flex.flex-col.items-start.justify-center.w-full.h-full.relative
                                    MoleculesAccorditionList(:accordition-list="accorditionList" @toggle-active="toggleActive")
        section.bg-primary.relative.overflow-hidden
            .container.mx-auto.p-10.z-10.bg-pattern2.bg-center.bg-no-repeat.bg-cover.relative.overflow-hidden
                .element-section
                    div(class='relative w-full h-fit rounded-3xl').flex.flex-col.items-center.justify-center.gap-6.w-full
                        h2(class='w-full lg:w-2/3').uppercase.font-ultraBold.text-BLACK.text-center
                            | EARLY BIRDS
                            br
                            | GET THE ALPHA
                        h5.text-neutral.text-xl Sign up for Waitlist
                        div(class='w-full lg:w-1/2 flex flex-col lg:flex-row items-center')
                            div(class='w-full lg:w-2/3').border.border-dark.h-14
                                input(type='text' class='placeholder:text-dark' placeholder="You email address...").w-full.h-full.p-4.outline-none.border-none.bg-transparent.text-dark
                            button(type='button' class='w-full lg:w-fit mt-4 lg:mt-0').bg-dark.text-white.font-ultraBold.px-6.py-3.h-14.cursor-pointer Sign Up
        ClientOnly
            AtomsModalImage(:showModal='showModalImage' :imageUrl='FlowProductImg')                                                                  
</template>

<style lang="scss" scoped>
.icon-check-wrapper {
    @apply relative inline-block w-full;
}

.img-magnifier-container {
    @apply relative;
}

.img-magnifier-glass {
    position: absolute;
    border: 3px solid #8a3033;
    border-radius: 50%;
    cursor: none;
    /*Set the size of the magnifier glass:*/
    width: 150px;
    height: 150px;
}


.strikethrough {
    @apply absolute w-full bg-transparent top-1/2 left-0;
    border-top: 2px dashed;
    border-color: gray;
}
</style>
