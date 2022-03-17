/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-08-09 13:44:52
 * @LastEditors: qiaowb
 */
import axios from 'axios';
import cookie from 'js-cookie';
import { getCookieOption } from '@util/index.js';
// axios请求
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
// IE取消缓存
axios.defaults.headers.get['Cache-Control'] = 'no-cache';
axios.defaults.headers.get['Pragma'] = 'no-cache';
axios.defaults.timeout = 60000;
axios.defaults.baseURL = process.env.BASE_URL || '';
const systemType = process.env.systemType;
const tokenKeys = {
    'zcgl': '', // --TYPE=zcgl  资产管理 主站
    'yf': 'zg_customer_token', // --TYPE=yf    应付端 二级集团
    'ys': 'zg_manager_token', // --TYPE=ys    应收端 物流
    'zj': 'zg_customer_token' // --TYPE=zj    资金端 白条资金方
};

const authorizationWhiteList = [
];
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    let token = tokenKeys[systemType] ? cookie.get(tokenKeys[systemType]) : ''; // 根据不同系统获取相对应的token
    let configUrl = config.url.split('?')[0].replace('/apiGateWay', '');
    if (token && !authorizationWhiteList.includes(configUrl)) {
        config.headers.Authorization = `Tiec ${token}`;
        // config.headers.Authorization = 'Tiec azgqiivxeu/h2hf1S+YVMeTDj9UKoX7uvpyFXdjF2Aw5MrRVrtMSqWEV+wGGXfdfsudvbqBoswYdZdC0Y63MHgYOPn8anKxH5Q0EqVkqfEAf61gbMZvg/BT0Tu3YWTM6jVsAPRh1IUUVSmc1Tb5LancaewaGWpibKufztZFh4xw=';
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.error('请求出错');
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    /**
     * code=3003 Invalid token
     * code=3005 Token will expire
     */
    if ((response.data.code === 3005 || response.data.code === 3003)) {
        // location.href = `${process.env.UC_BASE_URL}/login?backurl=${window.escape(location.href)}`;
        response.data.code === 3005 && (location.href = `${response.data.data}`);
        return Promise.reject(response);
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    // console.error('接口响应异常：', { ...error.response });
    return Promise.reject(error.response);
});

export const axiosSubmit = axios;

/**
 * ## 删除cookie
 * @param {string} name cookie 名称
 */
export const removeCookie = (name) => {
    let option = getCookieOption();
    cookie.remove(name, option); // 没有单点登录之前，征信和票据cookie使用不同名称
};