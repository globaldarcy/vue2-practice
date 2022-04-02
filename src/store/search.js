import { reqGetSearchInfo } from '@/api';

export default {
    namespaced: true,
    state: {
        searchList: {},
    },
    getters: {
        goodsList(state) {
            return state.searchList.goodsList || null;
        },
        trademarkList(state) {
            return state.searchList.trademarkList || null;
        },
        attrsList(state) {
            return state.searchList.attrsList || null;
        },
    },
    mutations: {
        getSearchListHandler(state, data) {
            state.searchList = data;
        },
    },
    actions: {
        async getSearchList(context, params) {
            let result = await reqGetSearchInfo(params);
            if (result.code === 200) {
                context.commit('getSearchListHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        }
    }
}