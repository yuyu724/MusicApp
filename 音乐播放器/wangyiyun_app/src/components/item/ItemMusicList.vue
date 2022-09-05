<template>
    <div class="MusicItem">
        <div class="ListTop">
            <div class="TopLeft">
                <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang5"></use>
            </svg>
            <span>
                播放(共15首)
            </span>
            </div>

            <div class="TopRight">
                <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiahao_o"></use>
            </svg>
            <span>
                收藏({{subscribedCount}})
            </span>
            </div>
        </div>

        <div class="ListBody">
            <div class="list" v-for="(item, i) in MusicList" :key="i">
                <div class="listLeft"  @click="playMusic(i)" > <!--这个i就是获取的歌单里面歌曲的索引，获取这个索引才可以在切换完歌单后点击列表里面的歌播放-->
                    <span id="listIndex">{{ i + 1 }}</span>

                    <div class="main">
                        <p>{{ item.name }}</p>
                        <span id="listName" v-for="(item1, index) in item.ar" :key="index">
                        {{item1.name}}
                    </span>
                    </div>
                    
                </div>


                <div class="listRight">
                    <svg class="icon" aria-hidden="true"  v-if='item.mv !=0'>
                    <use xlink:href="#icon-i8homem-"></use>
                    </svg>

                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduo"></use>
                    </svg>
                </div>

                <div class="split">
                    <hr>
                </div>
            </div>
                
                
                
            </div>

        </div>

</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        setup(props) {
            console.log(props);
           
        },
       
        props: ['MusicList', 'subscribedCount'],
        methods: {
            playMusic:function(i) {
                this.updatePlayList(this.MusicList);
                this.updatePlayListIndex(i)
            },
            ...mapMutations(['updatePlayList', 'updatePlayListIndex']),
                        
        }}
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        
    }
.MusicItem {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: rgba(188, 203, 204, 0.39);
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    .ListTop {
        display: flex;
        justify-content: space-between;
        text-align: center;
        span {
            text-align: center;
        }
    }

    .ListBody {
        margin-top: 0.4rem;
        
        .listLeft {
            display: flex;
            padding-top: 0.5rem;
            #listIndex {
                margin-top: 0.35rem;
                font-size: 0.38rem;
            }
            .main {
                padding-left: 0.43rem;
                line-height: 0.5rem;
                letter-spacing: 0.04rem;
                p {
                    font-size: 0.35rem;
                    font-weight: 500px;
                }
                #listName {
                    font-size: 0.25rem;
                    color: rgb(132, 133, 134);
                    font-weight: 500px;
                }
            }
        }

        .listRight {
           margin-top: -0.8rem;
            float: right;
        }
    }

    .split {
        padding-top: 0.2rem;
        margin-bottom: -0.3rem;
        hr {
        border-color:rgb(157, 142, 125);
        border: 0.5px solid rgb(157, 142, 125);
        }
    }
}



</style>