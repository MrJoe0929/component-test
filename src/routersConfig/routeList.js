/**
 * @Description: 物流端路由列表
 * @Author: qiaowb
 * @Date: 2022-01-06 11:24:02
 * @LastEditors: qiaowb
 */
import React from 'react';
import { PaymentRecord } from '@pages/management/transaction/paymentRecord';
import { AssetConsolidation } from '@pages/management/transaction/assetConsolidation';
import { FinancingPush } from '@pages/management/transaction/financingPush';
import { PaymentAuthority } from '@pages/management/system/paymentAuthority';
import { OperationMonitoring } from '@pages/management/system/operationMonitoring';
import { FinancialProducts } from '@pages/management/financing/financialProducts';
import { Institutions } from '@pages/management/financing/institutions';
import { CashPayment } from '@pages/finance/paymentManagement/details/cashPayment';
import { CreditPayment } from '@pages/finance/paymentManagement/details/creditPayment';
import { CapitalPayment } from '@pages/finance/paymentManagement/details/capitalPayment';
import { InfoSupplement } from '@pages/management/transaction/financingPush/infoSupplement';

export const routePrefix = '';
const setPrefix = (url) => `${routePrefix}${url}`;
/**
 * 路由列表
 * @property {bool} exact 是否严格匹配
 * @property {string} path 路径
 * @property {string} to 路径
 * @property {func} component 渲染模版
 * @property {string} redirectTo 重定向地址
 * @property {array} children 子节点
 */
// 交易管理
const transactionRoute = [{
    exact: true,
    path: setPrefix('/transaction'),
    redirectTo: setPrefix('/transaction/assetConsolidation'),
    name: '交易管理'
}, {
    exact: true,
    path: setPrefix('/transaction/assetConsolidation'),
    to: setPrefix('/transaction/assetConsolidation'),
    name: '资产清单',
    component: AssetConsolidation
}, {
    exact: true,
    path: setPrefix('/transaction/financingPush'),
    to: setPrefix('/transaction/financingPush'),
    name: '融资推送',
    component: FinancingPush
}, {
    exact: true,
    path: setPrefix('/transaction/financingPush/zx'),
    to: setPrefix('/transaction/financingPush/zx'),
    name: '融资推送 - 资料补充页 - 筑信',
    render: () => <InfoSupplement type="zx" />
}, {
    exact: true,
    path: setPrefix('/transaction/financingPush/iou'),
    to: setPrefix('/transaction/financingPush/iou'),
    name: '融资推送 - 资料补充页 - 白条',
    render: () => <InfoSupplement type="iou" />
}, {
    exact: true,
    path: setPrefix('/transaction/paymentRecord'),
    to: setPrefix('/transaction/paymentRecord'),
    name: '支付记录',
    component: PaymentRecord
}, {
    exact: true,
    path: setPrefix('/transaction/paymentRecord/cashPaymentDetail'),
    to: setPrefix('/transaction/paymentRecord/cashPaymentDetail'),
    name: '现金支付',
    render: () => <CashPayment isEditable={false} returnUrl={setPrefix('/transaction/paymentRecord')} />
}, {
    exact: true,
    path: setPrefix('/transaction/paymentRecord/creditPaymentDetail'),
    to: setPrefix('/transaction/paymentRecord/creditPaymentDetail'),
    name: '筑信支付',
    render: () => <CreditPayment isEditable={false} returnUrl={setPrefix('/transaction/paymentRecord')} />
}, {
    exact: true,
    path: setPrefix('/transaction/paymentRecord/capitalPaymentDetail'),
    to: setPrefix('/transaction/paymentRecord/capitalPaymentDetail'),
    name: '白条支付',
    render: () => <CapitalPayment isEditable={false} returnUrl={setPrefix('/transaction/paymentRecord')} />
}, {
    exact: true,
    path: setPrefix('/transaction/statisticalReport'),
    to: setPrefix('/transaction/statisticalReport'),
    name: '统计报表',
    component: () => <span>统计分析</span>
}];
// 融资管理
const financingRoute = [{
    exact: true,
    path: setPrefix('/financing'),
    redirectTo: setPrefix('/financing/billAccount'),
    name: '融资管理'
}, {
    exact: true,
    path: setPrefix('/financing/billAccount'),
    to: setPrefix('/financing/billAccount'),
    name: '票据台账',
    component: () => <span>票据台账</span>
}, {
    exact: true,
    path: setPrefix('/financing/dynamicQuota'),
    to: setPrefix('/financing/dynamicQuota'),
    name: '动态额度',
    component: () => <span>动态额度</span>
}, {
    exact: true,
    path: setPrefix('/financing/financialProducts'),
    to: setPrefix('/financing/financialProducts'),
    name: '金融产品',
    component: FinancialProducts
}, {
    exact: true,
    path: setPrefix('/financing/institutions'),
    to: setPrefix('/financing/institutions'),
    name: '机构名录',
    component: Institutions
}];
// 系统管理
const systemRoute = [{
    exact: true,
    path: setPrefix('/system'),
    redirectTo: setPrefix('/system/role'),
    name: '系统管理'
}, {
    exact: true,
    path: setPrefix('/system/role'),
    to: setPrefix('/system/role'),
    name: '角色管理',
    component: () => <span>角色管理</span>
}, {
    exact: true,
    path: setPrefix('/system/paymentAuthority'),
    to: setPrefix('/system/paymentAuthority'),
    name: '支付权限',
    component: PaymentAuthority
}, {
    exact: true,
    path: setPrefix('/system/operationMonitoring'),
    to: setPrefix('/system/operationMonitoring'),
    name: '运行监控',
    component: OperationMonitoring
}, {
    exact: true,
    path: setPrefix('/system/systemSettings'),
    to: setPrefix('/system/systemSettings'),
    name: '系统设置',
    component: () => <span>系统设置</span>
}];
// 工作台
const workbenchRoute = [{
    exact: true,
    path: setPrefix('/'),
    to: setPrefix('/'),
    name: '资产首页',
    component: () => <div style={{ fontSize: 50, textAlign: 'center', lineHeight: '600px' }}>资产首页</div>
}];
export const routeListYs = [
    ...workbenchRoute,
    ...transactionRoute,
    ...financingRoute,
    ...systemRoute
];