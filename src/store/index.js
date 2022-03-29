import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopCart from "./shop-cart";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopCart
    }
});

// export default new Vuex.Store({
//     state: {
//     },
//     getters: {
//     },
//     mutations: {
//     },
//     actions: {
//     },
//     modules: {
//     }
// })
