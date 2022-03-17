/**
 * @Description: 支付记录
 * @Author: qiaowb
 * @Date: 2022-01-26 10:25:42
 * @LastEditors: hansl-a
 */

import { axiosSubmit } from '@api/axios.js';
const axiosUrlWebapp = process.env.AXIOS_URL_WEBAPP;

/** ------------------  支付记录  ----------------- */
/**
 * ## 支付记录 - 筑信
 * @param {*} params 
 * @returns 
 */
export const queryPaymentRecordList = (params) => axiosSubmit.get(`${axiosUrlWebapp}/pay/trans_list`, { params });
/**
 * ## 获取小信信息
 * @param {*} params 
 * @returns 
 */
export const queryPaymentRecordZxSmallList = (params) => axiosSubmit.get(`${axiosUrlWebapp}/pay/zxsmall`, { params });
/**
 * ## 取消支付
 * @param {*} params 
 * @returns 
 */
export const cancelPay = (trans_no) => axiosSubmit.put(`${axiosUrlWebapp}/pay/order/cancel/${trans_no}`);
/**
 * ## 导出支付记录
 * @param {*} params 
 * @returns 
 */
export const exportPaymentRecord = (params) => axiosSubmit({ // 用axios发送post请求
    method: 'post',
    url: `${axiosUrlWebapp}/pay/export_payorder`, // 请求地址
    responseType: 'blob', // 表明返回服务器返回的数据类型
    timeout: 0,
    data: params
});
/**
 * ## 支付操作历史查询
 * @param {*} params 
 * @returns 
 */
export const queryPaymentHistoryList = (params) => axiosSubmit.get(`${axiosUrlWebapp}/pay/pay_opt_history`, { params });