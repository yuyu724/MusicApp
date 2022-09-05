<template>
    <div class="TopNav">
       <div class="topRight">
         <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu"></use>
        </svg>
       </div>

        <div class="topContent">
            <span>我的</span>
            <span class="active">发现</span>
            <span>圈子</span>
            <span>播客</span>
        </div>
        
        <div class="topLeft">            
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo1"></use>
                </svg>
                
        

        </div>
        

        
    </div>
</template>


<script>
import { mapMutations,mapState } from 'vuex';


    export default {
    computed: {
        ...mapState(["showpop"]),
    },
    methods: {
        ...mapMutations(["updateshowPopup"])
    },
    
}
</script>


<style>
    .TopNav{
        
        width: 100%;
        height: 1rem;
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .TopNav .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 0.35rem;
    }
    .TopNav .topContent .active{
        font-weight: 900;
    }
</style>