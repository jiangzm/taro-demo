"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./app.scss");
class App extends react_1.Component {
    componentDidMount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        return (0, jsx_runtime_1.jsx)(components_1.View, { children: this.props.children });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map