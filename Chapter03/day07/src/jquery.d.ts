// 申明全局变量$  
// declare var $: (param: ()=> void) => void

// 定义全局函数

interface JqueryInterface {
  html: (html: string) => JqueryInterface
}
// 函数重载
declare function $(readFunc:()=> void): void
declare function $(selector: string): JqueryInterface;
// 如何对对象的类型定义，以及对类的类型定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {

    }

  }
}

// 使用接口的方式写出重载
// interface Jquery {
//   (readFunc:()=> void): void;
//   (selector: string): JqueryInterface;
// }

// declare var $: Jquery