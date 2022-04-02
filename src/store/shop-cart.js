import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

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
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async deleteCartById(context, skuId) {
            let result = await reqDeleteCartById(skuId);
            if (result.code === 200) {
                return result.ok
            }
            return Promise.reject(result.message)
        },
        async updateCheckedById(context, { skuId, isChecked }) {
            // console.log(skuId, isChecked);
            let result = await reqUpdateCheckedById(skuId, isChecked);
            if (result.code === 200) {
                return result.ok
            }
            return Promise.reject(result.message)
        },
        deleteAllCheckedCart(context) {
            let result = context.getters.cartList.cartInfoList.map(item => {
                if (item.isChecked == 1) {
                    return context.dispatch('deleteCartById', item.skuId);
                }
            });
            return Promise.all(result);
        }
    }
}