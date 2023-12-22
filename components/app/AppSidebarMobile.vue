<script setup lang="ts">
const openMobileMenu = inject('openMobileMenuState')
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
    text: 'Mechanism',
    to: '/mechanism',
  },
  {
    text: 'Portfolio',
    to: '/portfolio',
  },
  {
    text: 'About',
    to: '/about',
  },
]

const closeMenu = () => {
  openMobileMenu.value = false
};

</script>


<template lang="pug">
Transition(name='menu')
  template(v-if='openMobileMenu')
    .fixed(class='z-50 top-0 right-0 bottom-0 w-2/3 h-screen bg-mobileMenu')
      img.img-investor(src='~/assets/imgs/icons/close-icon.svg' alt='homepage' width='40' height='40' class='float-right relative top-3 right-3' loading='lazy' @click='closeMenu')
      .flex.flex-col.w-full.h-full
        ul.list-none.p-0.flex.flex-col.w-full.gap-6.mt-10
          li.inline-block.list-none.ml-7.text-white(v-for='(item,index) in navigator' :key='item')
            NuxtLink(:to='item.to' v-if='index % 2 !== 0').text-lightGray {{ item.text }}
              span.link__style
              | &nbsp;
            NuxtLink.link(:to='item.to' v-else).text-white {{ item.text }}
              span.link__style
              | &nbsp;
   
</template>


<style lang="scss" scoped>
.router-link-active {
  @apply border-b border-primary cursor-default;
}

.link {
  @apply relative;

  &__style {
    @apply h-[1px] inline-block w-0 bg-primary absolute -bottom-0.5 left-0 z-10;
  }

  &:not(.active):hover {
    .link__style {
      @apply w-full ease-out duration-300;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  @apply translate-x-0 duration-500 ease-out;
}

.menu-enter-from,
.menu-leave-to {
  @apply translate-x-60 duration-500 ease-in-out;
}
</style>
