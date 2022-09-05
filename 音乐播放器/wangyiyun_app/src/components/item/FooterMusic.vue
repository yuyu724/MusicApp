<template>
    <div class="footmusic">
        <div class="footerLeft"  @click="updateDetailshow">
            <img :src="playList[playListIndex].al.picUrl" alt=""><!--注意src前的冒号，这是双向绑定的-->
            <div>
                
                <p>{{Controller(playList[playListIndex].name)}}</p>
                <span>横划可以切换歌曲</span>
            </div>
        </div>

        <div class="footerRight">
            <svg class="icon" aria-hidden="true" v-if="StopPlayIcon" @click="play">
            <use xlink:href="#icon-play"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else @click="play">
            <use xlink:href="#icon-bofang_"></use>
            </svg>

            
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-elipsis"></use>
            </svg>
            
        </div>
        <audio 
        ref="audio" 
        :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>

        <!--这里放置弹出层-->
        <van-popup v-model:show="detailshow" position="bottom" :style="{ height: '100%', width: '100%' }" >
            <!--这里是把底部正在播放的歌曲的信息传给子组件-->
            <MusicItem :musicid="playList[playListIndex]" :updatePlayIcon="updatePlayIcon" :play="play"/>
        </van-popup>
        
    </div>
</template>


    <script>
    import {mapState, mapMutations} from 'vuex'
    import MusicItem from '@/components/item/MusicItem.vue'
    export default {
        data() {
            return {
                interValue: 0 
            }
        },
        computed: {//拿到的store文件里方法的属性
            ...mapState(['playList', 'playListIndex', 'StopPlayIcon', 'detailshow'])
        },
        
        mounted() {
            //进行渲染，拿到index.js里的action的数据
            console.log(this.$refs);
            this.$store.dispatch('getLyric', this.playList[this.playListIndex].id)
            this.updateTime();
        },
        updated() {
            //调用store——>index.js里的getLyric方法，并将正在播放的歌曲的id传入形参
            this.$store.dispatch('getLyric', this.playList[this.playListIndex].id)
        },
        
        
        
        methods: {
            play: function() {
                if(this.$refs.audio.paused) {
                    this.$refs.audio.play()
                    this.updatePlayIcon(false)
                    this.updateTime()
                }else {
                    this.$refs.audio.pause()
                    this.updatePlayIcon(true)
                    clearInterval(this.interValue)
                }
                
            },
            //拿到的store文件里的方法,再按需将这些方法或者方法里的属性添加到标签行为i中
            ...mapMutations(['updatePlayIcon', 'updateDetailshow', 'updatePlayList', 'updateCurrentTime']),

            Controller(str) {
                return str.substring(0, 10)
                
            },
            updateTime: function() {
                this.interValue =  setInterval(()=> {
                    this.updateCurrentTime(this.$refs.audio.currentTime)
                }, 1000)
            }
            
        },

        watch: {
            playListIndex() { //监听如果下标发生了改变，则切换音乐后就自动播放音乐
                this.$refs.audio.autoplay = true;
                if(this.$refs.audio.paused) {
                    this.updatePlayIcon(false)
                }
            },
            playList() {
                if(this.updatePlayIcon) {
                    this.$refs.audio.autoplay = true;
                    this.updatePlayIcon(false);
                }
            }
        },

        comments: {
            MusicItem
        }
        
    }
</script>

<style lang="less" scoped>
    .footmusic {
        width: 100%;
        height: 1.4rem;
        background-color: rgba(160, 221, 224, 0.997);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border: 1px solid rgb(252, 249, 249);
        margin-left: 0.2rem;
        position: fixed;
        bottom: 0;
        display: flex;
        padding: 0.3rem;
        justify-content: space-between;
        .footerLeft {
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                border: 2.5px solid rgb(70, 69, 69);
                
            }
            span {
                font-size: 0.25rem;
                padding-left: 0.15rem;
                
            }
            p {
                padding-left: 0.15rem;       
                line-height: 0.4rem;
                font-size: 0.25rem;
            }
        }

    .footerRight {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
            width: 0.7rem;
            height: 0.7rem;
            fill: aliceblue;
        }
    }
    }
</style>