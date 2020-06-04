<template>
    <div>
        <el-carousel :interval="3000" height="283.88px">
            <el-carousel-item v-for="banner in banners" :key='banner.scm'>
               <img :src="$utils.genImgUrl(banner.imageUrl, 1000, 283.88)" class="banner-img">
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
        console.log(this.banners)
    },
    data(){
        return{
            banners:[]
        }
    }
}
</script>
<style lang="scss" >
   .banner-img{
    //    width:
   } 
</style>