import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component('VueMagnifier', VueMagnifier)
})
