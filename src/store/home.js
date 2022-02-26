import { reqCategoryList } from "@/api";
export default {
    state: {
        navList: [],
        currentIndex: -1,
    },
    getters: {
        getCurrentIndex(state) {
            return state.currentIndex;
        }
    },
    mutations: {
        categoryListHandler(state, categoryList) {
            state.navList = categoryList;
        },
        cIndex(state, index) {
            state.currentIndex = index;
        }
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
                context.commit('categoryListHandler', result.data)
            }
        }
    },
    modules: {
    }
}