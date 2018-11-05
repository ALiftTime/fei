import Vue from "vue";
import Router from "vue-router";
import home from "../components/home/home.vue";
import show from "../components/show/show.vue";
import my from "../components/my/my.vue";
import login from "../components/login.vue";

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            name: "home",
            component: home,
        },
        {
            path:"/show",
            name: "show",
            component: show,
        },
        {
            path:"/my",
            name: "my",
            component: my,
        },
        {
            path:"/login",
            name: "login",
            component: login,
        },
    ]
})


router.beforeEach((to,from,next)=>{
    //登录状态
    let status = false;
    //所有路由组件的name名字
    const nextRouter = ["two","three","detail"];
  
    if(nextRouter.indexOf(to.name) >= 0){
      if(!status){
        router.push({name:"login"})
      }else{
        next();
      }
    }else{
      next();
    }
  })
  
  export default router;


//   <a href="javascript:;" class="index-1ryAh" data-spm-anchor-id="a2ogi.12075425.maininfo.1"><p><span class="index-2FmrF" data-spm-anchor-id="a2ogi.12075425.maininfo.i0" style="color: rgb(0, 152, 251);">0.00</span><span class="index-2V-Hh" style="color: rgb(0, 152, 251);">元</span></p><p class="index-3S6cZ">钱包</p></a>
//   <a href="javascript:;" class="index-1ryAh"><p><svg fill="#0098fb"><use xlink:href="#profile-balance"></use></svg></p><p class="index-3S6cZ">钱包</p></a>