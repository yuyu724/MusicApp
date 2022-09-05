<template>
    <div class="iconlist">
       
            <div class="iconitem">           
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili1"></use>
            </svg>
            <span>每日推荐</span>
            </div>
       
            <div class="iconitem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diantai1"></use>
            </svg>
            <span>私人FM</span>
            </div>
      
            <div class="iconitem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-songlist-01"></use>
            </svg>
            <span>歌单</span>
            </div>
       
            <div class="iconitem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
            </div>           
    </div>

</template>

<style lang="less">
        .iconlist {
            margin-top: .3rem;
            width: 100%;
            height: 1.2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
                 
            .iconitem {
                width: 25%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                font-size: .2rem;
                font-weight: 500;
                margin-top: .15rem;
                .icon {
                    width: 1rem;
                    height: 0.6rem;
            }
        }
    }

   
    
</style>