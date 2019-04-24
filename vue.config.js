const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir)
}

// const url = '';

module.exports = {
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    //  用用程序默认部署位置，‘/’根目录，存放子目录ex：‘/web/’
    outputDir: 'dist',  // 输出文件目录
    devServer: {
        host: "localhost",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: {
        //     // '/api': {
        //     //     target: url,
        //     //     ws: true,
        //     //     changeOrigin: true,//允许跨域
        //     //     pathRewrite: {
        //     //         '^/api': '/api'
        //     //     }
        //     // },
        //     // '/sso': {
        //     //     target: url,
        //     //     ws: true,
        //     //     changeOrigin: true,//允许跨域
        //     //     pathRewrite: {
        //     //         '^/sso': '/sso'
        //     //     }
        //     // },
        // }
    },
    //  将接收ChainableConfig由webpack-chain提供支持的实例的函数。
    chainWebpack: config => {
        config.resolve.alias
        .set('vue$', 'vue/dist/vue.esm.js')
        .set('@', resolve('src'))
        .set('static', resolve('static'))
        .set('assets', resolve('src/assets'))
        .set('styles', resolve('src/assets/styles'))
        .set('components', resolve('src/components'))
        .set('icons', resolve('sd-icons'))
    },
    configureWebpack:{
        plugins: [
        // copy custom static assets
            new CopyWebpackPlugin([
              {
                from: resolve('static'),
                to: 'static',
                ignore: ['.*']
              }
            ])
        ]
    },

}
