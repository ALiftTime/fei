<template>
    <div class="footer">
        <ul>
            <li v-for="(item,index) in navs">
                <router-link :to="url[index]">
                    <div class="nav">
                        <p class="iconfont" :class="ico[index]"></p>
                        <p>{{item}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs: ["首页","商品","我的"],
            url: ["/home","/show","/my"],
            ico: ["icon-detail","icon-compass","icon-user"]
        }
    }
}
</script>

<style scoped>
    .footer{
        width: 100%;
        height: .98rem;
        background: cyan;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .footer>ul{
        display: flex;
        justify-content: space-around;
        height: .98rem;
    }
    .footer>ul>li{
        flex: 1;
        font-size: 16px;
        border-right:1px dashed white;
    }
    .footer>ul>li>a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .router-link-active{
        background: orange;
        color: #0089dc;
    }
    .nav{
        text-align: center;
    }
</style>
