### 该项目用于测试 webpack 单一特性, 不要纠结任何初始配置, 可新建分支自由修改

### 如何使用
npm install
npm run build

### 说明
- 该项目做的事情非常简单, 只是 ./src/index.js 打包输出为 ./dist/main.js 文件
- 保持初始项目的简单, 便于测试其他特性, 隔离复杂性

### 创建该项目的过程
npm init
npm install webpack webpack-cli --save-dev
npm install --save lodash