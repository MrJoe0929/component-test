/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-07-26 09:52:44
 * @LastEditors: qiaowb
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * @description 生成route
 * @param {array} list 
 * @returns {Element} route节点
 */
export const renderRoute = (list = [], prefix = '') => {
    let routeObj = {
        redirectTo: (val) => <Route key={val.path} exact={val.exact} name={val.name} path={val.path} render={() => <Redirect to={val.redirectTo} />}></Route>,
        render: (val) => <Route key={val.path} exact={val.exact} name={val.name} path={val.path} render={val.render}></Route>,
        component: (val) => <Route key={val.path} exact={val.exact} name={val.name} path={val.path} component={val.component}></Route>
    };
    return list.map((val, key) => {
        val.path && (val.path = `${prefix}${val.path}`);
        val.redirectTo && (val.redirectTo = `${prefix}${val.redirectTo}`);
        return routeObj[val.redirectTo && 'redirectTo' || val.render && 'render' || val.component && 'component'](val);
    });
};