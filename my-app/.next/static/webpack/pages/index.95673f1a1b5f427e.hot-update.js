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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const getOwner = async ()=>{\n        const provider = getProviderOrSigner();\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n        const owner = await nftContract.owner();\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        const providers = await web3Modal__WEBPACK_IMPORTED_MODULE_3___default().current.connect();\n        const web3Provider = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.getDefaultProvider(providers);\n        // const web3Provider = await providers.Web3Provider(providers);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.signer();\n            console.log(signer);\n            return signer;\n        }\n        return web3Provider;\n    };\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet(),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this);\n        }\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 14\n            }, this);\n        }\n        if (!presaleStarted && isOwner) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startPresale(),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Start Presale\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this);\n        }\n        if (presaleStarted && !presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"PreSale is Live Mint and Nft is you have Whitelisted your address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Mint and preSale Nft\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true);\n        }\n        if (presaleStarted && presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: \"Public Mint \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 14\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uX+znAk0M53wSeJPb67Q340UxYc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1I7Z0JBQUlGLFdBQVd4QyxxRUFBVzs7a0NBQ3pCLDhEQUFDMEM7OzBDQUNDLDhEQUFDVTtnQ0FBR1osV0FBV3hDLHNFQUFZOzBDQUFFOzs7Ozs7MENBQzdCLDhEQUFDMEM7Z0NBQUlGLFdBQVd4Qyw0RUFBa0I7MENBQUU7Ozs7OzswQ0FHcEMsOERBQUMwQztnQ0FBSUYsV0FBV3hDLDRFQUFrQjswQ0FBSTs7Ozs7OzRCQUNyQ3FDOzs7Ozs7O2tDQUVILDhEQUFDSztrQ0FDQyw0RUFBQ1c7NEJBQUliLFdBQVd4QyxzRUFBWTs0QkFBRXVELEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ0M7Z0JBQU9oQixXQUFXeEMsdUVBQWE7MEJBQUU7Ozs7Ozs7Ozs7OztBQUt4QyxDQUFDO0dBL0d1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNNb2RhbFwiO1xuaW1wb3J0IHsgQ29udHJhY3QsIGV0aGVycywgcHJvdmlkZXJzLCB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MsIGFiaSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcHJlc2FsZVN0YXJ0ZWQsIHNldFByZXNhbGVTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcHJlc2FsZUVuZGVkLCBzZXRQcmVzYWxlRW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFt0b2tlbklkc01pbnRlZCwgc2V0VG9rZW5JZHNNaW50ZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBnZXRPd25lciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcblxuICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgcHJvdmlkZXIpO1xuXG4gICAgY29uc3Qgb3duZXIgPSBhd2FpdCBuZnRDb250cmFjdC5vd25lcigpO1xuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSB0cnVlKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgV2ViM01vZGFsLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IGV0aGVycy5nZXREZWZhdWx0UHJvdmlkZXIocHJvdmlkZXJzKTtcbiAgICAvLyBjb25zdCB3ZWIzUHJvdmlkZXIgPSBhd2FpdCBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVycyk7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG5cbiAgICBpZiAoIWNoYWluSWQgPT0gNSkge1xuICAgICAgd2luZG93LmFsZXJ0KFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIEdvZXJsaVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNoYW5nZSB0aGUgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5zaWduZXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKHNpZ25lcik7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0KCl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5Mb2FkaW5nLi4uPC9idXR0b24+O1xuICAgIH1cbiAgICBpZiAoIXByZXNhbGVTdGFydGVkICYmIGlzT3duZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRQcmVzYWxlKCl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgU3RhcnQgUHJlc2FsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwcmVzYWxlU3RhcnRlZCAmJiAhcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBQcmVTYWxlIGlzIExpdmUgTWludCBhbmQgTmZ0IGlzIHlvdSBoYXZlIFdoaXRlbGlzdGVkIHlvdXIgYWRkcmVzc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5NaW50IGFuZCBwcmVTYWxlIE5mdDwvYnV0dG9uPjtcbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocHJlc2FsZVN0YXJ0ZWQgJiYgcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5QdWJsaWMgTWludCDwn5qAPC9kaXY+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyeXB0byBEZXZzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdC1EYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e30vMjAgaGF2ZSBiZWVuIG1pbnRlZDwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJCdXR0b24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPVwiLi9jcnlwdG9kZXZzLzAuc3ZnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICBNYWRlIHdpdGggJiMxMDA4NDsgYnkgQ3J5cHRvIERldnNcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIldlYjNNb2RhbCIsIkNvbnRyYWN0IiwiZXRoZXJzIiwicHJvdmlkZXJzIiwidXRpbHMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJwcmVzYWxlU3RhcnRlZCIsInNldFByZXNhbGVTdGFydGVkIiwicHJlc2FsZUVuZGVkIiwic2V0UHJlc2FsZUVuZGVkIiwidG9rZW5JZHNNaW50ZWQiLCJzZXRUb2tlbklkc01pbnRlZCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ3ZWIzTW9kYWxSZWYiLCJnZXRPd25lciIsInByb3ZpZGVyIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5mdENvbnRyYWN0Iiwib3duZXIiLCJjb25uZWN0V2FsbGV0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibmVlZFNpZ25lciIsImN1cnJlbnQiLCJjb25uZWN0Iiwid2ViM1Byb3ZpZGVyIiwiZ2V0RGVmYXVsdFByb3ZpZGVyIiwiY2hhaW5JZCIsImdldE5ldHdvcmsiLCJ3aW5kb3ciLCJhbGVydCIsIkVycm9yIiwic2lnbmVyIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsInN0YXJ0UHJlc2FsZSIsImRpdiIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImltZyIsImltYWdlIiwic3JjIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});