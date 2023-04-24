// 对象类型和对象结构语法
function showPerson({name: nick = 'Tom', age: old = 18}) {
    console.log(nick)
    console.log(old)
}
function showPerson2({name= 'Tom', age= 18}: {name: string,age:number}) {
    console.log(name)
    console.log(age)
}

// interface 中的readonly 只读属性
interface Person {
    readonly name: string,
    readonly age: number
}

const Tom: Person = {name: 'Tom',age: 18}
// Tom.name = 'lee' 只读不可修改

// 如何给对象扩展属性
interface ArrObj {
    [key: string | number]: string | number
    length: number
}
const Obj: ArrObj  = {
    length : 15,
    abc: 'abc',
    0: 0
}

// 对象类型的继承
interface Animal {
    name: string;
    age: number,
    breath: ()=>void
}

interface Dog {
    name: string;
    age: number,
    breath: ()=>void,
    bark: ()=>void
}


const animal: Animal = {
    name: 'panda',
    age: 18,
    breath: () => {}
}

const dog: Dog = {
    name: 'dog',
    age: 18,
    breath: () => {},
    bark: ()=>{}
}

interface Cat extends Animal {
    run: () => void
}

const cat: Cat = {
    name: 'cat',
    age: 18,
    breath: () => {},
    run: ()=>{}
}

// 多个对象类型同事进行继承
interface Circle {
    radius: number
}

interface Colorful {
    color: string
}

// 多个 用逗号隔离
interface ColorFulCircle extends Circle, Colorful {}

const colorfulCircle: ColorFulCircle = {
    radius: 1,
    color: 'red'
}

// 交叉类型
type ColorfulCircleOne = Circle & Colorful;
const colorfulCircleOne: ColorfulCircleOne = {
    radius: 1,
    color: 'red'
}

// 泛型
interface Box {
    content: string
}
const box:Box = {
    content: 'abc'
}

const box1:Box = {
    content: '123'
}
interface NewBox<Type> {
    content: Type
}

const newBox: NewBox<string>={
    content: 'abc'
}

const newBox1:NewBox<number>= {
    content: 123
}

const newBox2: NewBox<boolean>={
    content: true
}


// 使用泛型来扩展生成新的类型
type orNull<Type> = Type | null;
const test: orNull<string> = '132'
const test1: orNull<boolean> = true

type TypeOrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const test2:OneOrMany<string> = '123'
const test3:OneOrMany<string> = ['123']

type OneOrManyOrNull<Type> = OneOrMany<Type> | null
const test4:OneOrManyOrNull<string> = '123'
const test5:OneOrManyOrNull<number> = 123
const test6:OneOrManyOrNull<number> = null
const test7:OneOrManyOrNull<number> = [123]
const test8:OneOrManyOrNull<string> = ['123']

type OneOrManyOrNull2<Type> = TypeOrNull<OneOrMany<Type>>

const test9:OneOrManyOrNull2<string> = '123'
const test10:OneOrManyOrNull2<number> = 123
const test11:OneOrManyOrNull2<number> = null
const test12:OneOrManyOrNull2<number> = [123]
const test13:OneOrManyOrNull2<string> = ['123']

//数组和泛型
const numberArr: number[] = [1,2,3,4]
const numberArr2: Array<string> =  ['1','2','3','4']
const numberArr3: Array<number> =  [1,2,3,4]
const numberArr4: Array<boolean> =  [true,false]

interface SelfArray<Type> {
    [key: number]: Type;
    length: number;
    pop(): Type | undefined,
    push(...items: Type[]): number
}

const numberArr5: SelfArray<string> = ['a','2']

// 数组的readonly
function deStuff(arr: readonly string[]) {
    // arr.push('123') 报错 不允许修改原数组
}

// 元组
type Tuple = [number,string]
const tuple:Tuple = [1, '123']

type Point = [number,number]
function getPoint([x,y]: Point) {
    return x + y
}

const point:Point = [1,2]

getPoint(point)


// extends
interface PersonExtends {
    nickName: string;
}

function getName(person: PersonExtends){
    return person.nickName
}

getName({nickName: 'Tom'})
// getName({nickName: 'Tom',age: 18}) 报错

function getName2<Type extends PersonExtends>(person: Type){
    return person.nickName
}

getName2({nickName: 'Tom',age: 18})

// keyof
interface Teacher {
    name: string,
    age: number,
    sex: string
}

const teacher = {
    name: "Tom",
    age: 18,
    sex: 'male'
}

// 传入随意的key会报错 有可能找不到
function getTeacherInfo(teacher: Teacher,key: string) {
    // return teacher[key] 报错
}

// keyof 相当于对象中的某一项的key
function getTeacherInfo2<T extends keyof Teacher>(teacher: Teacher,key: T) {
    return teacher[key]
}
