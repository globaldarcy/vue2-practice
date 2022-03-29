import { reqCartList, reqCategoryList } from "@/api";

export default {
    namespaced: true,
    state: {
        cartList: [],
    },
    getters: {
        cartList(state) {
            return state.cartList[0] || {};
        }
    },
    mutations: {
        getCartListHandler(state, data) {
            state.cartList = data;
        }
    },
    actions: {
        async getCartList(context) {
            let result = await reqCartList();
            if (result.code === 200) {
                context.commit('getCartListHandler', result.data);
            }
        }
    }
}