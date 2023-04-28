define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = "This is a Header";
            document.body.appendChild(elem);
        }
    }
    exports.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = "This is a Content";
            document.body.appendChild(elem);
        }
    }
    exports.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = "This is a Footer";
            document.body.appendChild(elem);
        }
    }
    exports.Footer = Footer;
});
define("demo", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 导出
    class Page {
        constructor() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
    }
    exports.default = Page;
});
