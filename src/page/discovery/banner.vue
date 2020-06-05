<template>
    <div>
        <el-carousel :interval="3000" height="283.88px" arrow="always">
            <el-carousel-item v-for="banner in banners" :key='banner.scm'>
               <img :src="$utils.genImgUrl(banner.imageUrl, 730, 284)" class="banner-img">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import {getBanner} from '@/api'
export default {
    async created(){
        const { banners }  = await getBanner()
        this.banners = banners
       
    },
    data(){
        return{
            banners:[]
        }
    }
}
</script>
<style lang="scss" >
 
 .el-carousel__arrow{
     color:red;
 }
</style>