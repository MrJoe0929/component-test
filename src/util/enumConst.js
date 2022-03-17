/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2022-01-24 10:51:57
 * @LastEditors: hansl-a
 */

// 支付状态
export const paymentStateList = {
    1: {
        label: '待支付',
        color: '#FADB14'
    },
    2: {
        label: '支付中',
        color: '#1890FF'
    },
    3: {
        label: '已支付',
        color: '#52C41A'
    },
    4: {
        label: '支付失败',
        color: '#FF4D4F'
    },
    5: {
        label: '取消支付',
        color: '#d9d9d9'
    }
};
// 支付方式
export const payModeList = {
    1: '现金',
    2: '金融产品'
};
// 筛选 - 支付方式菜单
export const payModeMenuList = [{
    key: '',
    title: '全部'
}, {
    key: '1',
    title: '现金支付'
}, {
    key: '2',
    title: '融资支付'
}];
// 筛选 - 支付状态菜单
export const payStatusMenuList = [{
    key: '',
    title: '全部'
}, {
    key: '3',
    title: '已支付'
}, {
    key: '2',
    title: '支付中'
}, {
    key: '4',
    title: '支付失败'
}];
// 筛选 - 金融产品
export const financialProducts = [{
    key: '',
    title: '全部'
}, {
    key: 'ZX',
    title: '筑信'
},
// {
//     key: 'XJ',
//     title: '现金'
// }, 
{
    key: 'IOU',
    title: '白条'
}];

export const orderType = {
    'ascend': 'ASC',
    'descend': 'DESC'
};