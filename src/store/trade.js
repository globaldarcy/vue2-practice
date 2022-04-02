import { reqAddressInfo, reqOrderInfo } from "@/api";

export default {
    namespaced: true,
    state: {
        addressInfo: [],
        orderInfo: {},
    },
    getters: {
    },
    mutations: {
        getAddressInfoHandler(state, data) {
            state.addressInfo = data;
        },
        getOrderInfoHandler(state, data) {
            state.orderInfo = data;
        },
    },
    actions: {
        async getAddressInfo(context) {
            let result = await reqAddressInfo();
            console.log('getAddressInfo',result);
            if (result.code === 200) {
                context.commit('getAddressInfoHandler', result.data)
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getOrderInfo(context) {
            let result = await reqOrderInfo();
            console.log('getOrderInfo',result);
            if (result.code === 200) {
                context.commit('getOrderInfoHandler', result.data)
                return result.ok;
            }
            return Promise.reject(result.message);
        },
    },
    modules: {
    }
}