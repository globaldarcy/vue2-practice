import { reqGoodsInfo, reqUpdateShopCart } from "@/api";
export default {
    namespaced: true,
    state: {
        goodsInfo: {},
        imgIndex: 0,
    },
    getters: {
        categoryView(state) {
            return state.goodsInfo.categoryView || {};
        },
        skuInfo(state) {
            return state.goodsInfo.skuInfo || {};
        },
        spuSaleAttrList(state) {
            return state.goodsInfo.spuSaleAttrList || [];
        }
    },
    mutations: {
        goodsInfoHandler(state, data) {
            state.goodsInfo = data;
        },
        changeImgIndexHandler(state, i) {
            state.imgIndex = i;
        }
    },
    actions: {
        async getGoodsInfo(context, productId) {
            let result = await reqGoodsInfo(productId);
            if (result.code === 200) {
                context.commit('goodsInfoHandler', result.data)
            }
        },
        async getUpdateShopCart(context, skuId, sukNum) {
            let result = await reqUpdateShopCart(skuId, sukNum);
            console.log(result);
            if (result.code === 200) {
                return result.ok
            }
            return Promise.reject(result.message);
        },
    },
    modules: {
    }
}