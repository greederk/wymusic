<template>
<div class=new-songs>
    <div class="hot-nav">
         <div class="hot-tj">
             <a href="#" class="hot-a"> 新碟上架</a>
         </div>
         <span>
             更多
         </span>
    </div>
    <div class="new-img">
        <div class="new-con">
            
                <div v-for="(item,index) in list.slice(0,5)" :key="index" class="new-box">
                    <img :src="item.picUrl" alt="" class="new-imgurl">
                    <span>{{item.name}}</span>
                    <!-- <p>{{item.song.aritists.name}}</p> -->
                </div>
           
        </div>
    </div>
</div>
</template>
<script>
import {getNewsongs} from '@/api'
export default {
    data(){
        return{
            list:[],
           
        }
    },
    async created(){
        const {result}  = await getNewsongs()
        this.list = result
       console.log(this.list)
       
    }
}
</script>
<style lang="scss" scoped>
.new-songs{
    width:100%;
    height: 243px;
   
}
    .hot-nav{
                    width:100%;
                    border-bottom:2px solid #C10D0C;
                    height:35px;
                    display: flex;
                    // line-height: 35px;
                    position: relative;
                    .hot-tj{
                            height:35px;
                            color:#000;
                            background: url('../../assets/img/index.png')  no-repeat;
                            width:100px;
                            padding:0 0 0 30px;
                            background-position:-228px  -158px;
                        a{
                            text-decoration: none;
                            font-size:20px;
                            line-height: 28px;
                            color:#000;
                        }
                    }
                  
                        span{
                            position: absolute;
                            right: 10px;
                            top:6px;
                            font-size: 12px;
                            color:#6666;
                            background:url('../../assets/img/index.png')  no-repeat;
                            background-position:27px -237px;
                            width:30px;
                            padding-right: 10px;
                        }
                    
                }
    .new-img{
        width:97%;
        height: 180px;
        border:1px solid #ccc;
       
        margin-top:10px;
        padding:10px 10px;
        .new-con{
            display:flex;
            width:100%;
            height: 150px;
            // flex-wrap: nowrap;
            overflow: hidden;
            justify-content: space-between;
            padding:20px 4px;
            .new-box{
                // 每一个图片
                width:110px;
                height: 150px;
                margin-right: 35px;
                .new-imgurl{
                    width:118px;
                    height: 110px;
                }
                span{
                    font-size:12px;
                }
            }
        }
    }
</style>