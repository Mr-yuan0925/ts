import 'reflect-metadata'

// 定义到对象上
const userInfo8 = {
  name: 'Tom'
}

Reflect.defineMetadata('age',18,userInfo8)

console.log(Reflect.getMetadata('age',userInfo8))


// 定义到类上
@Reflect.metadata('age', 19)
class text_userInfo {
  name = 'Jack'
}

console.log(Reflect.getMetadata('age',text_userInfo))

class text_userInfo2 {
  @Reflect.metadata('age', 20)
  @Reflect.metadata('age1', 21)
  name = 'Jack'
}
class Teacher extends text_userInfo2{

}

console.log(Reflect.getMetadata('age',text_userInfo2.prototype, 'name'))
console.log(Reflect.hasMetadata('age',text_userInfo2.prototype, 'name'))
console.log(Reflect.hasOwnMetadata('age',Teacher.prototype, 'name'))

console.log(Reflect.getMetadataKeys(text_userInfo2.prototype,'name'))
console.log(Reflect.getOwnMetadataKeys(Teacher.prototype,'name'))


console.log(Reflect.deleteMetadata('age',text_userInfo2.prototype))
