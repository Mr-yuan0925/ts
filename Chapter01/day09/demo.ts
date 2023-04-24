class Person {
    constructor(private _name:string) {
    }
    get name() {
        return this._name
    }
    set name(_name: string) {
        const realName = _name + 'Jack'
        this._name = realName
    }
}

const person = new Person('Tom')
console.log(person.name)

person.name = 'Jack'
console.log(person.name)

console.log('**************')

// 单例模式
// private变成私有的 不允许构建新的
// static把方法直接挂到类上 而不是实例上面
class Demo {
    private static instance: Demo;
    private constructor(public _name: string) {
    }
    get name() {
        return this._name
    }
    static getInstance(_name: string) {
        if(!this.instance){
            this.instance = new Demo(_name);
        }
        return this.instance
    }
}

const demo1 = Demo.getInstance('Tom1')
const demo2 = Demo.getInstance('Tom2')
console.log(demo1.name) // Tom1
console.log(demo2.name) // Tom1
