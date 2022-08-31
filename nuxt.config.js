const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    /* EXPLANATION: I want to add external fonts to my project. I will 
    use fonts from google fonts */
    /* 1) Go to google fonts, select the fonts you want and have a look
    at the link that we should paste normally in the head of a project. */
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* 2) In order for my entire project can have the selected fonts,
      add them in the nuxt.config.js file. Here, under the section links,
      I will have an array of links I want for my project. The array contains
      several objects representing each link I want. Here I can add the
      link for my fonts. In the rel: attribute add 'stylesheet' and in 
      the href: attribute add the url provided in the link by google fonts.
      The next steps are in layouts > default.vue */
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
