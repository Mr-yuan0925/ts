// 方法装饰器 
// 普通方法 target对应的是类的prototype key是装饰方法的名字
// 静态方法 target对应的是类的构造函数
function getNameDecorator3(target:any,key:string,descriptor: PropertyDescriptor) {
  console.log(target, key)
  descriptor.writable = true
  descriptor.value = function (){
    return '456'
  }
}


class Demo3 {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  @getNameDecorator3
  getName() {
    return this.name
  }
  // static getName2() {
  //   return '123'
  // }
}

const demo3 = new Demo3('Tom');
// demo3.getName=()=>{
//   return '123'
// }
console.log(demo3.getName())