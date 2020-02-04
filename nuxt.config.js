
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  router: {
    middleware:[
      'clearValidationErrors'
    ]
  },
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  auth:{
    strategies:{
      local:{
        endpoints: {
          login:{
            url: 'auth/login', method:'post', propertyName: 'access_token'
          },
          user: {
            url: 'auth/user', method:'get', propertyName: 'data'
          },
          logout:{
            url: 'auth/logout', method:'get'
          }
        }
      }
    },
    redirect:{
      login: 'authorizate/login',
      home: '/'
    },
    plugins: [
      './plugins/auth'
    ]
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
  ** Build configuration
  */
  axios:{
    baseURL:'http://127.0.0.1:8000/'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS:true,
    extend (config, ctx) {
    }
  }
}
