import {request} from '@/utils'

// 轮播图地址请求api
export const getBanner = () => request.get('/banner?type=0')

// 获取推荐图片api
export const getPersonalized = params => request.get(`/personalized`,{params})

// 获取推荐新音乐（新碟上架）
export const getNewsongs = () => request.get('/personalized/newsong')

// 获取飙升榜 
export const getTotop = () => request.get('/top/list?idx=3')

// 获取新歌榜
export const getNewsongtop = () => request.get('/top/list?idx=0')

//原创歌曲榜
export const getFirstsongs = () => request.get('/top/list?idx=2')