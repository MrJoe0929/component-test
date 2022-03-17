/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-08-09 10:13:57
 * @LastEditors: qiaowb
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.js';
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDom.render(
    <BrowserRouter>
        <Provider store={store()}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);