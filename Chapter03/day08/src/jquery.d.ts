// ES6 模块化
declare module "jquery" {
  interface JqueryInterface {
    html: (html: string) => JqueryInterface;
  }
  // 函数重载
  function $(readFunc: () => void): void;
  function $(selector: string): JqueryInterface;
  // 如何对对象的类型定义，以及对类的类型定义，以及命名空间的嵌套
  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $
}
