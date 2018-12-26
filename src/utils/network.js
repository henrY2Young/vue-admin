import axios from 'axios';
import config from "../../config";
import {getToken} from './auth'

var instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 5000,
});

instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    if (getToken()) {
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['Authorization'] = getToken()
    } else {
        return 'miss token';
    }
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response;
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default instance;