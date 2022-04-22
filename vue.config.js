
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/main.scss";`
      }
    }
  },

  lintOnSave: false
};
