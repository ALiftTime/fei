<template>
    <div class="home page">
        <section>
            <div>
                <span class="iconfont">&#xe790;</span><input type="text" placeholder="搜索饿了么商家,商家名称">
            </div>
        </section>
        我叫啥 啊
         <button @click="d()">点击</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            b: true,
        }
    },
    created(){
       
    },
    methods:{
        d(){
            this.$router.push("login")
        }
    },
    
}
</script>

<style scoped>
    section{
        width: 100%;
        height: 1rem;
        background: skyblue;
        text-align: center;
        padding: 0 14px;
        display: flex;
        align-items: center;
    }
    section>div{
        width: 100%;
        height: 70%;
        background: white;
    }
    section>div>input{
        border: none;
        height: 100%;
        outline: none;
        cursor: text;
    }
</style>
