<template>
    <div class="itemMusicTop">
        <!--歌单详情页背景，即歌单图片的虚化覆盖-->
        <img :src="playList.coverImgUrl" alt="" class="bgimg">

        <div class="TopLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <!--
            <span>歌单</span>是绑定一个点击的事件，利用路由go(-1),即返回上一页-->
            <use xlink:href="#icon-back"></use>
            </svg>
            <span>歌单</span>
        </div>

        <div class="TopRight">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
            </svg>

            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-elipsis"></use>
            </svg>            
        </div>       
            <img :src="playList.coverImgUrl" alt="" class="itemimg">
        <div class="items">
            <Vue3Marquee>
                <span class="introduce">{{playList.name}}</span>   
            </Vue3Marquee>
            <span v-if="playList.creator" class="author">
                
                {{playList.creator.nickname}}
            </span>
            <!--这里的playList是state管理的数据，异步调用显示，在vue渲染机制中“异步数据先显示初始数据，再显示带数据的数据，所以返回的是一个空对象，故而要用v-if绑定”-->
            <span v-if="playList.description" class="intro">{{intro(playList.description) + '...'}}
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-more"></use>
                </svg>
            </span>
        </div>       
    </div>

    <div class="musicMedium">
        <div class="Topicon">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-favorites"></use>
            </svg>
            
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icondownload"></use>
            </svg>
            
        </div>
    </div>
    

</template>

<script>
    import { Vue3Marquee } from 'vue3-marquee'
    import 'vue3-marquee/dist/style.css'
    
    export default {
        components: {
            Vue3Marquee,
        },
        setup(props){
            console.log(props);
            //本来通过props传值，但是因为担心数据丢失，所以需要判断，如果数据丢失，就要用sessionStorage数据
            function intro(str) {                
                return str.substring(0,12);            
           
         }
         return { intro }
        },
        props:['playList'],
       
    }
</script>

<style lang="less">
    .itemMusicTop {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        
        .TopLeft{
            width: 23%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            margin: 0 .2rem;
            span {
                font-size: .4rem;
                font-weight: 100;
                color: aliceblue;
            }
            .icon {
                fill: aliceblue;

            }
        }
        .TopRight {
            width: 17%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 .2rem;
            .icon {
                fill: aliceblue; //图标填充颜色，用于改变图标颜色
            }
        }
        .bgimg {
            width: 100%;
            height: 11rem;
            position: fixed; //浮动，消除文档流，固定定位，父级元素添加position: relative;
            z-index: -1; //消除覆盖，让下面被遮盖的元素展示出来
            filter: blur(0.5rem);//背景虚化
        }
        .itemimg {
            width: 2.45rem;
            height: 2.45rem;
            margin-top: 2rem;
            margin-left: 0.22rem;
            position: fixed;
            border-radius: 0.3rem;
            box-sizing: border-box;
            position: absolute;
        }
        .items {
            display: flex;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-left: 2.8rem;
            padding: 0.2rem;
            position: fixed;
            text-align: justify;   
            position: absolute;  
            .introduce {               
                margin-top: 4rem;
                font-size: .37rem;
                font-weight: 100;
                color: aliceblue;
                display: inline-block;
            }
            .author{               
               margin-top: .2rem;
               font-size: .33rem;
               font-weight: 500;
               color: rgb(187, 194, 198);
               display: inline-block;
               margin-left: -1rem;

            }
            .intro {
                font-size: .28rem;
                font-weight: 100;
                color: rgb(220, 223, 225);
                margin-top: .2rem;
                margin-left: -.3rem;
                display: flex;
                
                .icon {
                    fill: aliceblue;
                    margin-left: .1rem;
                }
            }
        }
    }

    .musicMedium {
        box-sizing: border-box;
        border: 1px solid rgba(221, 218, 218, 0.219);
        height: 1.2rem;
        margin-left: 0.35rem;
        margin-right: 0.35rem;
        margin-top: 3.3rem;
        border-radius: 1rem;
        background-color: rgba(230, 223, 223, 0.476);
        
        .Topicon {
            fill: aliceblue;
            display: flex;
            justify-content: space-between;
            padding-top: 1.34rem; 
            padding-left: 0.6rem;
            padding-right: 0.6rem;           
            .icon {
                margin-top: -1rem;
            }
        }
    }
    
</style>