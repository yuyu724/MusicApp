<template>
    <!--顶部组件-->
    <img :src="lyricitem.al.picUrl" alt="" class="bgimg">
    <div class="ItemTop">
        <div class="TopLeft">
            <svg class="icon" aria-hidden="true" @click="lyricShow" >
            <use xlink:href="#icon-back"></use>
            </svg>
        </div>

        <div class="topright">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
    </div>



    <!--歌词部分组件-->
    <div class="lyricmain">
        <div class="introduce">
            <p>{{lyricitem.name}}</p>
            <span v-for="item in lyricitem.ar" :key="item" >{{item.name}}</span>
            
        </div>

        <div class="word" ref="MusicLyric">
            <p v-for="item in splitLyric" :key="item" :class="{active:(currenttime * 1000>=item.time && currenttime *1000 <= item.pre)}">
            {{item.lrc}}
        </p>
        </div>
    </div>

    <div class="lyricbottom"  @click="btn" :style="active">
        <svg class="icon" aria-hidden="true" v-if="StopPlayIcon" @click="play">
            <use xlink:href="#icon-xiaomaomi"></use>
            </svg>

            <svg class="icon" aria-hidden="true" v-else @click="play">
            <use xlink:href="#icon-xiaotuzi"></use>
            </svg>
    </div>


</template>

<script>
     import { mapMutations, mapState } from 'vuex';  
    export default {
        data() {
            return {
                active: "",

            }
        },
       
        mounted() {
            //console.log(this.lyricitem);
            //console.log(this.lyriclist);
        },
        props: ['lyricitem', 'lyriclist', 'play', 'updatePlayIcon'],
        methods: {
            ...mapMutations(['lyricShow', 'lyriclist']),

            btn() {
                
                    this.active = "background-color:rgba(251, 235, 243, 0.723)"
                
               
            }
        },

        

        computed: {
            ...mapState(['currenttime', 'lyriclist']),
            splitLyric() { //将歌词切割成字符串，为的是去除不需要的字符
                 //先设置一个数组，最后将返回值放入该数组
                 let arr;
                if(this.lyriclist.lyric) {                   
                    //这个判断语句是因为我们预设的lyriclist在index,js中是一个空对象，如果发生获取不到数组的情况时，整个程序就会报错，为了避免这种情况的出现，我们提前设置只有拿到了歌词内容才开始做判断，
                    arr = this.lyriclist.lyric.split('\n').map((item, i)=> {
                        //map是会返回一个新的数组，故而我们在这里先进行分割出一个数组，然后再调用map进行循环，map就又会返回一个新的数组给arr
                        
                        let min = item.slice(1,3);
                        let sec = item.slice(4, 6);
                        let mill = item.slice(7, 10);
                        let lrc = item.slice(11, item.length);
                        //console.log(min, sec, Number(mill), lrc);
                        //我们只需要获取到时间并切割，但是毫秒位有的是三个都是数字，有的最后一位是]，
                        //所以我们就需要用Number()方法，先将毫秒的所有值都转化为数字类型，
                        //如果出现的结果是NaN,则说明此毫秒位有]，我们就要进行另一种切割长度

                        let time = parseInt(min)*60*1000 + parseInt(sec)*1000 + parseInt( mill);
                        //在audio属性中，有一个currenttime的属性用来代表当前播放歌词在歌曲中的时间，它是以毫秒数表示对，所以我们需要将
                        //min, sec都转化为数字型的毫秒数
                        if(Number(mill) == NaN) {
                                mill = item.slice(7, 9);
                                lrc = item.slice(10, item.length);
                                time = parseInt(min)*60*1000 + parseInt(sec)*1000 +parseInt( mill);
                        }

                        //console.log(min, sec, Number(mill), lrc);   
                        return {min, sec, mill, lrc, time}//将所有获得的数据都返回到一个对象里，需要什么就拿什么来用                
                        
                    })//利用正则表达式
                    arr.forEach((item, i) => {
                        if(i === arr.length-1) {
                            item.pre = 0//添加pre属性，如果item原本没有这个属性就直接添加，如果有这个属性就将其覆盖
                        }else {
                            item.pre = arr[i + 1].time//如果没有到最后一句，就令其属性等于下一句的时间
                        }
                    });
                }
                //console.log(arr);
                return arr
            }
        },
        watch: {
            currenttime: function() {
                let p = document.querySelector("p.active")
                console.log([p]);
                if(p.offsetTop >= 400) {
                    //console.log([this.$refs.MusicLyric]);
                    this.$refs.MusicLyric.scrollTop = p.offsetTop - 360
                }
            }
        },
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    .lyricmain {
        padding: 0.7rem;
        margin-top: 0.2rem;
        .introduce{
            display: flex;
            align-items: center;
            flex-direction: column;
            p {
                font-weight: 600;
                font-size: 0.4rem;
            }
            span{ 
                line-height: 0.6rem;
            }
        }
        .word{
            width: 100%;
            height: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.8rem;
            line-height: 0.7rem;
            overflow: scroll;
            p {
                color: rgb(94, 89, 89);
                margin-bottom: .2rem;
                padding: 0.1rem;
                font-size: 0.3rem;
            }
            .active {
                color: aliceblue;
                font-size: 0.32rem;
            }
        }
        
    }

    .lyricbottom {
        width: 1.1rem;
        height: 1.1rem;
        margin: 0.8rem 3.2rem ;
        background-color: rgba(250, 208, 229, 0.723);
        border-radius: 1rem;
        position: fixed;
        box-shadow: -0.5px 8px 1px rgba(29, 28, 28, 0.342);
            .icon {
                padding-left: 0.11rem;
                padding-top: 0.3rem;
                width: 1rem;
                height:1rem;
            }
            
    }
</style>