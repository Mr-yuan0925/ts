// 类的装饰器
// 装饰器本省就是一个函数
// 类装饰器的接受参数是构造函数
// 装饰器用@ 符号来使用
function DemoDecorator2() {
  return function <T extends new (...args: any[]) => any>(constructor: T){
    return class extends constructor {
        name = 'jack'
        getName() {
          return this.name
        }
    }
  }
}
 
const Demo2 = DemoDecorator2()(
  class {
    name: string;
    constructor(name: string){
      this.name = name
    }
  }
)

const demo2 = new Demo2('Tom');
console.log(demo2.getName())