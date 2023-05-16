// 参数的装饰器

// target 原型 method 方法的名字  paramIndex 参数所在的方法的位置
function paramsDecorator6(target:any,method:string, paramIndex: number): any {
  console.log(target, method,paramIndex)
}


class Demo6 {
  getInfo(@paramsDecorator6 name: string, age: number){
    return `${name} is ${age} years old`
  }
}

const demo6 = new Demo6();
const test6 = demo6.getInfo('Tom', 18)
console.log(test6)
