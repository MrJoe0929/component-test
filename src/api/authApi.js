/**
 * @Description: 用户权限
 * @Author: qiaowb
 * @Date: 2021-08-09 10:13:57
 * @LastEditors: qiaowb
 */
import { axiosSubmit } from '@api/axios.js';
const axiosUrl = process.env.AXIOS_URL_AUTHORIZATION;

// auth/api/v1

export const queryUserInfo = () => axiosSubmit.get(`${axiosUrl}/user/me`);
