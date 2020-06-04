import axios from 'axios';

// 设置全局请求路径
const BASE_URL = 'https://api.mtnhao.com/';

//不带全局loading的请求实例
export const requestWithoutLoading = createBaseInstance();

// 带全局loading的请求实例
// 传入函数是因为需要在处理请求结果handleResponse之前处理loading
// 所以要在内部插入loading拦截器的处理逻辑
export const request = createBaseInstance();
mixinLoading(request.interceptors)

// 通用axios实例
function createBaseInstance(){
    // 通过axios.create()创建请求实例
    const instance = axios.create({
        baseURL: BASE_URL
    })
    // 通过实例的interceptors（英文拦截）拦截方法
    // axios.interceptors 拦截器，拦截请求前和请求后，then,catch处理之前，对数据进行处理
    // axios.interceptors.request.use(function(res){
    //     success
    // },function(fail){
    //     error
    // })
    
    // axios.interceptors.response.use(function(res){
    //     success
    // },function(fail){
    //     error
    // })
    // ————————————————
    // 版权声明：本文为CSDN博主「翼晗」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/qq_34164814/article/details/80763477
    instance.interceptors.response.use(handleResponse, handleError)
    return instance
}

// 定义正确响应
function handleResponse(res){
    return res.data
}
// 定义错误响应
function handleError(err){
    confirm(err.message,'出错了')
    throw err
}

function mixinLoading(){

}