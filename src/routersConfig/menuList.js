/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-12-28 15:12:30
 * @LastEditors: qiaowb
 */
import React from 'react';
import {
    DashboardOutlined,
    TransactionOutlined,
    PayCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
/**
 * @param key 与路由地址需要相匹配，例：'/item/itemChild' 对应的父级key：item，子级key：itemChild
 */
// 应收 - 陕建物流
export const menuListYs = [
    { text: '资产首页', key: ' ', icon: <DashboardOutlined /> },
    {
        text: '交易管理', key: 'transaction', icon: <TransactionOutlined />,
        children: [
            { text: '资产清单', key: 'assetConsolidation' },
            { text: '融资推送', key: 'financingPush' },
            { text: '支付记录', key: 'paymentRecord' }
            // { text: '统计报表', key: 'statisticalReport' }
        ]
    }, {
        text: '融资管理', key: 'financing', icon: <PayCircleOutlined />,
        children: [
            // { text: '票据台账', key: 'billAccount' },
            // { text: '动态额度', key: 'dynamicQuota' },
            { text: '金融产品', key: 'financialProducts' },
            { text: '机构名录', key: 'institutions' }
        ]
    }, {
        text: '系统管理', key: 'system', icon: <SettingOutlined />,
        children: [
            // { text: '角色管理', key: 'role' },
            { text: '支付权限', key: 'paymentAuthority' },
            { text: '运行监控', key: 'operationMonitoring' }
            // { text: '系统设置', key: 'systemSettings' }
        ]
    }
];
