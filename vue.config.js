// 自定义webpack配置


const port = process.env.port || process.env.npm_config_port || 9530 // dev port
module.exports={
    // Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如https://www.xxx.com/。如果应用被部署在一个子路径上，
    // 你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在https://www.xxx.com/my-app/，则设置 publicPath 为 /my-app/。
    // 这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值：
    // module.exports={
    //     publicPath:process.env.NODE\_ENV==='production'?'/production-sub-path/':'/'
    // }
    publicPath:'/',
    // 打包文件路径
    outputDir: 'dist',
    // 打包时生成的静态资源目录
    assetsDir: 'static',
    //是否在保存的时候检查
    lintOnSave: true,
    //生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,
    devServer:{
        // 项目端口号
        port:port,
        // 启动时自动在浏览器打开
        open:true,
        // 启动热更新
        hotOnly:true
    }
}