## 项目管理平台

### 本地启动

1. `npm i/npm install` 下载node_modules
2. `npm start` 以ip的形式启动

### 构建配置

1. `build:test` 测试环境打包
2. `build:pre` 预发布打包
3. `build:pro` 正式环境打包

### 目录结构

    ├── build                     # webpack 配置
    ├── config                    # 接口前缀配置
    ├── public
    │   ├── favicon.ico           # Favicon
    │   └── *.html                # 静态页面
    ├── src
    │   ├── api                   # 接口
    │   ├── component             # 组件
    │   ├── pages                 # 主页面
    │   ├── routersConfig         # 路由配置
    │   ├── static                # 静态【css、img】
    │   ├── store                 # redux库
    │   ├── util                  # 工具库
    │   ├── App.js                # 路由入口
    │   └── index.js              # 项目入口
    ├── README.md
	├── .babelrc                  # 插件配置
	├── .eslintrc.js              # 代码规范
	├── jsconfig.json             # 文件地址配置
    └── package.json
