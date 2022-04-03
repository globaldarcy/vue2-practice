import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/home/type-nav.vue"
import Carousel from '@/components/carousel'
import Pagination from '@/components/pagination'
import 'swiper/css/swiper.css'
import * as Api from '@/api'
import { Button, MessageBox } from 'element-ui';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/images/error.png',
    loading: '/images/loading.gif',
    attempt: 1,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: ['scroll']
})
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import '@/mock/mockServer';
// import { reqCategoryList } from "@/api";
// reqCategoryList();
Vue.component(TypeNav.name, TypeNav); // 全局组件
Vue.component(Carousel.name, Carousel); // 全局组件
Vue.component(Pagination.name, Pagination); // 全局组件

Vue.config.productionTip = false

new Vue({
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$api = Api;
    },
    render: h => h(App)
}).$mount('#app')

