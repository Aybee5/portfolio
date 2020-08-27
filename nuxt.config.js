export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ibrahim Abdullahi Aliyu',
    htmlAttrs: {
      lang: 'en-NG',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {hid: 'author', name: 'author', content: process.env.author || ''},
      {
        hid: 'keywords',
        name: 'keywords',
        content: ['Ibrahim', 'Ibrahim Abdullahi Aliyu', 'Hooli', 'Hooli Consults', ' Hooli Technologies Nigeria Limited', 'OfflineFirst', 'CouchDB',
          'Nigerian Developer', 'Vue Developer', 'JavaScript Developer', 'Software Engineer', 'Software Developer', 'aybee', 'offline', 'pwa']
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/my-favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#5755d9', text: 'bazinga'},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/icons'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/spectre'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
