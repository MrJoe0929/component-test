/**
 * @Description: 
 * @Author: hansl-a
 * @Date: 2022-02-24 10:46:11
 * @LastEditors: qiaowb
 * @LastEditTime: 2022-02-28 19:03:32
 */

import { axiosSubmit } from '@api/axios.js';
const axiosUrlWebapp = process.env.AXIOS_URL_IOU;

/**
 * ## 白条管理列表查询
 * @param {*} params 
 * @returns 
 */
export const queryIouOrderFlows = (params) =>
    axiosSubmit.get(`${axiosUrlWebapp}/iou/order_flows`, { params });

/**
 * ## 白条管理拒绝融资
 * @param {*} params 
 * @returns 
 */
export const iouRefuse = (params) =>
    axiosSubmit.post(`${axiosUrlWebapp}/iou/refuse`, params);

/**
 * ## 白条管理确认融资
 * @param {*} params 
 * @returns 
 */
export const iouConfirm = (params) =>
    axiosSubmit.post(`${axiosUrlWebapp}/iou/confirm`, params);

/**
 * ## 白条管理确认还款
 * @param {*} params 
 * @returns 
 */
export const iouRepayment = (params) => axiosSubmit.post(`${axiosUrlWebapp}/iou/repayment`, params);

/**
 * ## 白条管理-获取白条资料信息
 * @param {*} params 
 * @returns 
 */
export const queryIouProfileDetails = (params) => axiosSubmit.get(`${axiosUrlWebapp}/iou/profile_info`, { params });
/**
 * ## 框架合同下载
 * @param {*} params 
 * @returns 
 */
export const downloadIouFile = (params) => axiosSubmit({ // 用axios发送post请求
    method: 'get',
    url: `${axiosUrlWebapp}/iou/file/download`, // 请求地址
    responseType: 'blob', // 表明返回服务器返回的数据类型
    timeout: 0,
    params
});