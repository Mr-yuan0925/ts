// 访问器的装饰器

// 修改的并不是实例上的name 而是原型上的 name
function nameDecorator5(target:any,key:string): any {
  target[key] = 'lee'
  const descriptor: PropertyDescriptor = {
    writable: true
  }
  return descriptor
}


class Demo5 {
  @nameDecorator5
  name = '456';
  constructor(name: string) {
    this.name = name
  }
}

const demo5 = new Demo5('Tom');
demo5.name = '789'
console.log(demo5.name);
