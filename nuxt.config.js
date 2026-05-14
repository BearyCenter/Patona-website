import en from './locales/en.json'
import th from './locales/th.json'
import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Patona | พาธุรกิจของคุณให้โตไปกับเรานะ',
    htmlAttrs: {
      lang: 'th'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_Patona.svg' },
      { rel: 'preload', href: '/fonts/HeaventRounded/DB HeaventRoundedv3.2.1.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
      { rel: 'preload', href: '/fonts/HeaventRounded/DB HeaventRounded Bd v3.2.1.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
      { rel: 'preload', href: '/fonts/HeaventRounded/DB HeaventRounded Med v3.2.1.woff2', as: 'font', type: 'font/woff2', crossorigin: true }
    ],
    script: [
      {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
          async: true,
          crossorigin: "anonymous"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/css/customNew.css',
    '~/assets/styles/css/customV2.css',
    '~/assets/styles/css/custom.css',
    '~/assets/styles/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'animate.css/animate.min.css',
  ],

  server: {
    port: 80 // default: 3000
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    '~/plugins/head-util.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/gtm',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],

  gtm: {
    enabled: true, /* see below */
    debug: false,

    id: 'GTM-TZPJNV5L',
    layer: 'dataLayer',
    variables: {},

    pageTracking: true,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  i18n: {
    reloadOnLanguageChange: false,
    locales: ['en', 'th-TH'],
    defaultLocale: 'th-TH',
    vueI18n: {
      fallbackLocale: 'th-TH',
      messages: {
        'en':en,
        'th-TH':th
      }
    }
  },

  publicRuntimeConfig: {
      MAIN_API_URL: 'https://patona.online',
      REGISTER_URL: process.env.REGISTER_URL || 'https://sellercenter.patona.online/',
      LOGIN_URL: process.env.LOGIN_URL || 'https://accounts.patona.online/login?return_to=https://sellercenter.patona.online',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
