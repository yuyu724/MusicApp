//歌单详情页的接口
import service from "./request";

export function getItemMusicList(data){
    return service({
        method: 'GET',
        url:`/playlist/detail?id=${data}`,
    })
 }

 export function getAllItemMusic(data) {
    return service ({
        method: 'GET',
        url:`/playlist/track/all?id=${data}&limit=25&offset=0`
    
    })
    
 }

 export function getMusicLyric(data) {
    return service ({
        method: 'GET',
        url:`/lyric?id=${data}`
    
    })
 }

