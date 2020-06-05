<template>
   <div>
        <div class="header-container">
           <div class="header-center">
               <h1 class="logo">
                   <a href="#"></a>
               </h1>


               <div class="header-nav">
                   <div v-for='(item,index) in headerNav' :key='index' :class='{active:index==isActive}'  @mouseover="mouseOver($event,index)"
                    @click="tonext($event,index)">
                        <a href="#" >{{item}}</a>
                        <span :class="{spanactive:index==spanisactive}"></span>
                   </div>
               </div>
               <div class="hot">
               </div>

                <el-input
                    size="medium"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="input2">
                </el-input>
           </div>
         </div>

         <div class="redNav">
             <div class="red-main">
                 <div class="red-cl"></div>
                 <div class="red-content">
                     <div v-for="(item,index) in redNav" :key='index'>
                         <a href="#">{{item}}</a>
                         
                     </div>
                 </div>
             </div>
         </div>
      
   </div>
</template>
<script>


export default {
    components:{
       
    },
    data(){
        return{
            isActive:0,
            spanisactive:0,
            input2:'',
            headerNav:['发现音乐','我的音乐','朋友','商城','音乐人','下载客户端'],
            redNav:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
        }
    },
    methods:{
        mouseOver(e,index){
            
            this.isActive= index
        },
        tonext(e,index){
            this.spanisactive = index
        }
    },
    created(){
        // confirm('出错了')
    }
}
</script>
<style lang="scss">
.header-container{
    width:100%;
    height: 70px;
    background: #242424;
    display: flex;
     justify-content: space-around;
    .header-center{
        display:flex;
        margin:0 auto;
        align-items: center;
        width:1100px;
        // min-width:1100px;
        height: 100%;
        .logo{
            background:url('../assets/img/topbar.png') no-repeat;
            background-position: 0 0;
            width:176px;
            height: 69px;
        }
        .header-nav{
            display: flex;
           
            div{
                height: 70px;
                display: flex;
                // align-items: flex-end;
                text-align: center;
                flex-direction:column;
                justify-content:center;
                align-items: center;
                position: relative;
                a{
                    padding:0 19px;
                    font-size:14px;
                    text-decoration:none;
                     color:#ccc;
                    //  height: auto;
                }
                 span{
                       
                    }
            }
        }
        .hot{
            background:url('../assets/img/topbar.png') no-repeat;
            background-position: -192px 0;
            height:27px;
            width:30px;
        }
    }
   
}
.redNav{
        width:100%;
        height: 35px;
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
        display: flex;
        justify-content: space-around;
        .red-main{
            width:1100px;
            display:flex;
            .red-cl{
                 width:176px;
                 height: 35px;
            }
            .red-content{
                display: flex;
                div{
                    display: flex;
                    padding:0 17px;
                    align-items: center;
                    position: relative;
                    a{
                        margin:0 10px;
                        font-size:13px;
                        color:#fff;
                        text-decoration: none;
                        // 只给a设宽度
                        // width:50px;
                    }
                   
                }
            }
        }
}
// a标签被鼠标移入选中时 
.active{
    background-color: #000;
    // width:0px;
    // height:0px;
    // border: 10px ;
    // border-color:transparent transparent #C20C0C  transparent;
    a{
        color:#ffffff !important;
    }
}
// a标签被点击时
.spanactive{
    z-index:10;
    width:0px;
    height:0px;
    top:60px;
    position: absolute;
    border-top:5px solid transparent;
    border-right:5px solid transparent;
    border-bottom:5px solid #C20C0C;
    border-left:5px solid transparent;
}
</style>
<style lang="scss" scoped>
.el-input--medium{
    width:158px;
    height:32px;
    // border-radius: 10px;
}
 /deep/ .el-input__inner{   /*或者 .s2>>>.el-input__inner  */
    // background:rgba(0,0,0,0.2);    /*调整inner的背景色，透明*/
    height: 200px;    /*调整inner的高度*/
    border-radius: 20px;    /*输入框圆角值*/
  }

</style>