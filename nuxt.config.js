export default {
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
    }, {
      'http-equiv': 'x-ua-compatible',
      content: 'ie=edge',
    }],
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact',
  },

  loading: {
    color: 'black',
  },

  modules: [
    ['@nuxtjs/pwa', {
      meta: {
        name: 'META_NAME',
        author: 'META_AUTHOR',
        description: false,
        ogType: false,
        ogSiteName: false,
        ogTitle: false,
      },
      manifest: {
        name: 'MANIFEST_NAME',
        short_name: 'MANIFEST_SHORT_NAME',
        lang: 'ru',
      },
    }],
    '@nuxtjs/axios',
  ],

  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(jsx?|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      };
    },
  },
};
