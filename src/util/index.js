/**
 * @Description: 公共类方法
 * @Author: qiaowb
 * @Date: 2021-05-26 13:48:59
 * @LastEditors: qiaowb
 */
export const getCookieOption = () => {
    let option = {};
    if (process.env.NODE_ENV === 'production') { // 生产环境只有https可用
        option = { domain: process.env.COOKIE_DOMAIN, path: '/', httpOnly: true, secure: true };
    } else { // 开发、测试环境不启动https
        option = { domain: process.env.COOKIE_DOMAIN, path: '/' };
    }
    return option;
};

/**
 * ## 金额会计符
 * @param {number} val 
 * @param {number} lastLength 保留几位小数
 * @returns 
 */
export const moneyFormat = (val, lastLength = 2) => {
    if (isNaN(val) || val === '') {
        return val;
    }
    let tag = (val || 0).toString().split('.');
    tag[0] = tag[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    lastLength > 0 && (tag[1] = (tag[1] || '').padEnd(lastLength, '0'));
    return tag.join('.');
};

/**
 * ## 格式化显示百分比
 * @param {*} val 
 * @param {*} empty 为空时显示
 * @returns 
 */
// export const renderRate = (val, empty = '') => val || (!isNaN(val) && val !== '') ? `${val.toFixed(2)}%` : empty;
export const renderRate = (val, empty = '') => val || (!isNaN(val) && val !== '') ? `${val}%` : empty;
/**
 * ## 格式化显示会计金额
 * @param {*} val 金额
 * @param {*} empty 为空时显示
 * @returns 
 */
export const renderFormatMoney = (val, empty = '') => val !== '' && !isNaN(val) ? `¥${moneyFormat(val)}` : empty;
export const renderFormatText = (val, empty = '') => val !== '' && !isNaN(val) ? `${moneyFormat(val)} 元` : empty;
// 文字类专用
export const renderContent = (val, character) => val || (!isNaN(val) && val !== '') ? val : character ? character : '--';

/**
 * ## 随机生成整数
 * @param {number} minNum 最小
 * @param {number} maxNum 最大
 * @returns 
 */
export const randomNum = (minNum, maxNum) => parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);

/**
 * @description 解析url中的param
 * @param {string} url 地址路径
 */
export const parseUrl = (url) => {
    let result = {};
    if (!url) return {};
    let query = url.split('?')[1];
    let queryArr = (query && query.length) ? query.split('&') : [];
    queryArr.forEach(item => {
        let value = item.split('=')[1];
        let key = item.split('=')[0];
        result[key] = value;
    });
    return result;
};

/**
 * 设置列表参数
 * @param {*} params 
 * @returns 
 */
export const setParams = (key, params) => sessionStorage.setItem(key, JSON.stringify(params));
/**
  * 获取列表参数
  * @returns 
  */
export const getParams = (key) => {
    let listParams = sessionStorage.getItem(key);
    sessionStorage.setItem(key, null); // 获取完毕删除历史
    return listParams ? JSON.parse(listParams) : null;
};
export const isValidDate = (date) => date instanceof Date && !isNaN(date.getTime());
/**
 * 
 * @param {*} date 
 * @param {*} formatStr 格式化规则
 * @returns 
 */
export const dateFormat = (date, formatStr = 'yyyy-mm-dd HH:MM:SS') => {
    date = new Date(date);
    if (!isValidDate(date)) {
        throw Error('The parameter date is illegal');
    }
    const configure = {
        'y+': date.getFullYear().toString(),        // 年
        'm+': (date.getMonth() + 1).toString(),     // 月
        'd+': date.getDate().toString(),            // 日
        'H+': date.getHours().toString(),           // 时
        'M+': date.getMinutes().toString(),         // 分
        'S+': date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    let ret = null;
    for (let item in configure) {
        ret = new RegExp(`(${item})`).exec(formatStr);
        if (ret) {
            formatStr = formatStr.replace(ret[1], (ret[1].length === 1) ? (configure[item]) : (configure[item].padStart(ret[1].length, '0')));
        }
    }
    return formatStr;
};