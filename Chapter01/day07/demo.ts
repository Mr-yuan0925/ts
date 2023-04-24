// 类
class Person {
    name:string ='Tom';
    getName():string{
        return this.name
    }
}

const person = new Person();
console.log(person.getName())

console.log('***********************')

// 继承
class Teacher extends Person {
    getTeacherName(): string{
        return 'teacher'
    }
}

const teacher = new Teacher();
console.log(teacher.getName())
console.log(teacher.getTeacherName())

console.log('***********************')

// 替换
class Teacher2 extends Person {
    getTeacherName(): string{
        return 'teacher2 GetTeacherName'
    };
    getName(): string {
        return 'teacher2 GetName'
    }
}

const teacher2 = new Teacher2();
console.log(teacher2.getName())
console.log(teacher2.getTeacherName())

console.log('***********************')

// super.getName() 指定调用父类的getName() 方法
class Teacher3 extends Person {
    getTeacherName(): string{
        return 'teacher3 GetTeacherName'
    };
    getName(): string {
       return super.getName() +  ' ' + 'teacher3 GetName'
    }
}

const teacher3 = new Teacher3();
console.log(teacher3.getName())
console.log(teacher3.getTeacherName())
