import { reqCartList, reqCategoryList } from "@/api";

export default {
    namespaced: true,
    state: {
        cartList: [],
    },
    getters: {
    },
    mutations: {
        getCartListHandler(state, data) {
            state.cartList = data;
        }
    },
    actions: {
        async getCartList(context) {
            let result = await reqCartList();
            console.log(result);
            if (result.code === 200) {
                context.commit('getCartListHandler', result.data);
            }
        }
    }
}