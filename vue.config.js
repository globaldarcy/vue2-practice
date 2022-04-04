const { defineConfig } = require('@vue/cli-service')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports = defineConfig({
    // productionSourceMap: false,
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // pathRewrite: { '^/api': '' }
            }
        }
    },
    chainWebpack: (config) => {
        config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
    },
})
