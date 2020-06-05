import * as utilsall from './index'
import VueLazyload from 'vue-lazyload'

export default {
    install(Vue){
        // 在全局中可以通过$utils.method  获取utils中的方法
        Vue.prototype.$utils = utilsall;
        // 图片懒加载插件
        Vue.use(VueLazyload, {
            loading: require('@/assets/img/lazyload.jpg'),
            error: require('@/assets/img/lazyload.jpg'),
          })
    }
}