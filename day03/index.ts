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

function showMessage(message: any) {
    console.log(message)
}
