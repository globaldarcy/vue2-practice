import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import store from '@/store';

const instance = axios.create({
    // baseURL: 'http://39.98.123.211/api/product/getBaseCategoryList',
    baseURL: '/api',
    timeout: 5000,
});

const myInterceptor = instance.interceptors.request.use((config) => {
    if (store.state.detail.token) {
        config.headers.userTempId = store.state.detail.token;
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    NProgress.start();
    return config;
});

// instance.interceptors.request.eject(myInterceptor);

instance.interceptors.response.use((res) => {
    NProgress.done();
    return res.data;
}, (err) => {
    return Promise.reject(err);
});

export default instance;
