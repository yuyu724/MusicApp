<template>
        
    <div class="recmusic">
        <div class="recTop">
            
            <div class="title">推荐歌单</div>
            <div class="search">全部</div>
            
        </div>
         <div class="recMusicPic">
        <van-swipe :loop="false" :width="130" class="PicSwipe" :show-indicators="false">
            <!--vue2写法：<van-swipe-item v-for="item in recmusic" :key='item'>用循环获取得到的推荐歌单的数据-->
            <van-swipe-item v-for="item in state.recmusic" :key='item'>

            <!--路由跳转完成推荐歌单点击跳转-->
            <router-link :to="{path:'/ItemMusic', query:{id: item.id}}">
                <img :src="item.picUrl" alt="">
                <span class="playcount"> <!--图标 播放量-->
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang2"></use>
                    </svg>
                    {{playCount(item.playCount)}} <!--播放量-->
                </span>
                                 
                  <!--文字描述内容-->
                <span class="introduce">{{intro(item.name)}}</span>
            </router-link>
                
            </van-swipe-item>
        </van-swipe>
    </div>
    </div>

   

</template>


<script>
import {getList} from "@/request/api/firstPage"
import { reactive, onMounted } from "vue";
    export default {
        // data() {  //vue2写法
        //     return {
        //         recmusic: [] //返回的数据将会保存在这个数组中
        //     }
        // },
        // methods: {
        //     async getMusic() {
        //         let res = await getList();
        //         console.log(res);
        //         this.recmusic = res.data.result
        //     },
        //     playCount: function(num) { //播放量大于一定数值的时候就变为汉字计数
        //         if(10000 <= num <1000000) {
        //             return (num/1000).toFixed(1) + '万'
        //         } else if(num>=1000000) {
        //             return (num/100000).toFixed(1) + '百万'
        //         } 
                
        //     }
        // },
        // mounted() {
        //     this.getMusic()
        // }


        //vue3写法 setup语法
        setup() {
            const state = reactive({
                recmusic: [],
            });
             function playCount(num) { //播放量大于一定数值的时候就变为汉字计数
            if(10000 <= num <1000000) {
                    return (num/1000).toFixed(1) + '万'
                } 
                if(num>=1000000) {
                    return (num/100000).toFixed(1) + '百万'
                } 
                
            }
             function intro(str) {
                
                    return str.substring(0,15);               
               
             }

             
            
            onMounted(async() => {
                let res = await getList();
                console.log(res);
                state.recmusic = res.data.result
            });
            return {state, playCount, intro}
        }
    }
</script>


<style lang="less" scoped>
    
    .recmusic {
        width: 100%;
        height: 3rem;
        padding-left: .4rem;
        padding-right: .3rem;
        margin-top: 0.45rem;
        
        .recTop {
            width: 100%;
            height: .5rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: .2rem;
            .title {
                font-size: .34rem;
                font-weight: 700;
                margin-top: -0.3rem;
                
            }
            .search {
                border: 1px solid #ccc;
                width: 1.2rem;
                height: 0.5rem;
                font-size: 0.3rem;
                border-radius: 0.3rem;
                text-align: center;
                margin-top: -0.3rem;
            }
        }
        .recMusicPic {
            width: 100%;
            height: 4rem;
            margin-top: -0.3rem;
            .PicSwipe {
                height: 100%;
                img {
                    width: 2.1rem;
                    height: 2.1rem;
                    border-radius: 0.3rem;
                                                       
                }
                .introduce {
                    display: block;
                    margin-top: 1.8rem;
                    font-size: 0.27rem;
                    line-height: 0.4rem;
                    width: 2.2rem;
                    color: black;
                }
                .playcount {
                    display: flex;
                    margin-top: -2.2rem;
                    padding-left: 0.08rem;
                    line-height: 0.5rem;
                    color: rgb(253, 244, 244);
                    font-size: 0.05rem;
                    font-weight: 1rem;
                    .icon {
                        width: 0.2rem;
                    }
                }
            }
        }
    }
</style>

