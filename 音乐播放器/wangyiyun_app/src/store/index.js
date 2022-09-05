import { createStore } from 'vuex'
import {getMusicLyric} from '@/request/api/item'

export default createStore({
  state: {
    playList: [{ //音乐播放列表
      al: {
        id: 2464009,
        name: "All The Best 纪念全集",
        pic: 109951165083289220,
        picUrl: "https://p1.music.126.net/9u2jpU5xpTBf8Nfc0GUFRg==/109951165083289212.jpg",
        pic_str: "109951165083289212"
      },     
      id: 26353080,
      name:"蜚蜚",
      ar: [{
        name: "陈僖仪"
      }]
    }],
    playListIndex:0, //默认播放音乐的下标为0
    StopPlayIcon:true,//按下暂停按钮后的显示
    detailshow:false,//点击之后显示弹出的歌曲详情页
    lyricshow:false,
    lyriclist: {}, //歌词部分
    currenttime: 0, //歌词播放的当前时间

    showpop: false,
    showlist:false,
  },
  getters: {
  },
  mutations: {
    updatePlayIcon:function(state, value) {
      state.StopPlayIcon = value
    },
    updatePlayList:function(state, value) {
      state.playList = value ;
      console.log(this.state.playList);
    },
    updatePlayListIndex:function(state, value) {
      state.playListIndex = value;  
      console.log(this.state.playListIndex);   
    },
    updateDetailshow:function(state) {
      state.detailshow = !state.detailshow; //取反，为的是点击之后可以自主切换效果 
    },
    lyricShow:function(state) {
      state.lyricshow = !state.lyricshow; //取反，为的是点击之后可以自主切换效果 
    },
    updateLyricList: function(state, value) {
      state.lyriclist = value;
      //console.log(state.lyriclist);      
    },
    updateCurrentTime: function(state, value) {
      state.currenttime = value;
     // console.log(state.currenttime);      
    },

    updateshowPopup: function(state) {
      state.showpop = !state.showpop; 
   },
   updateshowlist: function(state) {
    state.showlist = !state.showlist; 
 }
  
  },
  actions: {
    //歌词要保存在vuex里，vuex的保存需要先获取数据，因为获取数据是异步请求，所以我们要先在actions里完成
    getLyric: async function(context, value) {
      let res = await getMusicLyric(value);
      console.log(res);//通过dispatch触发,在FooterMusic.vue里
      context.commit('updateLyricList', res.data.lrc)
    }
  },
  modules: {
  }
})
