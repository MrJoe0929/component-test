/**
 * @Description: 物流端 - 交易管理
 * @Author: qiaowb
 * @Date: 2022-01-24 10:42:49
 * @LastEditors: qiaowb
 */
import { axiosSubmit } from '@api/axios.js';
const axiosUrlWebapp = process.env.AXIOS_URL_WEBAPP;

/**
 * ## 资产列表查询
 * @param {*} params 
 * @returns 
 */
export const queryPaymentList = (params) => axiosSubmit.get(`${axiosUrlWebapp}/payment/list`, { params });

/**
 * ## 融资推送列表
 * @param {*} params 
 * @returns 
 */
export const queryFinancingList = (params) => axiosSubmit.get(`${axiosUrlWebapp}/financing/list`, { params });
/**
 * ## 融资推送-资料详情查询
 * @param {*} financing_id 
 * @returns 
 */
export const queryInformationDetails = (financing_id) => axiosSubmit.get(`${axiosUrlWebapp}/financing/detail/${financing_id}`);
/**
 * ## 确认受理
 * @param {*} financing_ids
 * @returns 
 */
export const confirmFinancing = (financing_ids) => axiosSubmit.post(`${axiosUrlWebapp}/financing/confirm`, financing_ids);
/**
 * ## 拒绝受理
 * @param {*} financing_ids 
 * @returns 
 */
export const refuseConfirmFinancing = (financing_ids) => axiosSubmit.post(`${axiosUrlWebapp}/financing/refuse_confirm`, financing_ids);
/**
 * ## 融资推送
 * @param {*} financing_ids 
 * @returns 
 */
export const pushFinancing = (financing_ids) => axiosSubmit.post(`${axiosUrlWebapp}/financing/push`, financing_ids);
/**
 * ## 拒绝推送
 * @param {*} financing_ids 
 * @returns 
 */
export const refusePushFinancing = (financing_ids) => axiosSubmit.post(`${axiosUrlWebapp}/financing/refuse_push_financing`, financing_ids);
/**
 * ## 打回重补资料
 * @param {*} financing_ids 
 * @returns 
 */
export const returnInformation = (financing_ids) => axiosSubmit.post(`${axiosUrlWebapp}/financing/return_add_information`, financing_ids);
/**
 * ## 订单支付详情信息查询
 * @param {*} order_id 
 * @returns 
 */
export const queryPayDetail = (order_id) => axiosSubmit.get(`${axiosUrlWebapp}/order/detail/basic/pay/${order_id}`);
/**
 * ## 根据付款单编号获取付款单明细信息
 * @param {*} financing_ids 
 * @returns 
 */
export const queryOrderList = (order_id) => axiosSubmit.get(`${axiosUrlWebapp}/order/payment/list/detail`, { params: { order_id } });


