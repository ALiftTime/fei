<template>
    <div class="my page">
        <div class="loginRegister">
            <ul>
                <li class="loginPig iconfont icon-logout"></li>
                <li>
                    <p>登录/注册</p>
                    <p><span class="iconfont icon-location"></span>登录后享受更多特权</p>
                </li>
                <li class="iconfont icon-left-circle"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loginRegister{
        width:100%;
        height: 2rem;
        background: skyblue;
    }
    .loginRegister>ul{
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 5%;
        color: white;
    }
    .loginRegister>ul>li:nth-child(1){
        width: 20%;
        height: 60%;
        font-size: 64px;
    }
    .loginRegister>ul>li:nth-child(2){
        width: 60%;
        height: 60%;
        padding-left: 8px;
    }
    .loginRegister>ul>li:nth-child(2)>p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
        padding-top: 10px;
    }
    .loginRegister>ul>li:nth-child(2)>p:nth-child(2){
        padding-top: 6px;
    }
    .loginRegister>ul>li:nth-child(3){
        width: 20%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
</style>
