import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import Register from "@/views/register"
// import Search from "@/views/search"
import Detail from "@/views/detail"
import AddCartSuccess from "@/views/add-cart-success"
import ShopCart from "@/views/shop-cart"
import Trade from "@/views/trade"
import Pay from "@/views/pay"
import PaySuccess from "@/views/pay-success"
import Center from "@/views/center"
import MyOrder from "@/views/center/my-order.vue"
import GroupOrder from "@/views/center/group-order.vue"
import store from '@/store'

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
        component: () => import('@/views/home'),
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
        component: () => import('../views/search'),
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
        meta: { show: true },
    },
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shop-cart') {
                next();
            } else {
                next(false);
            }
        },
    },
    {
        path: '/pay',
        name: 'pay',
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false);
            }
        },
    },
    {
        path: '/pay-success',
        name: 'pay-success',
        component: PaySuccess,
        meta: { show: true },
        // beforeEnter: (to, from, next) => {
        //     if (from.path == '/pay') {
        //         next();
        //     } else {
        //         next(false);
        //     }
        // },
    },
    {
        path: '/center',
        name: 'center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'my-order',
                component: MyOrder,
                meta: { show: true },
            },
            {
                path: 'group-order',
                component: GroupOrder,
                meta: { show: true },
            },
            {
                path: '/center',
                redirect: '/center/my-order'
            },
        ]
    },
    {
        path: '/communication',
        component: () => import('@/views/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('@/views/Communication/EventTest/EventTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'model',
                component: () => import('@/views/Communication/ModelTest/ModelTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'sync',
                component: () => import('@/views/Communication/SyncTest/SyncTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'attrs-listeners',
                component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'children-parent',
                component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'scope-slot',
                component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: {
                    isHideFooter: true
                },
            }
        ],
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

// 全局路由守卫
router.beforeEach((to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.name === 'login' || to.path == '/register') {
            next('/');
        } else {
            if (name) {
                next();
            } else {
                store.dispatch('user/getUserInfo')
                    .then((resolve) => {
                        console.log('userInfoMethod', resolve);
                        next();
                    })
                    .catch((err) => {
                        console.log(err);
                        store.dispatch('user/getLogout');
                    });
            }
        }
    } else {
        let toPath = to.path;
        if (toPath == '/trade' || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath);
        } else {
            next();
        }
    }
})

export default router
