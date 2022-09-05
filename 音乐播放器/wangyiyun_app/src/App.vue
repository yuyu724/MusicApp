<template>
     <nav>
  </nav>
  <router-view/>
  <div>
    <FooterMusic></FooterMusic>
  </div>
</template>

<script>

  import FooterMusic from "./components/item/FooterMusic.vue"
  export default {
    components: {
    FooterMusic,
}
  }

</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; //设置为怪异盒子，这样的话内边距就不会撑开盒子
    
  }

  .icon{
    width: 0.5rem;
    height: 0.5rem;
  }

  
</style>

