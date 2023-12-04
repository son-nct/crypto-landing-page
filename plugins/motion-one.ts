export default defineNuxtPlugin(async (nuxtApp) => {
    const { MotionOnePlugin  } = await import('vue-motion-one')
    nuxtApp.vueApp.use(MotionOnePlugin)
})