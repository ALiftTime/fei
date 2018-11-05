<template>
    <div class="header">
        <div v-show="flag"><p class="iconfont">&#xe790;</p><p>{{location}}</p></div>
        
        <div v-show="!flag"><p class="iconfont icon-left-circle"  @click="handleBack()"></p><h4>{{title}}</h4></div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            location : "正义路北京市人民路什么什么",
            flag: true,
            title : "",
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        },
    },
    watch:{
        "$route"(){
            if(this.$route.name === "home"){
                this.flag = true;
            }else if(this.$route.name === "show"){
                this.flag = false;
                this.title = "订单";
            }else{
                this.flag = false;
                this.title = "我的";
            }
        }
    },
    created(){
            switch(this.$route.name){
                case "home" :
                    this.flag = true;
                    break;
                case "show" :
                    this.flag = false;
                    this.title = "订单";
                    break;
                case "my" :
                    this.flag = false;
                    this.title = "我的";
                    break;
            }
    }      
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 1rem;
        background: skyblue;
        font-size: 20px;
        text-align: center;
        line-height: 1rem;
        position: fixed;
        top: 0;
        left: 0;
    }
    .header>div{
        display: flex;
        padding-left:.3rem;
        color: white;
    }
    .header>div>p:nth-child(1){
        font-size: 20px;
        cursor: pointer;
    }
    .header>div>p:nth-child(2){
        overflow: hidden;
        font-size: 16px;
        width: 40%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .header>div>h4{
        width: 90%;
        text-align: center
    }
</style>
