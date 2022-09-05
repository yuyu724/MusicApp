<template>
  <TopNav/>
  <SwipeTop/>
  <Icolist/>
  <Recommend/>
</template>

<script>
// @ is an alias to /src    
import TopNav from '@/components/home/TopNav.vue';
import SwipeTop from '../components/home/swipeTop.vue';
import iconlist from '@/components/home/icolist.vue';
import recmusic from '@/components/home/recommend.vue';


    export default {
        name: 'Home',
        components: {
    TopNav,
    TopNav,
    SwipeTop,
    iconlist,
    recmusic,
    
},
    };
</script>
