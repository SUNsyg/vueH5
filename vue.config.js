// const devConfig = require('./config/dev')
// const buildConfig = require('./config/build')

module.exports = {
    lintOnSave: false,
    assetsDir: 'static',
    // 'process.env.NODE_ENV': process.env.NODE_ENV === 'development' ? devConfig : buildConfig,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        loaderOptions: {
            postcss: {
                plugins: [require('postcss-px2rem-exclude')({
                    remUnit: 75,
                    exclude: /node_modules/
                })]
            },
            // 全局样式
            // sass: {
            //     data: '@import "./src/assets/scss/index.scss";'
            // }
        }
    }
}
