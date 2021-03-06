import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";
export default {
    namespaced: true,
    state: {
        currentIndex: -1,
        navList: [],
        bannerList: [],
        floorList: [],
    },
    getters: {
        getCurrentIndex(state) {
            return state.currentIndex;
        }
    },
    mutations: {
        cIndex(state, index) {
            state.currentIndex = index;
        },
        categoryListHandler(state, categoryList) {
            state.navList = categoryList;
        },
        bannerListHandler(state, getBannerList) {
            state.bannerList = getBannerList;
        },
        floorListHandler(state, getFloorList) {
            state.floorList = getFloorList;
        },
    },
    actions: {
        // categoryList() {
        //     let result = reqCategoryList().then((res) => {
        //         console.log(res);
        //     },(err)=> err);
        // }
        async categoryList(context) {
            let result = await reqCategoryList();
            if (result.code === 200) {
                context.commit('categoryListHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getBannerList(context) {
            let result = await reqGetBannerList();
            if (result.code === 200) {
                context.commit('bannerListHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result);
        },
        async getFloorList(context) {
            let result = await reqGetFloorList();
            if (result.code === 200) {
                context.commit('floorListHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result);
        }
    }
}