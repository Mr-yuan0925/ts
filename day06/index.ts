// 映射类型
interface User {
    readonly name: string;
    readonly age: number;
    male?: boolean
}

type FilterReadOnly<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
}
type PublicUser =FilterReadOnly<User>

const publicUser:PublicUser = {
    name: '12',
    age: 354
}

publicUser.age = 789

// 映射类型
interface User2 {
    readonly name: string;
    readonly age: number;
    male?: boolean
}

type FilterReadOnly2<Type> = {
    -readonly [Property in keyof Type] - ?: Type[Property]
}
type PublicUser2 =FilterReadOnly2<User2>

const publicUser2:PublicUser2 = {
    name: '12',
    age: 354,
    male: false
}

publicUser2.age = 789


interface User3 {
    readonly name: string;
    readonly age: number;
    male: boolean
}

type DeleteMaleProperty<Type> = {
    // 删除Property为mail的选项
    [Property in keyof Type as Exclude<Property, 'male'>] - ?: Type[Property]
}
type PublicUser3 =DeleteMaleProperty<User3>

// publicUser3 只有name age
const publicUser3:PublicUser3 = {
    name: '12',
    age: 354,
}

// 字面量语法例子


interface User4{
    readonly name: string;
    readonly age: number;
    male: boolean
}

interface UserFunctions1 {
    name: () => string;
    age: () => number;
    male: ()=> boolean;
}


interface UserFunctions2 {
    getName: () => string;
    getAge: () => number;
    getMale: ()=> boolean;
}


type GetPropertyUserFunctions1<Type> = {
    [Property in keyof Type]: () => Type[Property]
}

type UserFunctionsType1 = GetPropertyUserFunctions1<User4>


type GetPropertyUserFunctions2<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}


type UserFunctionsType2 = GetPropertyUserFunctions2<User4>


// union 类型使用
type SquareEvent = {
    kind: 'square';
    x: number;
    y: number
}

type CircleEvent = {
    kind: 'circle';
    radius: number
}

type GeneraEventFunctions<Events extends {kind: string} > = {
    [Event in Events as Events['kind']]: (event: Event) => number
}

type NewType = GeneraEventFunctions<SquareEvent | CircleEvent>


