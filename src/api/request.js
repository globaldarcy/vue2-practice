import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const instance = axios.create({
    // baseURL: 'http://39.98.123.211/api/product/getBaseCategoryList',
    baseURL: '/api',
    timeout: 5000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

const myInterceptor = instance.interceptors.request.use((config) => {
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
