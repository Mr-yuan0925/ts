// 命名空间
// 指定依赖的文件 ///  <reference path="./components.ts" />
/// <reference path="./components.ts" />
namespace Home {

  // 导出
  export class Page {

    user:Components.User = {
      name: 'Tom'
    }

    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
      new Components.SubComponents.SubTest();
    }
  }
}
