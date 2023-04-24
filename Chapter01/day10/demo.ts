class Person {
    public readonly name: string;
    constructor(name: string) {
        this.name = name
    }
}

const person = new Person('Tom')
console.log(person.name)
// person.name = 'Jack' // 报错 只能读取 不能修改

console.log('************')

// 抽象类
abstract class Geom {
    width: number;
    getType() {
        return 'Geom'
    }
    abstract getArea():string;
}

// 抽象类只能继承
class Circle extends Geom {
    getArea(): string {
        return "123";
    }
}

console.log('************')

interface PersonMan {
    name: string;
}

interface Teacher extends PersonMan {
    teacherAge: number;
}

interface Student extends PersonMan {
    age: number
}

const teacher: Teacher = {
    name: 'Tom',
    teacherAge: 38
}

const student: Student = {
    name: 'jack',
    age: 20
}

const getUserInfo = (user: PersonMan) => {
    console.log(user.name)
}

getUserInfo(teacher)
getUserInfo(student)

