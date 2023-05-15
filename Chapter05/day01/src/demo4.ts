// 访问器的装饰器 

function visitNameDecorator4(target:any,key:string,descriptor: PropertyDescriptor) {
  descriptor.writable = true
}


class Demo4 {
  private _name: string;
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
  @visitNameDecorator4
  set name(name: string) {
    this._name = name
  }
}

const demo4 = new Demo4('Tom');
demo4.name = '123'
console.log(demo4.name);
