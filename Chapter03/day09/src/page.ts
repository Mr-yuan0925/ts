interface Person {
  name: string;
  age: number;
  gender: string
}

class Teacher {
  constructor(private info: Person){};
  getInfo<T extends keyof Person>(key: T): Person[T]{
    return this.info[key]
  }
}

const teacher = new Teacher({
  name: 'Tom',
  age: 18,
  gender: 'male'
})

const test = teacher.getInfo('name')

console.log(test);


type Name = "name"

const studentName: Name = "name"
