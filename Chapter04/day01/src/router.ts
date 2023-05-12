import fs from 'fs'
import path from 'path'
import {NextFunction, Request, Response, Router} from "express";
import Crowller from './crowller'
import TomOther from "./tomOther";

import { getResponseData } from './utils/utils'


interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined,
    };
}

const CheckLogin = (req: RequestWithBody, res: Response, next: NextFunction ) => {
    const isLogin = req.session ? req.session.login : false
    if(isLogin){
        next();
    } else {
        res.json(getResponseData(null,'请先登录'))
    }

}

const router = Router();

router.get('/',(req: Request,res: Response) => {
    res.send('hello Tom!')
})

router.get('/login',(req: Request,res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if(isLogin){
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
    `)
    } else {
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
        `)
    }

})

router.get('/logOut',(req: Request,res: Response) => {
    if(req.session){
        req.session.login = undefined;
    }
    res.json(getResponseData(true))
    // res.redirect('/login')
})


router.post('/home',(req: RequestWithBody,res: Response) => {
    const { password } =  req.body
    const isLogin = req.session ? req.session.login : false
    if(isLogin){
        res.json(getResponseData(false, '已经登录'))
    } else {
        if(password === '123' && req.session){
                req.session.login = true
                res.json(getResponseData(true, '登录成功'))
        } else {
            res.json(getResponseData(false, '登录失败'))
        }
    }
})

router.get('/getData',CheckLogin,(req: RequestWithBody,res: Response) => {
    const { password } =  req.body
    const secret = "secretKey";
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const other = new TomOther();
    new Crowller(url,other);
    res.json(getResponseData(true))
})


router.get('/showData',(req: RequestWithBody,res: Response) => {
    try {
        const position = path.resolve(__dirname, '../data/course.json')
        const result = fs.readFileSync(position, 'utf-8')
        res.json(getResponseData(result))
    } catch (error) {
        res.json(getResponseData(false, '尚未爬取到内容'))
    }
    
})

export default router
