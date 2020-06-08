<template>
    <div >
        <div class="sing-login">
            <div>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
             <el-button type="danger" size='small'>用户登录</el-button>
        </div>
        <div class="sing-main">
            <div class="sing-singer">
                <div>入住歌手</div>
                <div>查看全部&nbsp;&nbsp;></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .sing-login{
        padding:20px 20px;
        display:flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        width:211px;
        // 渐变色
        background: linear-gradient(#fff, 50%, #ccc);

        border-bottom:1px solid #ccc;
        box-shadow: 0 1px 0px #a09494;
        div{
            font-size: 12px;
            color:#3f4956fc;
            margin-bottom:20px;
        }
    }
    .sing-main{
        background-color:#fff;
        padding:15px;
        .sing-singer{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            
            div{
                margin:10px 0;
                font-size:12px;
                font-weight: 400;
            }
        }
    }
</style>