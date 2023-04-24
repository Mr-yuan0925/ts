// 类
// private protected public 访问类型
// public 允许在类的类内外被调用 默认public
// private 允许在类的类内被调用
// protected 允许在类内及其继承的子类的使用
class Person {
    public name:string;
    public say() {
        console.log('hi' + this.name)
    }
}

const person  = new Person();
person.name = 'Tom';
console.log(person.name)
person.say()

console.log('*****************')

class Person2 {
    private name:string;
    public say() {
        console.log('hi' + this.name)
    }
}


const person2  = new Person2();
// person2.name = 'Tom2'; // 报错 不让在外部调用
// console.log(person2.name) // 报错 不让在外部调用
person2.say();

console.log('*****************')

class Person3 {
    protected name:string;
    public say() {
        console.log('hi' + this.name)
    }
}

const person3 = new Person3();
// person3.name = 'Tom2'; // 报错 不让在外部调用
// console.log(person3.name) // 报错 不让在外部调用
person3.say();

// 继承
class Teacher extends Person3 {
    public sayHi() {
        console.log(this.name + 'Person3')
    }
}

const teacher = new Teacher();
teacher.sayHi()

// constructor
class Animal {
    // 传统写法
    // public name: string;
    // constructor(name: string) {
    //     this.name = name
    // }
    // 简化写法
    constructor(public name: string) {
    }
}

const cat = new Animal('Cat')
console.log(cat.name)

console.log('*****************')

class NewAnimal {
    constructor(public name: string) {
    }
}

class Dog extends NewAnimal {
    constructor(public age: number) {
        // 需要调用父类的构造函数
        super('Dog');
    }
}

const dog = new Dog(28)
console.log(dog.name)
console.log(dog.age)


