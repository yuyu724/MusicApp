<template>
<img :src="musicid.al.picUrl" alt="" class="bgimg">

<!--头部布局-->
    <div class="ItemTop">
        <div class="TopLeft">
            <svg class="icon" aria-hidden="true" @click="updateDetailshow">
            <use xlink:href="#icon-back"></use>
            </svg>

           <div class="LeftMarquee">
                <!--vue3 marquee是vue3的一个很有用的跑马灯组件-->
                <Vue3Marquee class="name">
                    <p>{{musicid.al.name}}</p>
                </Vue3Marquee>

 <!--这里的musicid就是父组件传过来的内容包的名称，我们在这个页面所有用到父组件数据的时候，都要用他调用-->
           </div>
        </div>
        <div class="TopRight">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
        
    </div>

    
<!--中部布局-->    
    <div class="ItemMedium">
        <img :src="musicid.al.picUrl" alt="" class="image"  @click="lyricShow">
        

        <div class="introduce">
            
            <div class="online">
                <svg class="icon" aria-hidden="true" @click="goplay(-1)">
            <use xlink:href="#icon-shangyishou1"></use>
            </svg>

            <p>{{musicid.name}}</p>


            <svg class="icon" aria-hidden="true" @click="goplay(1)">
            <use xlink:href="#icon-xiayishou1"></use>
            </svg>
            

            </div>
                
            <hr/>
            <span v-for="item in musicid.ar" :key="item">{{item.name}}</span>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-favorites"></use>
            </svg>
        </div>  
    </div>


    <!--底部布局-->
    <div class="ItemBottom">
        <div class="IconList">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-adjust"></use>
            </svg>

            <!--做点击切换随机歌曲的功能-->
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huanyihuan"></use>
            </svg>

            <!--做点击返回首页的功能-->
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bad"></use>
            </svg>
        </div>
            
        
        <div id="bottom">
            <svg class="icon" aria-hidden="true" v-if="StopPlayIcon" @click="play">
            <use xlink:href="#icon-xiaomaomi"></use>
            </svg>

            <svg class="icon" aria-hidden="true" v-else @click="play">
            <use xlink:href="#icon-xiaomaomi"></use>
            </svg>

        </div>

        <van-popup v-model:show="lyricshow" position="right" :style="{ height: '100%', width: '100%' }" >
            <!--这里是把底部正在播放的歌曲的信息传给子组件-->
            <lyricItem :lyricitem="musicid" :lyriclist ="lyriclist" :play="play" :updatePlayIcon="updatePlayIcon"/>
        </van-popup>
    </div>
</template>

<script>
    import { Vue3Marquee } from 'vue3-marquee'
    import 'vue3-marquee/dist/style.css'
    import { mapMutations, mapState } from 'vuex';
    import lyricItem from '@/components/item/lyricItem.vue'

    export default {
        mounted() {//利用vue2 mounted方法，可以在其中执行操纵
            console.log(this.musicid);
            //console.log(this.lyriclist);
        },
        computed: {
            ...mapState(['lyricshow', 'lyriclist', 'playListIndex', 'playList'])
        },
        components: {
            Vue3Marquee,
        },
        props: ['musicid', 'updatePlayIcon', 'play'], //通过props将值传过来

        methods: {
            ...mapMutations(['updateDetailshow', 'lyricShow', 'updatePlayListIndex']),
            goplay(num) {
                let index = this.playListIndex + num;
                if(index < 0) {
                    index = this.playListIndex - 1;
                }
                else if(index == this.musicid.length) {
                    index = 0
                }
                this.updatePlayListIndex(index)
            }
        },
        components: {
            lyricItem,
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    
    .bgimg{
        width: 100%;
        height: 100%;
        position: absolute; //脱离文档流
        z-index: -1;
        filter: blur(1.2rem);
    }
    .ItemTop {
        width: 100%;
        height: 1rem;
        display: flex;
        padding: 0.2rem;
        justify-content: space-between;
        align-items: center;
        fill: rgb(99, 105, 110);
        .TopLeft {
            display: flex;
            align-items: center;
            .LeftMarquee {
                width: 2.5rem;
                height: 100%;                
                margin-left: 1.87rem;              
                .name {
                    color: rgb(51, 53, 54);
                    margin-top: 0.5rem;
                }

                span {
                    color: rgb(61, 64, 64);
                }
                .icon {
                    width: 0.3rem;
                    height: 0.3rem;
                    fill: antiquewhite;
                }
            }
        }
    }

    .ItemMedium {
        text-align: center;

        .image {
            width: 65%;
            height: 65%;
            display: flex;
            margin-top: 1.3rem;
            margin-left: 19%;
            border-radius: 0.5rem;
            box-shadow: 8px 8px 8px rgba(69, 50, 50, 0.342);
        }
        .introduce {            
            padding: 0.4rem;
            .online{
                padding-left: 1rem;
                padding-right: 1rem;
                display: flex;
                justify-content: space-between;
                p {
                font-size: 0.34rem;
                margin-top: 0.6rem;
                font-weight: 800;
                word-spacing: o.1rem;
            }
            }
            
            span {
                display: block;
                padding-top: 0.4rem;
                line-height: 0.0001rem;
            }
            .icon {
                margin-top: 0.5rem;
            }

        hr {
            margin-top: 0.2rem;
            height: 0.001rem;
            margin-left: 0.8rem;
            width: 5rem;
            border-color:none;
            border: 0.5px solid rgb(62, 50, 36);
        }
        }
    }

    .ItemBottom {
        width: 7.5rem;
        height: 2rem;
        margin-top: 2.8rem;
        position: absolute;
        padding: 0.15rem;

        .IconList {
            padding-left: 1rem;
            padding-right: 1rem;
            margin-top: -0.9rem;
            margin-bottom: 0.4rem;
            display: flex;
            justify-content: space-between;
        }

        #bottom {
            width: 100%;
            height: 100%;
            background-color: rgba(221, 204, 224, 0.428);
            border-radius: 2rem 2rem 2rem 2rem;
            line-height: 1rem;
            box-shadow: -1px 6px 3px rgba(69, 50, 50, 0.342);
            .icon {
                margin: 0.4rem 0.6rem ;
                width: 1rem;
                height: 1rem;
            }
        }
    }

    
</style>