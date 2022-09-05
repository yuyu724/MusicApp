//首页获取数据的请求
import service from "./request";

//获取首页轮播图数据
export function getBanner() {
    return service({
        method: 'GET',
        url:'/banner?type=2',
    })
}

//获取推荐歌单数据
export function getList() {
    return service({
        method: 'GET',
        url:'/personalized?limit=10'
    })
}