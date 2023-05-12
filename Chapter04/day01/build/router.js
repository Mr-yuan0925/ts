"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const crowller_1 = __importDefault(require("./crowller"));
const tomOther_1 = __importDefault(require("./tomOther"));
const utils_1 = require("./utils/utils");
const CheckLogin = (req, res, next) => {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json((0, utils_1.getResponseData)(null, '请先登录'));
    }
};
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('hello Tom!');
});
router.get('/login', (req, res) => {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send(`
        <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
              <a href="/getData" >爬取</a>
              <a href="/logOut" >退出</a>
            </body>
            </html>
    `);
    }
    else {
        res.send(`
        <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <form method="post", action="/home">
                    <input type="password" name="password" />
                    <button type="submit">提交</button>
                </form>
            
            </body>
            </html>
        `);
    }
});
router.get('/logOut', (req, res) => {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json((0, utils_1.getResponseData)(true));
    // res.redirect('/login')
});
router.post('/home', (req, res) => {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.json((0, utils_1.getResponseData)(false, '已经登录'));
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json((0, utils_1.getResponseData)(true, '登录成功'));
        }
        else {
            res.json((0, utils_1.getResponseData)(false, '登录失败'));
        }
    }
});
router.get('/getData', CheckLogin, (req, res) => {
    const { password } = req.body;
    const secret = "secretKey";
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const other = new tomOther_1.default();
    new crowller_1.default(url, other);
    res.json((0, utils_1.getResponseData)(true));
});
router.get('/showData', (req, res) => {
    try {
        const position = path_1.default.resolve(__dirname, '../data/course.json');
        const result = fs_1.default.readFileSync(position, 'utf-8');
        res.json((0, utils_1.getResponseData)(result));
    }
    catch (error) {
        res.json((0, utils_1.getResponseData)(false, '尚未爬取到内容'));
    }
});
exports.default = router;
