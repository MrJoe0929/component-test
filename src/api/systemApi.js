/**
 * @Description: 系统管理相关API
 * @Author: qiaowb
 * @Date: 2022-01-25 10:16:28
 * @LastEditors: qiaowb
 */
import { axiosSubmit } from '@api/axios.js';
const axiosUrlWebapp = process.env.AXIOS_URL_WEBAPP;

/**
 * ## 需用单位列表查询
 * @param {*} params 
 * @returns 
 */
export const queryOrgUnitList = (params = {}) => axiosSubmit.get(`${axiosUrlWebapp}/org/list`, params);
/**
 * ## 支付权限列表查询
 * @param {*} params 
 * @returns 
 */
export const queryPaymentPermissionList = (params = {}) => axiosSubmit.get(`${axiosUrlWebapp}/permission/list`, { params: params });
/**
 * ## 获取采购账号列表
 * @param {*} organizationId 
 * @returns 
 */
export const queryProcurementUserList = (organizationId) => axiosSubmit.get(`${axiosUrlWebapp}/user/list/${organizationId}`);
/**
 * ## 支付权限列表修改
 * @param {*} params 
 * @returns 
 */
export const updatePaymentPermission = (params = {}) => axiosSubmit.post(`${axiosUrlWebapp}/permission/update`, params);
/**
 * ## 支付权限列表添加
 * @param {*} params 
 * @returns 
 */
export const submitPaymentPermission = (params = {}) => axiosSubmit.post(`${axiosUrlWebapp}/permission/add`, params);
/**
 * ## 支付权限删除
 * @param {*} id 
 * @returns 
 */
export const deletePaymentPermission = (need_unit_id, organization_id) => axiosSubmit.delete(`${axiosUrlWebapp}/permission/delete/${need_unit_id}/${organization_id}`);