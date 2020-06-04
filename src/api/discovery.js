import {request} from '@/utils'

// 轮播图地址请求api
export const getBanner = () => request.get('/banner?type=0')