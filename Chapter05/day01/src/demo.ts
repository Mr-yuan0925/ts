// 类的装饰器
// 装饰器本省就是一个函数
// 类装饰器的接受参数是构造函数
// 装饰器用@ 符号来使用

function DemoDecorator(constructor: any) {
  constructor.prototype.getName= ()=>{
    console.log('Tom')
  }
}
@DemoDecorator


class Demo {}

const demo = new Demo();
(demo as any).getName();

