import {request} from '@/utils'

// 轮播图地址请求api
export const getBanner = () => request.get('/banner?type=0')

// 获取推荐图片api
export const getPersonalized = params => request.get(`/personalized`,{params})

// 获取推荐新音乐（新碟上架）
export const getNewsongs = () => request.get('/personalized/newsong')