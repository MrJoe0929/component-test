/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2022-01-20 15:02:06
 * @LastEditors: hansl-a
 */
import { axiosSubmit } from '@api/axios.js';
const axiosUrlWebapp = process.env.AXIOS_URL_WEBAPP;

/**
 * ## 订单详情信息查询 - 筑信
 * @param {*} orderId 
 * @returns 
 */
export const queryOrderDetail = (order_id) => axiosSubmit.get(`${axiosUrlWebapp}/order/detail/basic/${order_id}`);

/**
 * ## 我的应付列表查询
 * @param {*} params 
 * @returns 
 */
export const queryMyCopingList = (params) => axiosSubmit.get(`${axiosUrlWebapp}/customer/payment/list`, { params });
/**
 * ## 客户端-获取付款单位列表
 * @returns 
 */
export const queryPayOrgList = () => axiosSubmit.get(`${axiosUrlWebapp}/customer/payment/pay_org/list`);
/**
 * ## 客户端-根据付款单编号获取付款单明细信息
 * @param {*} id 付款单id
 * @returns 
 */
export const queryPaymentDetail = (id) => axiosSubmit.get(`${axiosUrlWebapp}/customer/payment/detail?id=${id}`);
/**
 * ## 户端-根据付款单编号获取发货单列表信息
 * @param {*} id 付款单id
 * @returns 
 */
export const queryPaymentDeliveryList = (id) => axiosSubmit.get(`${axiosUrlWebapp}/customer/payment/delivery/list?id=${id}`);
/**
 * ## 上传订单附件
 * @param {*} params 
 * @returns 
 */
export const uploadOrderFile = (params) => axiosSubmit.post(`${axiosUrlWebapp}/order/detail/file/upload`, params);
/**
 * ## 删除订单附件
 * @param {*} params 
 * @returns 
 */
export const deleteOrderFile = (params) => axiosSubmit.post(`${axiosUrlWebapp}/order/detail/file/delete?file_id=${params.file_id}&order_id=${params.order_id}`);
/**
 * ## 下载订单附件
 * @param {*} params 
 * @returns 
 */
export const downloadOrderFile = (params) => axiosSubmit({ // 用axios发送post请求
    method: 'get',
    url: `${axiosUrlWebapp}/order/detail/file/download`, // 请求地址
    responseType: 'blob', // 表明返回服务器返回的数据类型
    timeout: 0,
    params
});
/**
 * ## 删除付款单
 * @param {*} params 
 * @returns 
 */
export const deleteOrderReceipt = (params) => 
    axiosSubmit.post(`${axiosUrlWebapp}/order/receipt/delete?pay_id=${params.pay_id}&order_id=${params.order_id}`);
/**
 * ## 获取全部金融产品
 * @returns 
 */
export const queryFinancialProductList = () => axiosSubmit.get(`${axiosUrlWebapp}/pay/financial_product`);
/**
 * ## 提交支付请求
 * @returns 
 */
export const submitPayCompose = (params) => axiosSubmit.post(`${axiosUrlWebapp}/pay/compose`, params);
/**
 * ## 创建业务订单
 * @param {*} params 
 * @returns 
 */
export const createOrder = (params) => axiosSubmit.post(`${axiosUrlWebapp}/order/create`, params);




