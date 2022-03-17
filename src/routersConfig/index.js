/**
 * @Description: 陕建物流 路由配置
 * @Author: qiaowb
 * @Date: 2022-01-19 14:58:29
 * @LastEditors: qiaowb
 */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Auth } from './auth';
import { MainLayout } from '@component/BaseLayout/MainLayout';
import { renderRoute } from './renderRoute';
import { routeListYs, routePrefix } from './routeList';
import { menuListYs } from './menuList';

const RoutersConfig = () => {
    // const [routeType, setRouteType] = useState(null);
    // console.log('🚀 ~ file: routerConfigManagement.js ~ line 18 ~ RouterConfigManagement ~ routeType', routeType);
    return <div style={{ height: '100%' }}>
        <Auth setRouteType={setRouteType} />
        <Switch>
            <Route
                key="management"
                name="物流端"
                path="/"
                render={(routeProps) => <MainLayout {...routeProps} menuList={menuListYs} routePrefix={routePrefix}>
                    {renderRoute(routeListYs)}
                </MainLayout>}
            />
        </Switch>
    </div>;
};
export default RoutersConfig;