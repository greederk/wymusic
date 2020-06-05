<template>
    <div class="discovery-main">
        <div class='discovery-con'>
            <div class='dis-banner'>
            
                <Banner  />
                <div class="downloadpng" >
                    <img src="@/assets/img/download.png" alt="" >
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import Banner from './banner.vue'
export default {
    name:'discovery',
    components:{
        Banner
    },
    data(){
        return{
            // backgroundImg:{
            //     backgroundImage:"url("+require("@/assets/img/download.png")+")",
            //     backgroundRepeat:'no-repeat',
            //     backgroundSize:'100% 100%'
            // }
        }
    }
}
</script>
<style lang="scss">
.discovery-main{
    width:100%;
    // align-items: ;
    .discovery-con{
        width:100%;
        display:flex;
        justify-content: space-around;
        background-color: #ebf0ef;
        .dis-banner{
            // display: flex; 
            // flex-wrap: nowrap;
            position: relative;
            width:982px;
           
            
            
            .downloadpng{
                overflow: hidden;
                float:right;
                position: absolute;
                right:0;
                top:0;
                height: 284px;
                img{
                    position: relative;
                }
            }
        }
        
    }
}
</style>