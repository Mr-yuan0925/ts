const userInfo7: any = undefined;

function catchError(target: any, key: any, descriptor: PropertyDescriptor) {
  console.log(target, key, descriptor)
  const fn = descriptor.value;
  descriptor.value = function (){
    try {
      fn();
    } catch (e) {
      console.log('userInfo 存在问题')
    }
  }
}
function catchError2(message: string) {
  return function (target: any, key: any, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
    const fn = descriptor.value;
    descriptor.value = function (){
      try {
        fn();
      } catch (e) {
        console.log(message)
      }
    }
  }
}


class Demo7 {
  @catchError
  getName() {
    return userInfo7.name
  }
  getAge() {
    try {
      return userInfo7.age
    } catch (e) {
      return 'age不存在'
    }
  }
  @catchError2('age2 不存在')
  getAge2() {
    return userInfo7.age
  }
}

const demo7 = new Demo7()
console.log(demo7.getName())
console.log(demo7.getAge2())
