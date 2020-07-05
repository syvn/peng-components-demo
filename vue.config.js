const path = require('path');
module.exports = {
    pages: {
        index: {
            entry: 'src/main.js', // js入口文件修改
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/peng-components-demo/' : '/',
    chainWebpack: (config) => {
        // 重新设置目录别名
        config.resolve.alias.set('@', path.resolve('src')).set('~', path.resolve('packages'));
        // 使 src
        config.module
            .rule('js')
            .include.add('/packages')
            .end()
            .include.add('/src')
            .end()
            .use('babel')
            .loader('babel-loader');
        config.module
            .rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler');
    },
};
