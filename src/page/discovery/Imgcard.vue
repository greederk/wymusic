<template>
    <div class="img-main">
        
            <div v-for="(item,index) in personalizedlist" :key='index' class="img-box">
                <img :src="item.picUrl" alt="" class="image">
                <span class="title">{{item.name}}</span>
            </div>
       
    </div>
</template>
<script>
// 获取首页推荐图片 api descovery.js
import {getPersonalized} from '@/api'
export default {
    async created(){
        const { result } = await getPersonalized({limit:8})
        // 用async  确保 await 后面的函数得到结果之后再执行下面的代码
        this.personalizedlist = result
        console.log(this.personalizedlist)
    },
    data(){
        return{
            personalizedlist:[],
           
        }
    }

}
</script>
<style lang="scss" scoped>
.img-main{
    width:100%;
    padding:20px 0 0 0;
    height: 430px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}
.img-box{
    width:140px;
    // flex-wrap: wrap;
    height: 185px;
    margin-right:10px;
    .image{
        width:140px;
        height: 140px;
    }
    .title{
    font-size:14px;
    }
}




</style>