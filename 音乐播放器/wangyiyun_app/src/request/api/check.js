import service from "./request";


export function checkMusicItem(data) {
    return service({
        method: 'GET',
        url: `/search?keywords=${data}`,
        
    })
}