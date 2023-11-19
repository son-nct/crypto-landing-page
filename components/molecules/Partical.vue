<script setup>
import { loadFull } from 'tsparticles'
import { tsParticles } from 'tsparticles-engine'

const { mode } = useRuntimeConfig().public.particles
const show = ref(false)

if (process.client && mode === 'custom') {
  await loadFull(tsParticles)
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: '#171616',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#CBFB45',
    },
    links: {
      color: '#CBFB45',
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
}
</script>

<template lang="pug">
div.element-section
    NuxtParticles(
        id="tsparticles"
        :options="options"
    )
    
</template>

<style lang="scss" scoped></style>
