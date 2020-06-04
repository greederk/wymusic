目录分析
src
    api （api接口主文件夹） api下有index.js,就可以直接引入'@/api',定位到api/index
        index.js  (可以引入api 下的其余接口文件，接口通过页面分成不同的文件)
        -->  export * form './user'   *代表所有，user.js中有多个导出， 通过import * 可以导入所有
        user.js   (导出指定类型的接口请求，通过导入utils的axios获取请求方法)    
        -->   import require form '@utils'


vue-netease-music项目是通过在main.js中引入global.js注入element-ui