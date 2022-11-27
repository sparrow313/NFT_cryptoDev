"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const getOwner = ()=>{};\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        const providers = await web3Modal__WEBPACK_IMPORTED_MODULE_3___default().current.connect();\n        const web3Provider = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.getDefaultProvider(providers);\n        // const web3Provider = await providers.Web3Provider(providers);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.signer();\n            console.log(signer);\n            return signer;\n        }\n        return web3Provider;\n    };\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet(),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this);\n            if (loading) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this);\n            }\n            if (!presaleStarted && isOwner) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: startPresale(),\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Start Presale\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this);\n            }\n            if (!presaleStarted) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                    children: \"PreSale hasn't strated\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this);\n            }\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: renderButton()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uX+znAk0M53wSeJPb67Q340UxYc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRDLDhEQUFDQztnQkFBT2hCLFdBQVduQyx1RUFBYTswQkFBRTs7Ozs7Ozs7Ozs7O0FBS3hDLENBQUM7R0E3RnVCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM01vZGFsXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgZXRoZXJzLCBwcm92aWRlcnMsIHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwcmVzYWxlU3RhcnRlZCwgc2V0UHJlc2FsZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwcmVzYWxlRW5kZWQsIHNldFByZXNhbGVFbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3Rva2VuSWRzTWludGVkLCBzZXRUb2tlbklkc01pbnRlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbaXNPd25lciwgc2V0SXNPd25lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGdldE93bmVyID0gKCkgPT4ge307XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IHRydWUpID0+IHtcbiAgICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBXZWIzTW9kYWwuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gZXRoZXJzLmdldERlZmF1bHRQcm92aWRlcihwcm92aWRlcnMpO1xuICAgIC8vIGNvbnN0IHdlYjNQcm92aWRlciA9IGF3YWl0IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXJzKTtcblxuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcblxuICAgIGlmICghY2hhaW5JZCA9PSA1KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJjaGFuZ2UgdGhlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIHRoZSBuZXR3b3JrIHRvIEdvZXJsaVwiKTtcbiAgICB9XG5cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLnNpZ25lcigpO1xuICAgICAgY29uc29sZS5sb2coc2lnbmVyKTtcbiAgICAgIHJldHVybiBzaWduZXI7XG4gICAgfVxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXQoKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgIDwvYnV0dG9uPjtcblxuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkxvYWRpbmcuLi48L2J1dHRvbj47XG4gICAgICB9XG4gICAgICBpZiAoIXByZXNhbGVTdGFydGVkICYmIGlzT3duZXIpIHtcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydFByZXNhbGUoKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBTdGFydCBQcmVzYWxlXG4gICAgICAgIDwvYnV0dG9uPjtcbiAgICAgIH1cbiAgICAgIGlmICghcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+UHJlU2FsZSBoYXNuJ3Qgc3RyYXRlZDwvZGl2PjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyeXB0byBEZXZzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdC1EYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e30vMjAgaGF2ZSBiZWVuIG1pbnRlZDwvZGl2PlxuICAgICAgICAgIDxidXR0b24+e3JlbmRlckJ1dHRvbigpfTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0b2RldnMvMC5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiV2ViM01vZGFsIiwiQ29udHJhY3QiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJ1dGlscyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwicHJlc2FsZVN0YXJ0ZWQiLCJzZXRQcmVzYWxlU3RhcnRlZCIsInByZXNhbGVFbmRlZCIsInNldFByZXNhbGVFbmRlZCIsInRva2VuSWRzTWludGVkIiwic2V0VG9rZW5JZHNNaW50ZWQiLCJpc093bmVyIiwic2V0SXNPd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid2ViM01vZGFsUmVmIiwiZ2V0T3duZXIiLCJjb25uZWN0V2FsbGV0IiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm5lZWRTaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIndlYjNQcm92aWRlciIsImdldERlZmF1bHRQcm92aWRlciIsImNoYWluSWQiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsInNpZ25lciIsInJlbmRlckJ1dHRvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzdGFydFByZXNhbGUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbWciLCJpbWFnZSIsInNyYyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});