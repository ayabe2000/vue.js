import {createRouter,createWebHashHistory} from "vue-router"
import Home from '@/view/HomePage.vue'
import About from '@/view/AboutPage.vue'
import NotFound from '@/view/NotFoundPage.vue'

const routes = [
    {path:'/',component:Home},
    {path:'/about',component:About},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router