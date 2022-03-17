/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-08-09 16:22:04
 * @LastEditors: qiaowb
 */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { queryUserInfo } from '@api/authApi';
import { setUserInfo } from '@action/userInfos';
import { message } from 'antd';

const UserInfo = ({ setRouteType, dispatch }) => {

    useEffect(() => {
        queryUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 获取用户信息
    const queryUser = () => {
        queryUserInfo().then(res => {
            let { code, data } = res.data;
            if (code === 2000) {
                dispatch(setUserInfo(data || {}));
            } else {
                message.error(res.data.message || '登录异常', 4);
            }
        }).catch(err => {
            console.error(err);
            message.error(err.data.message || '登录异常', 4);
        });
    };
    return null;
};

function mapStateToProps (state) {
    let { userInfos } = state;
    return { userInfos };
}
export let Auth = connect(mapStateToProps)(UserInfo);
