<template>
<div class="swipeTop">
    <van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in img.images" :key="image">
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>
</div>

</template>


<script>
//引入axios，用axios连接网易云音乐轮播图的api
import axios from 'axios'

//引入首页轮播图获取数据的方法
import { getBanner } from '@/request/api/firstPage';

//生命周期钩子如果想在组合式api里使用，需要先进行引入
import { reactive,onMounted } from 'vue';//reactive是为了将常量数组images改为响应式

export default {
  
  setup() {
    const img = reactive({ //这里的images开始只是设定的一个常量（const images =[]），无法收取到axios返回数据的赋值，所以要改为响应式
      images:[
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]});
    
    onMounted(async () => { //onMounted是一个方法，里面包http://localhost:8081含了一个箭头函数，如果我们想将生命周期与axios结合，则需要把操作写在这个onMounted函数里面
      //axios.get('http://localhost:3000/banner?type=2').then((res) => {
      //  console.log(res);
      //  console.log(img.images);
      //}) 
      //.catch((error)=> {
      //  console.log('error');
      //})   
      
      let res = await getBanner();
      img.images = res.data.banners//将返回的banner结果赋值给images
      console.log(res);
    })
    return { img };
  },
  
};

</script>

<style lang="less">
.swipeTop{
  
  .van-swipe {
    width: 100%;
    .van-swipe-item {
    padding: 0 0.3rem;    
    img { /*轮播图图片尺寸 */
      width: 100%;
      height: 3rem;
      border-radius: 10px;
  }
  }
  .van-swipe__indicator--active {
      background-color: rgb(173, 194, 208);
      height: 0.04rem;
      width: 0.2rem;
      border-radius: 2px;
 }
 .van-swipe__indicator {
      height: 0.04rem;
      width: 0.2rem;
      border-radius: 2px;
 }
  }
  
}
</style>