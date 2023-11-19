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

                            button.large-btn.flex.items-center
                                | How it work
                                Icon(name="uil:arrow-down" color="black" size='1.5rem').ml-2.-mt-1
        section.bg-dark
            .container.mx-auto.p-10
                .element-section
                    div(class='relative w-full h-fit bg-primary rounded-3xl')
                        div(class='grid grid-cols-1 lg:grid-cols-2 p-12')
                            w-full.flex.flex-col.gap-6.px-4
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
                                button.outline-btn.w-fit Learn more

                            .w-full
                                NuxtImg(src='/home1.png' class='w-full' class='lg:-mt-12')
        section.bg-dark2
            .container.mx-auto.p-10
                .element-section
                    div(class='relative w-full h-fit bg-primary rounded-3xl')
                    
</template>

<style lang="scss" scoped></style>
