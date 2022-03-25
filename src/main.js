import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/home/type-nav.vue"
import Carousel from '@/components/carousel'
import 'swiper/css/swiper.css'

import '@/mock/mockServer';
// import { reqCategoryList } from "@/api";
// reqCategoryList();
Vue.component(TypeNav.name, TypeNav); // 全局组件
Vue.component(Carousel.name, Carousel); // 全局组件

Vue.config.productionTip = false

new Vue({
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    render: h => h(App)
}).$mount('#app')

