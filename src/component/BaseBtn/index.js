/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-08-09 13:44:52
 * @LastEditors: qiaowb
 */
import React from 'react';
import PropTypes from 'prop-types';
import { LoadingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import style from './index.scss';

/**
 * 主要按钮
 * @returns 
 */
export const MainBtn = ({ type = 'solid', loading = false, children, disabled, className = '', onClick, ...otherProps }) => {
    const onBtnClick = e => {
        if (!disabled && !loading) {
            onClick && onClick(e);
        }
    };
    let classNames = [style['main-btn'], style[`main-btn-${type}`]];
    disabled && classNames.push(style['disabled']);
    className && classNames.push(className);
    loading && classNames.push(style['main-btn-loading']);
    return <button
        {...otherProps}
        className={classNames.join(' ')}
        onClick={onBtnClick}>
        {
            loading ?
                <LoadingOutlined className={style['btn-loading']} /> : null
        }
        {children || '主要按钮'}
    </button>;
};

MainBtn.prototype.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any,
    className: PropTypes.string,
    loading: PropTypes.bool, // 等待状态
    type: PropTypes.string // 按钮类型  hollow 无底色  solid 有底色  primary 警告
};

/**
 * 文字按钮
 * @returns 
 */
export const MainTextBtn = ({ type = 'solid', loading = false, disabled, onClick, children, className = '', ...otherProps }) => {
    const onBtnClick = e => {
        if (!disabled && !loading) {
            onClick && onClick(e);
        }
    };
    let classNames = [style['main-text-btn'], style[`main-text-btn-${type}`]];
    disabled && classNames.push(style['disabled']);
    className && classNames.push(className);
    loading && classNames.push(style['main-text-btn-loading']);
    return <button
        {...otherProps}
        className={classNames.join(' ')}
        disabled={disabled}
        onClick={onBtnClick}>
        {
            loading ?
                <LoadingOutlined className={style['btn-loading']} /> : null
        }
        {children || '主文字按钮'}
    </button>;
};
MainTextBtn.prototype.propTypes = {
    type: PropTypes.string, // 按钮类型  hollow 无色  solid 有色
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any,
    loading: PropTypes.bool,
    className: PropTypes.string
};
/**
 * ## 返回
 * @param {*} props 
 * @returns 
 */
export const BackBtn = ({ href, children, ...props }) => {
    const onBtnClick = () => {
        location.href = href;
    };
    return <MainTextBtn
        onClick={onBtnClick}
        {...props}
        className={style['backBtn']}
        type="hollow"
    ><ArrowLeftOutlined /><span>{children}</span></MainTextBtn>;
};
BackBtn.prototype.propTypes = {
    children: PropTypes.any,
    href: PropTypes.string
};

/**
 * ## 确认框
 * @argument {function} onConfirm 确认
 * @argument {function} onCancel 取消
 * @argument {string|document} title 标题
 * @argument {string} placement 气泡框位置：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
 * @returns 
 */
export const PopConfirmBtn = ({ children, ...otherProps }) => {
    return <Popconfirm
        // title="Are you sure to delete this task?"
        // onConfirm={confirm}
        // onCancel={cancel}
        okText="确认"
        cancelText="取消"
        {...otherProps}
    >
        {children}
    </Popconfirm>;
};

PopConfirmBtn.prototype.propTypes = {
    children: PropTypes.any
};