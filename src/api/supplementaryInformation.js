/**
 * @Description: 
 * @Author: hansl-a
 * @Date: 2022-02-25 14:13:56
 * @LastEditors: hansl-a
 */
import { axiosSubmit } from '@api/axios.js';
const axiosUrlWebapp = process.env.AXIOS_URL_WEBAPP;

/**
 * ## 资料补充信息查询
 * @param {*} financing_id 
 * @returns 
 */
export const queryFinancingInit = (financing_id) =>
    axiosSubmit.get(`${axiosUrlWebapp}/financing/init/${financing_id}`);

/**
 * ## 发票列表查询
 * @param {*} financing_id 
 * @returns 
 */

export const queryFinancingInvoice = (params) => 
    axiosSubmit.get(`${axiosUrlWebapp}/financing/invoice/list`, { params });

/**
 * ## 资料补充信息查询
 * @param {*} financing_id 
 * @returns 
 */
export const queryFinancingContract = (financing_id) =>
    axiosSubmit.get(`${axiosUrlWebapp}/financing/contract/${financing_id}`);

/**
 * ## 融资发票附件上传
 * @param {*} financing_id 
 * @returns 
 */
export const uploadFinancingInvoiceFile = (params) =>
    axiosSubmit.post(`${axiosUrlWebapp}/financing/invoice/file/upload`, params);

/**
 * ## 融资发票附件下载
 * @param {*} params 
 * @returns 
 */
export const downloadFinancingInvoiceFile = (params) => axiosSubmit({ // 用axios发送post请求
    method: 'get',
    url: `${axiosUrlWebapp}/financing/invoice/file/download`, // 请求地址
    responseType: 'blob', // 表明返回服务器返回的数据类型
    timeout: 0,
    params
});

/**
 * ## 融资框架合同附件下载
 * @param {*} params 
 * @returns 
 */
export const downloadFinancingContractFile = (params) => axiosSubmit({ // 用axios发送post请求
    method: 'get',
    url: `${axiosUrlWebapp}/financing/contract/file/download`, // 请求地址
    responseType: 'blob', // 表明返回服务器返回的数据类型
    timeout: 0,
    params
});


/**
 * ## 融资筑信附件上传
 * @param {*} financing_id 
 * @returns 
 */
export const uploadFinancingZXFile = (params) =>
    axiosSubmit.post(`${axiosUrlWebapp}/financing/zx/file/upload`, params);

/**
 * ## 下载融资筑信附件
 * @param {*} params 
 * @returns 
 */
export const downloadFinancingZXFile = (params) => axiosSubmit({ // 用axios发送post请求
    method: 'get',
    url: `${axiosUrlWebapp}/financing/zx/file/download`, // 请求地址
    responseType: 'blob', // 表明返回服务器返回的数据类型
    timeout: 0,
    params
});

/**
 * ## 删除融资筑信附件
 * @param {*} params 
 * @returns 
 */
export const deleteZXFinancing = (params) =>
    axiosSubmit.post(`${axiosUrlWebapp}/financing/zx/file/delete?file_id=${params.file_id}&financing_id=${params.financing_id}`);

/**
 * ## 补充完成
 * @param {*} params 
 * @returns 
 */
export const financingConfirmInformation = (financing_id) => 
    axiosSubmit.post(`${axiosUrlWebapp}/financing/confirm_information`, financing_id);