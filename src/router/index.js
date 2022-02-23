import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Register from "@/views/Register"
// import Search from "@/views/Search"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { show: false },
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Search/index.vue'),
        meta: { show: true },
        // props: true,
        // props: {
        //     a:1,
        //     b:2
        // }
        props: route => ({
            query: route.query.k,
            params: route.params.keyword,
        })
    },
    {
        path: '*',
        // redirect: '/',
        redirect: {
            name: 'home'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
