import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopCart from "./shop-cart";
import user from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopCart,
        user
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
