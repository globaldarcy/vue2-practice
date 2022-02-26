import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/home/type-nav.vue"
// import { reqCategoryList } from "@/api";
// reqCategoryList();
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

