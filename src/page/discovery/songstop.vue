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
            
                <div class=top-1></div>
                <div class=top-2></div>
                <div class=top-3></div>
            
        </div>
    </div>
</template>
<script>
export default {
    
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
        display:flex;
        .top-1{
            width:33%;
            height: 472px;
            border-right: 1px solid #ccc;
        }
        .top-2{
            width:33%;
            height: 472px;
            border-right: 1px solid #ccc;
        }
      
    }
 
 }
</style>