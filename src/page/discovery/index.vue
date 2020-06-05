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
        <div class="discovery-hot">
            <div class="hot-con">
                <div class="hot-le">
                    <div class="hot-nav">
                        <div class="hot-tj">
                            <a href="#" class="hot-a"> 热门推荐</a>
                        </div>
                        <div class="hot-kind">
                            <div class="hot-item">
                                <a href="#">华语</a>
                            </div>
                            <div class="hot-item">
                                <a href="#">流行</a>
                            </div>
                            <div class="hot-item">
                                <a href="#">摇滚</a>
                            </div>
                            <div class="hot-item">
                                <a href="#">民谣</a>
                            </div>
                            <div class="hot-item">
                                <a href="#">电子</a>
                            </div>
                            <span>
                                更多
                            </span>
                        </div>
                    </div>
                    <Imgcard />
                    <Newsongs></Newsongs>
                    <Songstop></Songstop>
                </div>
                <div class="hot-ri"></div>
            </div>
        </div>
    </div>
</template>
<script>
// 依次注入组件
import Banner from './banner.vue'
import Newsongs from './newsongs.vue'
import Songstop from './songstop.vue'
// 推荐歌曲-图片
import Imgcard from './Imgcard.vue'

export default {
    name:'discovery',
    components:{
        Banner,
        Imgcard,
        Newsongs,
        Songstop
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

    // 中部歌曲推荐部分
    .discovery-hot{
        width:100%;
        height:600px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-around;
        .hot-con{
            width:982px;
            background-color: #fff;
            .hot-le{
                width:729px;
                height:1300px;
                border-right: 1px solid #ccc;
                padding:20px 20px 40px;
                .hot-nav{
                    width:100%;
                    border-bottom:2px solid #C10D0C;
                    height:35px;
                    display: flex;
                    // line-height: 35px;
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
                    .hot-kind{
                        margin-top:4px;
                        margin-left:30px;
                        height: 20px;
                        width:100%;
                        display: flex;
                        position: relative;
                        div{
                            height: 20px;
                            padding:0 10px;
                            border-right:1px solid #ccc;
                            line-height: 20px;
                            a{
                                color:#666;
                                text-decoration: none;
                                font-size:12px;
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
                }
            }
        }
    }
}
</style>