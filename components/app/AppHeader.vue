<script setup lang="ts">
const head = useHead({
  script: [
    {
      hid: 'stripe',
      src: 'https://cryptorank.io/widget/marquee.js',
      defer: true,
    },
  ],
})

const navigator = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Ecosystem',
    to: '/ecosystem',
  },
  {
    text: 'Investor',
    to: '/investor',
  },
  {
    text: 'Portfolio',
    to: '/portfolio',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
]
</script>

<template lang="pug">
header.relative.z-10
    section.bg-black
      #cr-widget-marquee(data-coins='ethereum,lido-staked-ether,aleph-zero,injective-protocol,sei-network,cosmos,sui,aptos,matic-network,avalanche,kava,celestia,agoric' data-theme='dark' data-show-symbol='true' data-show-icon='true' data-show-period-change='true' data-period-change='24H' data-api-url='https://api.cryptorank.io/v0')
    section(class='bg-black/95').p-8.w-full.mx-auto
        div.container.mx-auto
          div.flex.items-center
              div(class='w-1/3')
                  .px-2.flex.items-center
                      ul.list-none.p-0.flex.w-full
                          li.inline-block.list-none.ml-7.text-white(v-for='(item,index) in navigator' :key='item')
                              NuxtLink(:to='item.to' v-if='index % 2 !== 0').text-gray-500 {{ item.text }}
                              NuxtLink(:to='item.to' v-else).text-white {{ item.text }}
                  
              div(class='w-1/3') 1
              div(class='w-1/3').flex.justify-end
                button.small-btn Login

</template>

<style lang="scss" scoped>
.cryptohopper-web-widget {
}
</style>
