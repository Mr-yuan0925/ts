import express, {Request,Response,NextFunction} from 'express'
import router from './router'
import bodyParser from "body-parser";
import cookieSession from 'cookie-session'


// 问题1： express 库的类型定义文件.d.ts 文件类型描述不准确
// 问题2： 当我使用中间件的时候 对 req 或者 res 做了修改之后， 事件上类型并不能改变 使用类型融合 重新定义一个.d.ts 类型描述文件 命名空间 Express

const app = express();
// 中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({
    name: 'session',
    keys: ["Tom"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use((req: Request, res: Response, next: NextFunction)=>{
    next();
})
app.use(router)


app.listen(7001, ()=> {
    console.log('server is running')
})
