<template>
    <div class="login">
        <img src="" alt="饿了么">
        <input type="text" v-model="valUse" @keydown="use">
        <button @click="getValidate()">获取验证码</button>
        <input type="text" v-model="valPaw">
        <p>新用户登录即自动注册,表示已同意 用户服务协议</p>
        <button @click="submit()">登录</button>
        <p>关于我们</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag:true,
            valPaw:"",
            valUse:"",
        }
    },
    methods:{
        submit(){
            console.log(this.valUse)
            console.log(this.valPaw)
        },
        getValidate(){
            console.log(1)
        },
        use(){
            const rel = /^1\d{10}$/ 
            if(rel.test(this.valUse)){
                console.log("成了")
            }
        }
        
    },
}
</script>

<style>

</style>
