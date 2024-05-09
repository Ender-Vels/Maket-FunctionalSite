import {createRouter,createWebHistory} from "vue-router";
import HomeBlock from "../components/HomePage/HomeBlock.vue";



let router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:HomeBlock,
        }
    ]
})

export default router;