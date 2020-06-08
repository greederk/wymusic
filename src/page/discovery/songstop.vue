<template>
    <div class="song-top">
        <div class="hot-nav">
            <div class="hot-tj">
                <a href="#" class="hot-a"> 榜单</a>
            </div>
            <span>
                更多
            </span>
        </div>
        <div class="top-con">
            
                <div class=top-1>
                    <div class="biaoshen-box1">
                        <img src="@/assets/img/18696095720518497.jpg" alt="">
                        <div class="biaoshen-box1main">
                            <a href="">云音乐飙升榜</a>
                            <div>
                            <i class="el-icon-video-play"></i>
                            <i class="el-icon-folder-add"></i>
                            </div>
                        </div>
                    </div>
                    <div class="biaoshen-box2">
                     <ul >
                         <li v-for="(item,index) in tableData.slice(0,10)" :key='index'>
                             <span class=top-li>{{index+1}}</span>
                             <span >{{item.name}}</span>
                         </li>
                         <li>
                             <span class="next-span">更多></span>
                         </li>
                     </ul>
                    </div>
                </div>
                <div class=top-1>
                    <div class="biaoshen-box1">
                        <img src="@/assets/img/18713687906568048.jpg" alt="">
                        <div class="biaoshen-box1main">
                            <a href="">云音乐新歌榜</a>
                            <div>
                            <i class="el-icon-video-play"></i>
                            <i class="el-icon-folder-add"></i>
                            </div>
                        </div>
                    </div>
                    <div class="biaoshen-box2">
                     <ul >
                         <li v-for="(item,index) in tableData1.slice(0,10)" :key='index'>
                             <span class=top-li>{{index+1}}</span>
                             <span >{{item.name}}</span>
                         </li>
                         <li>
                             <span class="next-span">更多></span>
                         </li>
                     </ul>
                    </div>
                </div>
                <div class=top-1>
                    <div class="biaoshen-box1">
                        <img src="@/assets/img/18740076185638788.jpg" alt="">
                        <div class="biaoshen-box1main">
                            <a href="">网易原创歌曲榜</a>
                            <div>
                            <i class="el-icon-video-play"></i>
                            <i class="el-icon-folder-add"></i>
                            </div>
                        </div>
                    </div>
                    <div class="biaoshen-box2">
                     <ul >
                         <li v-for="(item,index) in tableData2.slice(0,10)" :key='index'>
                             <span class=top-li>{{index+1}}</span>
                             <span >{{item.name}}</span>
                         </li>
                         <li>
                             <span class="next-span">更多></span>
                         </li>
                     </ul>
                    </div>
                </div>
            
        </div>
    </div>
</template>
<script>
import {getTotop} from '@/api';
import {getNewsongtop} from '@/api';
import {getFirstsongs} from '@/api';
export default {
    data(){
        return{
            tableData:[],
            tableData1:[],
            tableData2:[]
        }
    },
    async created(){
        var  {playlist} = await getTotop()
        this.tableData = playlist.tracks
       
        this.getnew()
        this.getfirst()
        
        // this.tableData1 = p2.tracks
        // this.tableData2 = p3.tracks
       
    },
    methods: {
       async  getnew(){
            var {playlist} =await getNewsongtop()
            this.tableData1 = playlist.tracks
        },
        async getfirst(){
            var {playlist} =await getFirstsongs()
            this.tableData2 = playlist.tracks
        }
    },
   
    
}
</script>
<style lang="scss" scoped>
 .song-top{
     width:100%;
     height: 527px;
    //  background-color: #ccc;
     margin-top:50px;
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
    .top-con{
        margin-top:20px;
        width:100%;
        height: 472px;
        border:1px solid #ccc;
        border-right:0;
        display:flex;
        .top-1{
            width:33.5%;
            height: 472px;
            border-right: 1px solid #ccc;
            .biaoshen-box1{
                height: 80px;
                padding:20px;
                display:flex;
                justify-content: left;
                 img{
                    width:80px;
                  
                    }   
                .biaoshen-box1main{
                    padding:10px;

                    a{
                        font-size: 14px;
                        font-weight: 700;
                        color:#000;
                        text-decoration: none;
                    }
                    div{
                          margin-top: 10px;  
                        i{
                             font-size:25px;
                             margin-right: 10px;
                             color:#ccc;   
                         }
                    }
                }
                
            }
            .biaoshen-box2{
                ul{
                    padding:0;
                    margin:0;
                    list-style:none;
                    li:nth-of-type(odd){
                        background: #e8e8e8;
                    }
                    li:nth-of-type(even){
                        background: #f4f4f4;
                    }
                    li{
                        height: 32px;
                        width:100%;
                        padding:0;
                        margin:0;
                        font-size: 13px;
                        display:flex;
                        align-items: center;
                        .top-li{
                            margin:0px 10px 0px 30px;
                        }
                        .next-span{
                            margin-left:177px;
                        }
                    }
                }
            }
        }
        .top-2{
            width:33%;
            height: 472px;
            border-right: 1px solid #ccc;
        }
      
    }
 
 }
a:hover{
    text-decoration: underline;
}
</style>
<style lang="scss">

</style>