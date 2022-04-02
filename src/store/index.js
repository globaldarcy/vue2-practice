import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopCart from "./shop-cart";
import user from "./user";
import trade from "./trade";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopCart,
        user,
        trade,
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
