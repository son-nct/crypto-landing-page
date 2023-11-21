<script setup lang="ts">
const importAsset = (name: string) => import(`@/assets/imgs/icons/${name}.svg`)
import homepage1 from '@/assets/imgs/home1.webp'
import homepage2 from '@/assets/imgs/home2.webp'
import asset1 from '@/assets/imgs/icons/asset1.svg'
import asset2 from '@/assets/imgs/icons/asset2.svg'
import asset3 from '@/assets/imgs/icons/asset3.svg'
import background from '@/assets/imgs/icons/background.svg'
</script>

<template lang="pug">
main
    article
        MoleculesPartical
            .absolute(class='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')
                .container.mx-auto
                    .element-section
                        .flex.flex-col.items-center.justify-center.gap-8
                            h2.uppercase.font-ultraBold.text-primary 
                                | YIELDS
                                span.text-white.mx-4 ON
                                | YIELDS
                            p.text-center 
                                | Unlock potential of Compounding Yield
                                br
                                | Keep your collateral 100% safe. Supercharge your yields
                            AtomsCustomButton(type='large')
                                | How it work
                                Icon(name="uil:arrow-down" color="black" size='1.5rem').ml-2.-mt-1
        section.bg-dark
            .container.mx-auto.p-10
                .element-section
                    div(class='relative w-full h-fit bg-primary rounded-3xl')
                        div(class='grid grid-cols-1 lg:grid-cols-2 p-12')
                            .w-full.flex.flex-col.gap-6.px-4
                                h2.uppercase.font-ultraBold.text-black
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
                            div.w-full
                                img(:src='homepage1' alt='homepage' width='400' height='400' class='w-full lg:-mt-12' loading='lazy')
        section.bg-dark.relative.overflow-hidden
            .absolute.inset-0.bg-pattern.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay.mix-blend-overlay
            .container.mx-auto.p-10.z-10
                .element-section
                    div(class='relative w-full h-fit rounded-3xl')
                        .flex.flex-col.items-center.justify-center.gap-6.w-full
                            h2.uppercase.font-ultraBold.text-white
                                | YXY MAJOR PRODUCT FEATURES
                            div(class='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full')
                                div.col-1.bg-card.p-10.rounded-lg
                                    .flex.flex-col.gap-4
                                        div.relative.w-20.h-20.rounded-full
                                            div( style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%);").w-20.h-20.rounded-full
                                            img(:src='asset1' alt='asset 1' width='35' height='35' loading='lazy' class='transform-center')
                                        h5.uppercase.text-white.font-ultraBold INVESTMENT ACCESS
                                        p.text-lightGray Decentralize NO-RISK-high-return investment opportunities for stakers
                                div.col-1.bg-card.p-10.rounded-lg
                                    .flex.flex-col.gap-4
                                        div.relative.w-20.h-20.rounded-full
                                            div( style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%);").w-20.h-20.rounded-full
                                            img(:src='asset2' alt='asset 2' width='35' height='35' loading='lazy' class='transform-center')
                                        h5.uppercase.text-white.font-ultraBold RISK-REWARD RATIO
                                        p.text-lightGray Minimizing risk for principal tokens while maximizing yields
                                div.col-1.bg-card.p-10.rounded-lg
                                    .flex.flex-col.gap-4
                                        div.relative.w-20.h-20.rounded-full
                                            div( style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%);").w-20.h-20.rounded-full
                                            img(:src='asset3' alt='asset 3' width='35' height='35' loading='lazy' class='transform-center')
                                        h5.uppercase.text-white.font-ultraBold DUAL TOKEN
                                        p.text-lightGray Allow token holders the freedom to invest future yields
        section.bg-dark2.relative.overflow-hidden
            .container.mx-auto.p-10.z-10
                .element-section
                    div(class='relative w-full h-fit rounded-3xl')
                        .flex.flex-col.items-center.justify-center.gap-6.w-full
                            div(class='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full')
                                div.col-1.flex.flex-col.items-start.justify-center.w-full.h-full.p-8
                                    h2.uppercase.font-ultraBold.text-white
                                        | Cross-Chain
                                        | liquidity staking derivative
                                div.col-1.flex.flex-col.items-start.justify-center.w-full.h-full.p-8.relative
                                    .absolute.inset-0.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay.mix-blend-soft-light
                                        img(src='~/assets/imgs/icons/ellipse-right.svg' alt='ellipse' width='380' height='620' loading='lazy' class='transform-center').transform-center
                                        img(src='~/assets/imgs/icons/ellipse-left.svg' alt='ellipse' width='470' height='620' loading='lazy' class='transform-center').transform-center
                                    .absolute.inset-0.bg-center.bg-no-repeat.bg-cover.bg-blend-overlay.mix-blend-hard-light
                                        img(src='~/assets/imgs/icons/background-green.svg' alt='ellipse' width='470' height='620' loading='lazy' class='transform-center').transform-center
</template>

<style lang="scss" scoped></style>
