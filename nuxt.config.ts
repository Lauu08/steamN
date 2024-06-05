// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['@vue/compiler-sfc']
  },
  css: [
    '~/styles/global.css'
  ],
  routeRules: {
    '/': { redirect: '/tienda' } // redirige la página de inicio a tienda
  }
})
