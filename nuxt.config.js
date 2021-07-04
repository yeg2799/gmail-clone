import routers from './config/routes'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gmail-clone',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    '@/assets/bootstrap-grid.min.css',
    // '@/assets/bootstrap-grid.min.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-material' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/assets/icons/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     vendor: ['vue-material'],
     
  },
  router: {
    extendRoutes(routes,resolve) {
      // routes.splice(0, routes.length);
      routes.push(...routers);
    },
  },
}
