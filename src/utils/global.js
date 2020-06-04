import * as utilsall from './index'


export default {
    install(Vue){
        // 在全局中可以通过$utils.method  获取utils中的方法
        Vue.prototype.$utils = utilsall
    }
}