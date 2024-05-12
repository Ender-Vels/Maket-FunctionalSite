import {createRouter,createWebHistory} from "vue-router";
import HomeBlock from "../components/HomePage/HomeBlock.vue";
import WhyUs from "../components/WhyUs/WhyUs.vue";



let router=createRouter({
    history:createWebHistory(),

    scrollBehavior(to,from,savedPosition){
        console.log(savedPosition)
        if(savedPosition){
            return savedPosition
        }
        else if(to.hash){
            return to.hash
        }
        else{
            return {
                x:0,
                y:0,
            }
        }
    },
    routes:[
        {
            path:'/',
            component:HomeBlock,
        },
        {
            path:'/about',
            name:'about',
            component:WhyUs,
        },

    ],

})

export default router;