import { reqGetCode, reqGetCodeMock, reqRegister, reqLogin, reqUserInfo, reqLogout } from "@/api";
export default {
    namespaced: true,
    state: {
        codeNum: '',
        codeNumMock: '',
        token: sessionStorage.getItem('token'),
        userInfo: {},
    },
    getters: {
    },
    mutations: {
        getCodeHandler(state, data) {
            state.codeNum = data;
        },
        getCodeMockHandler(state, data) {
            state.codeNumMock = data;
        },
        getLoginHandler(state, data) {
            state.token = data.token;
        },
        getUserInfoHandler(state, data) {
            state.userInfo = data;
        },
        clear(state) {
            state.token = '';
            state.userInfo = {};
            sessionStorage.removeItem('token');
        },
    },
    actions: {
        async getCode(context, phone) {
            let result = await reqGetCode(phone);
            console.log(result);
            if (result.code === 200) {
                context.commit('getCodeHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getCodeMock(context, phone) {
            let result = await reqGetCodeMock(phone);
            console.log(result);
            if (result.code === 200) {
                context.commit('getCodeMockHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getRegister(context, data) {
            let result = await reqRegister(data);
            console.log(result);
            if (result.code === 200) {
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getLogin(context, data) {
            let result = await reqLogin(data);
            console.log('getLogin', result);
            if (result.code === 200) {
                sessionStorage.setItem('token', result.data.token)
                context.commit('getLoginHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getUserInfo(context) {
            let result = await reqUserInfo();
            console.log('getUserInfo', result);
            if (result.code === 200) {
                context.commit('getUserInfoHandler', result.data);
                return result.ok;
            }
            return Promise.reject(result.message);
        },
        async getLogout(context) {
            let result = await reqLogout();
            console.log('getLogout', result);
            if (result.code === 200) {
                context.commit('clear');
                return result.ok;
            }
            return Promise.reject(result.message);
        },
    },
    modules: {
    }
}
