import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const instance = axios.create({
    baseURL: '/mock',
    timeout: 5000,
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
