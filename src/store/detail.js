import { reqGoodsInfo, reqUpdateShopCart } from "@/api";
import { getToken } from "@/utils/token";
export default {
    namespaced: true,
    state: {
        goodsInfo: {},
        imgIndex: 0,
        token: getToken(),
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
                context.commit('goodsInfoHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getUpdateShopCart(context, { skuId, sukNum }) {
            let result = await reqUpdateShopCart(skuId, sukNum);
            // let result = await reqUpdateShopCart('21', '10');
            // console.log(result);
            if (result.code === 200) {
                return result.ok
            }
            return Promise.reject(result.message);
        },
    },
    modules: {
    }
}