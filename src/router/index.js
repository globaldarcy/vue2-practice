import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import Register from "@/views/register"
// import Search from "@/views/search"
import Detail from "@/views/detail"
import AddCartSuccess from "@/views/add-cart-success"
import ShopCart from "@/views/shop-cart"

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) {
        return originPush.call(this, location, resolve, reject);
    }
    return originPush.call(this, location).catch((err) => err);
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve || reject) {
        return originReplace.call(this, location, resolve, reject);
    }
    return originReplace.call(this, location).catch((err) => err);
}

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
        component: () => import(/* webpackChunkName: "about" */ '../views/search'),
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
        path: '/detail/:productId',
        name: 'detail',
        component: Detail,
        meta: { show: false },
    },
    {
        path: '/add-cart-success',
        name: 'add-cart-success',
        component: AddCartSuccess,
        meta: { show: true },
    },
    {
        path: '/shop-cart',
        name: 'shop-cart',
        component: ShopCart,
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

export default router
