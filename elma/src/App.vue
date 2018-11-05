<template>
  <div id="app">
      <header-com v-if="flag"></header-com>
      <router-view></router-view>
      <footer-com v-if="flag"></footer-com>
  </div>
</template>

<script>
import header from "./components/commit/header.vue";
import footer from "./components/commit/footer.vue";

export default {
    data(){
      return {
        flag: true ,
      }
    },
    components : {
      "header-com" : header,
      "footer-com" : footer
    },
    watch:{
      "$route"(){
        if(this.$route.name === "login"){
            this.flag = false;
        }else{
          this.flag = true;
        }
      }
    }
}
</script>

<style>
#app{
  width:100%;
  height: 100%;
}
.page{
  padding-top: 0.98rem; 
}
</style>
