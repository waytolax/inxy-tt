const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const componentsPath = path.resolve(__dirname, 'src/components/')

const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: { additionalData: `@import "@/assets/scss/entry.scss";` },
    },
  },
  configureWebpack: {
    resolve: {
      alias: { '@C': componentsPath },
    },
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },
})
