"use strict";
var Components;
(function (Components) {
    let SubComponents;
    (function (SubComponents) {
        class SubTest {
            constructor() {
                const elem = document.createElement('div');
                elem.innerText = "This is a SubTest";
                document.body.appendChild(elem);
            }
        }
        SubComponents.SubTest = SubTest;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = "This is a Header";
            document.body.appendChild(elem);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = "This is a Content";
            document.body.appendChild(elem);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = "This is a Footer";
            document.body.appendChild(elem);
        }
    }
    Components.Footer = Footer;
})(Components || (Components = {}));
// 命名空间
// 指定依赖的文件 ///  <reference path="./components.ts" />
/// <reference path="./components.ts" />
var Home;
(function (Home) {
    // 导出
    class Page {
        constructor() {
            this.user = {
                name: 'Tom'
            };
            new Components.Header();
            new Components.Content();
            new Components.Footer();
            new Components.SubComponents.SubTest();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
