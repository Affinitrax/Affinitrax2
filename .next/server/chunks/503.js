"use strict";
exports.id = 503;
exports.ids = [503];
exports.modules = {

/***/ 503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Footer.tsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "p-4 border-t border-gray-800 text-center text-sm text-gray-400",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
            children: [
                "\xa9 ",
                new Date().getFullYear(),
                " Affinitrax. All rights reserved."
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.tsx



function Layout({ children, title }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-black text-white flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Affinitrax - Fueling Tomorrow’s Traffic. Today."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "p-4 border-b border-gray-800 sticky top-0 bg-black z-10",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between items-center max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "text-2xl font-bold",
                            children: "Affinitrax"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://t.me/affinitrax",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl",
                            children: "Telegram"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "flex-grow",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;