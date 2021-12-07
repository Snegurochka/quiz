module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    },

    pwa: {
      name: 'Quiz App',
      themeColor: '#ff5e3a',
      mainfestOptions: {
        short_name: 'Quiz'
      }
    }
  }
}
