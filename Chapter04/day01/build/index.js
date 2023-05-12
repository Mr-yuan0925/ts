"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
// 问题1： express 库的类型定义文件.d.ts 文件类型描述不准确
// 问题2： 当我使用中间件的时候 对 req 或者 res 做了修改之后， 事件上类型并不能改变 使用类型融合 重新定义一个.d.ts 类型描述文件 命名空间 Express
const app = (0, express_1.default)();
// 中间件
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ["Tom"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use((req, res, next) => {
    next();
});
app.use(router_1.default);
app.listen(7001, () => {
    console.log('server is running');
});
