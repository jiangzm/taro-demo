"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_hooks_1 = require("taro-hooks");
const hook_png_1 = require("./hook.png");
require("./index.scss");
const react_2 = require("react");
const Index = () => {
    const env = (0, taro_hooks_1.useEnv)();
    const [title, setTitle] = (0, react_2.useState)('');
    // const [_, { setTitle }] = useNavigationBar({ title: "Taro Hooks" });
    const [show] = (0, taro_hooks_1.useModal)({
        title: "Taro Hooks!",
        showCancel: false,
        confirmColor: "#8c2de9",
        confirmText: "支持一下",
        mask: true,
    });
    const [showToast] = (0, taro_hooks_1.useToast)({ mask: true });
    const handleModal = (0, react_1.useCallback)(() => {
        show({ content: "不如给一个star⭐️!" }).then(() => {
            showToast({ title: "点击了支持!" });
        });
    }, [show, showToast]);
    return ((0, jsx_runtime_1.jsxs)(components_1.View, Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsx)(components_1.Image, { className: "logo", src: hook_png_1.default }), (0, jsx_runtime_1.jsx)(components_1.Text, Object.assign({ className: "title" }, { children: "\u4E3ATaro\u800C\u8BBE\u8BA1\u7684Hooks Library" })), (0, jsx_runtime_1.jsx)(components_1.Text, Object.assign({ className: "desc" }, { children: "\u76EE\u524D\u8986\u76D670%\u5B98\u65B9API. \u62B9\u5E73\u90E8\u5206API\u5728H5\u7AEF\u77ED\u677F. \u63D0\u4F9B\u8FD140+Hooks! \u5E76\u7ED3\u5408ahook\u9002\u914DTaro!" })), (0, jsx_runtime_1.jsxs)(components_1.View, Object.assign({ className: "list" }, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, Object.assign({ className: "label" }, { children: "\u8FD0\u884C\u73AF\u5883" })), (0, jsx_runtime_1.jsx)(components_1.Text, Object.assign({ className: "note" }, { children: env }))] })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ className: "button", onClick: () => setTitle("Taro Hooks Nice!") }, { children: "\u8BBE\u7F6E\u6807\u9898" })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ className: "button", onClick: handleModal }, { children: "\u4F7F\u7528Modal" }))] })));
};
exports.default = Index;
//# sourceMappingURL=index.js.map