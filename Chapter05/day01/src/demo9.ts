// import 'reflect-metadata'
//
// function showData(target: any,key: string) {
//   console.log(target, key , '******')
//     const data = Reflect.getMetadata('age',target,key)
//     console.log(data)
// }
//
// class userInfo9 {
//   @Reflect.metadata('age', 22)
//   getName() {}
//   @Reflect.metadata('age', 23)
//   getAge() {}
//
// }
//
// for (let targetKey in new userInfo9()) {
//   showData(userInfo9.prototype, targetKey)
// }
