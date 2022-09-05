<template>
    <!--歌单详情页挂载-->
      <ItemMusicTop :playList="state.playList"></ItemMusicTop>
      <ItemMusicList :MusicList="state.MusicList" :subscribedCount="state.playList.subscribedCount"></ItemMusicList>
    
</template>
    

<script>
import { useRoute } from 'vue-router'; //useRouter从方法里获取路由的数据和参数
import { onMounted, reactive } from 'vue';
import { getItemMusicList, getAllItemMusic } from '../request/api/item.js'
import ItemMusicTop from '../components/item/ItemMusicTop';
import ItemMusicList from '../components/item/ItemMusicList.vue';

export default {
    setup() {
            const state = reactive({
            playList:{}, //歌单详情页数据父组件，要传值给子组件使用
            MusicList: []
        });
        
        onMounted(async() => {
            let id = useRoute().query.id; //获取歌曲的id属性
            console.log(id);

            //获取歌单详情
            let res = await getItemMusicList(id);
            console.log(res);            
            state.playList = res.data.playlist;
            //console.log(res.data.playlist);
            
            //获取歌单的歌曲
            let list = await getAllItemMusic(id);
            //console.log(list);
            state.MusicList = list.data.songs;
            //console.log(list.data.songs);
        });
        return {state}
    },
        components: {
    ItemMusicTop,
    ItemMusicList
}
};
</script>