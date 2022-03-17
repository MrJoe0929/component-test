/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-07-26 09:52:44
 * @LastEditors: qiaowb
 */
import React from 'react';
import { Route, Switch /*, Redirect */ } from 'react-router-dom';
import RoutersConfig from '@routersConfig/index';
import 'antd/dist/antd.css';
import '@static/index.css';

export const App = () => {
    return <Switch>
        <Route path="/" component={RoutersConfig} />
    </Switch>;
};