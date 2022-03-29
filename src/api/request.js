import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const instance = axios.create({
    // baseURL: 'http://39.98.123.211/api/product/getBaseCategoryList',
    baseURL: '/api',
    timeout: 5000,
});

const myInterceptor = instance.interceptors.request.use((config) => {
    /* if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token;
    } */
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
