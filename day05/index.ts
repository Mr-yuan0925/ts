// 条件类型 根据条件 生成一个新的类型
interface Animal {
    breath: ()=>{}
}

interface Dog extends Animal {
    bark: ()=>{}
}

interface Tank {
    ph: number
}

type Example = Dog extends Animal ? string : number


// 使用条件类型的例子
interface IdLabel {
    id: number
}
interface NameLabel {
    name: string
}

// 重载
function createLabel(key: string): NameLabel
function createLabel(key: number): IdLabel
function createLabel (key: string | number): IdLabel | NameLabel {
    if(typeof key === 'string'){
        return { name : key}
    }
    return { id : key}
}

const label = createLabel('Tom')


type IdOrNameLabel<T> = T extends number ? IdLabel : NameLabel

function createLabel2<T extends string | number> (key: T): IdOrNameLabel<T>;
function createLabel2(key: string | number): IdLabel | NameLabel{
    if(typeof key === 'string'){
        return { name : key}
    }
    return { id : key}
}

const label2 = createLabel2('Tom')

// 条件类型其他的应用场景
type TypeOfMessage<T> = T extends { message: unknown } ? T['message'] : never;

type message = TypeOfMessage<{ message: string }>
type message1 = TypeOfMessage<string>


interface Email {
    message: string,
    from : string,
    to: string
}


const email: Email = {
    message: '123',
    from: '456',
    to: '789'
}

type EmailMessage = string;
const emailMessage: EmailMessage = 'hello Tom'

const email2: TypeOfMessage<Email> = '我是字符串'

// 条件类型的其他使用场景
type GetType<T> = T extends (...args: never[]) => infer ReType ? ReType : never;

type example = GetType<()=>string>
type example1 = GetType<string>

type ToArray<T> = T extends any ? T[] : never

type StringArr = ToArray<string>
type StringArr1 = ToArray<never>

type ToArray2<T> = [T] extends [any] ? T[] : never

type StringArr2 = ToArray<string | number>


