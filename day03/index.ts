// 基础类型 string , number , boolean
const teacherName: string = 'Audi';
const teacherAge: number = 18;
const isMale: boolean = true;
// 数组类型
const numberArr: number[] = [1,2,3,4]
const stringArr: string[] = ['a','b','c','d']
const booleanArr: Array<boolean> = [true,false] // 泛型
// 对象类型
const user: {name: string,age:number} = { name: 'Audi', age: 18}
const userOne: {name: string,age?:number} = {name: 'Tom'}
// 联合类型
function union(id: string|number){
    if(typeof id === 'string') { // 类型收窄 Narrowing
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
// 类型别名
type User = {
    name: string,
    age:number
}

const userTwo: User = {name: 'Jack', age: 18}

// any
function showMessage(message: any) {
    console.log(message)
}

// 函数类型
// number 标识返回值的数字 否则会报错
function fn(message: string): number {
    return 123;
}

const def: (age: number) => number = (age:number) => { return age}

// 接口类型
interface Student {
    age: number,
    sex?: string
}

const student: Student = {age: 18,sex: 'male'}

// 拥有继承语法,加入其他的元素

interface NewStudent extends Student{
    name: string
}

const newStudent:NewStudent = {age: 18,sex: 'male',name: 'Tom'}

// 定义相同的会合并

interface Parent {
    age: number,
    sex?: string
}

interface Parent {
    name: string,
}

const patent: Parent = {age: 18,sex: 'male',name: 'Tom'}

// 交叉类型 &
type Employee = User & { sex: string }
const employee: Employee = {name: 'Tom', age: 18, sex: 'male'}

// 断言 Assersion
const dom: HTMLElement | null = document.getElementById('root')

// 找不到root的时候 使用断言
const dom2:HTMLElement | undefined = document.getElementById('root') as HTMLElement | undefined;
const dom3: HTMLElement | undefined = <HTMLElement | undefined>document.getElementById('root');

const testSting: string = 123 as any as string;

// 字面量类型
const str: string = 'abcd'
const str1: 'eee' = 'eee'

function getPosition(position: 'left' | 'right'): string {
    return position
}

getPosition('left')

function request(url: string, method: 'GET' | 'POST'): string {
    return 'hello word'
}

const params: {url: string , method: string} = {url: 'www.abc.com', method: 'POST'}

// request(params.url,params.method)  错误 提示 method 为 'GET' | 'POST'

const params2: {url: string , method: 'GET' | 'POST'} = {url: 'www.abc.com', method: 'POST'}

request(params2.url,params2.method);

request(params2.url,params.method as 'GET');

// null, undefined
// 没有严格校验 在tsconfig.json 添加校验   "strictNullChecks": true
// const testNull: null = undefined
// const testUndefined: undefined = null

function checkNull(message: string | null) {
    if(typeof message === 'string'){
        console.log(message.toUpperCase())
    }
}

// 当你认为不可能传入null  可以这样写 但是不推荐
function checkNull2(message: string | null) {
    console.log(message!.toUpperCase())
}

// void 没有返回
function getNumber(): void {
    // return '123'; 报错
    return
}

// TS开发准则: 只要是变量，或者对象属性， 都应该有一个明确的类型
// 类型注解 人工的告诉TS 变量或者对象的明确属性类型
const userName: string = '123'
// 类型推断
const userAge = 18;
// 如果类型推断能够自动推断出来的类型，可以不手写类型注解
let userNickName = 'Tom'
userNickName.toUpperCase()

function getTotal(parOne: number, parTwo: number) {
    return parOne + parTwo
}

const userInfo = {
    name: 'Tom',
    age: 18
}

// 类型收窄
// typeof
function uppercase(message: string | number) {
    if(typeof message === 'string'){
        return message.toUpperCase()
    }
    return message
}

// 诊治收窄
function getString(message?: string) {
    if(typeof message === 'string'){
        if(message){
            return message.toUpperCase()
        }
    }
}

// 相等收窄
function example(x: string | number, y: string | boolean) {
    if(x === y){
        return x.toUpperCase()
    }
}

// 对象类型的解构的代码
function getObjValue({a,b}: {a:number,b:number}) {
    return a + b
}

getObjValue({a: 1, b: 2})

// 变量类型以定义变量是的类型为准
let yourName: string | number = '123'
yourName = 123

// In 语法下的类型收窄
type Fish = {
    swim: () => {}
}
type Bird = {
    fly: () => {}
}

function testAnimal(animal: Fish | Bird) {
    if('swim' in animal){
        return animal.swim()
    }
    return animal.fly
}

// InstanceOf
function test1(params: Date | string) {
    if(params instanceof Date){
        return params.getTime()
    }
    return params.toUpperCase()
}

// animal is Fish 类型陈述语法
function isFish(animal: Fish | Bird ): animal is Fish {
    if((animal as Fish).swim !== undefined){
        return true
    }
    return false
}

function test2(animal: Fish | Bird) {
    if(isFish(animal)){
        return animal.swim()
    }
    return animal.fly
}

// 有属性的函数类型的定义方法
interface FunctionWithAttr {
    attr: string;
    (str: string): void;
}
const attrOne: FunctionWithAttr =  (str: string) =>{
    console.log(str)
}
attrOne.attr = 'abc'

// 构造函数的类型如何定义
interface ClassWhitConstructor {
    new (str: string): void;
}

function constructorFn(outerClass: ClassWhitConstructor) {
    const instance = new outerClass('new')
}

class classOne {
    name: string;
    constructor(str: string) {
        this.name = str;
    }
}

constructorFn(classOne)

// Date类型
interface DateType {
    new (): Date;
    (dateString: string): string
}

// 函数和泛型
function getFirstList<Type>(arr: Type[]): Type {
    return arr[0]
}

const numberArray = [1,2,3]
const numberResult = getFirstList(numberArray)

const stringArray = ['a', 'b' , 'c']
const stringResult  = getFirstList(stringArray)

