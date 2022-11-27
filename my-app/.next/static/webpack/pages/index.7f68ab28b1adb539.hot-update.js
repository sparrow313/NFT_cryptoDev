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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const getOwner = async ()=>{\n        try {\n            const provider = getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _owner = await nftContract.owner();\n            const signer = getProviderOrSigner(true);\n            const address = signer.getAddress();\n            if (_owner.toLowerCase() === address.toLowerCase()) setIsOwner(_owner);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        const providers = await web3Modal__WEBPACK_IMPORTED_MODULE_3___default().current.connect();\n        const web3Provider = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.getDefaultProvider(providers);\n        // const web3Provider = await providers.Web3Provider(providers);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.signer();\n            console.log(signer);\n            return signer;\n        }\n        return web3Provider;\n    };\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet(),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this);\n        }\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 14\n            }, this);\n        }\n        if (!presaleStarted && isOwner) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startPresale(),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Start Presale\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this);\n        }\n        if (presaleStarted && !presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"PreSale is Live Mint and Nft is you have Whitelisted your address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Mint and preSale Nft\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true);\n        }\n        if (presaleStarted && presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: \"Public Mint \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 100,\n                columnNumber: 14\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uX+znAk0M53wSeJPb67Q340UxYc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0I7MEJBQUU7Ozs7OztRQUM3QyxDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQzhDOzswQkFDQyw4REFBQ3pELGtEQUFJQTs7a0NBQ0gsOERBQUMyRDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNSO2dCQUFJRixXQUFXNUMscUVBQVc7O2tDQUN6Qiw4REFBQzhDOzswQ0FDQyw4REFBQ1U7Z0NBQUdaLFdBQVc1QyxzRUFBWTswQ0FBRTs7Ozs7OzBDQUM3Qiw4REFBQzhDO2dDQUFJRixXQUFXNUMsNEVBQWtCOzBDQUFFOzs7Ozs7MENBR3BDLDhEQUFDOEM7Z0NBQUlGLFdBQVc1Qyw0RUFBa0I7MENBQUk7Ozs7Ozs0QkFDckN5Qzs7Ozs7OztrQ0FFSCw4REFBQ0s7a0NBQ0MsNEVBQUNXOzRCQUFJYixXQUFXNUMsc0VBQVk7NEJBQUUyRCxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEMsOERBQUNDO2dCQUFPaEIsV0FBVzVDLHVFQUFhOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFLeEMsQ0FBQztHQXpIdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzTW9kYWxcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBldGhlcnMsIHByb3ZpZGVycywgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBDT05UUkFDVF9BRERSRVNTLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3ByZXNhbGVTdGFydGVkLCBzZXRQcmVzYWxlU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3ByZXNhbGVFbmRlZCwgc2V0UHJlc2FsZUVuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbdG9rZW5JZHNNaW50ZWQsIHNldFRva2VuSWRzTWludGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZ2V0T3duZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuXG4gICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHByb3ZpZGVyKTtcblxuICAgICAgY29uc3QgX293bmVyID0gYXdhaXQgbmZ0Q29udHJhY3Qub3duZXIoKTtcblxuICAgICAgY29uc3Qgc2lnbmVyID0gZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcblxuICAgICAgY29uc3QgYWRkcmVzcyA9IHNpZ25lci5nZXRBZGRyZXNzKCk7XG5cbiAgICAgIGlmIChfb3duZXIudG9Mb3dlckNhc2UoKSA9PT0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpKSBzZXRJc093bmVyKF9vd25lcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVyID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IFdlYjNNb2RhbC5jdXJyZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBldGhlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKHByb3ZpZGVycyk7XG4gICAgLy8gY29uc3Qgd2ViM1Byb3ZpZGVyID0gYXdhaXQgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcnMpO1xuXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuXG4gICAgaWYgKCFjaGFpbklkID09IDUpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcImNoYW5nZSB0aGUgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuc2lnbmVyKCk7XG4gICAgICBjb25zb2xlLmxvZyhzaWduZXIpO1xuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldCgpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TG9hZGluZy4uLjwvYnV0dG9uPjtcbiAgICB9XG4gICAgaWYgKCFwcmVzYWxlU3RhcnRlZCAmJiBpc093bmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0UHJlc2FsZSgpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgIFN0YXJ0IFByZXNhbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocHJlc2FsZVN0YXJ0ZWQgJiYgIXByZXNhbGVTdGFydGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgUHJlU2FsZSBpcyBMaXZlIE1pbnQgYW5kIE5mdCBpcyB5b3UgaGF2ZSBXaGl0ZWxpc3RlZCB5b3VyIGFkZHJlc3NcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TWludCBhbmQgcHJlU2FsZSBOZnQ8L2J1dHRvbj47XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHByZXNhbGVTdGFydGVkICYmIHByZXNhbGVTdGFydGVkKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+UHVibGljIE1pbnQg8J+agDwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcnlwdG8gRGV2czwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXaGl0ZWxpc3QtRGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJdHMgYW4gTkZUIGNvbGxlY3Rpb24gZm9yIGRldmVsb3BlcnMgaW4gQ3J5cHRvLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt9LzIwIGhhdmUgYmVlbiBtaW50ZWQ8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyQnV0dG9uKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz1cIi4vY3J5cHRvZGV2cy8wLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJXZWIzTW9kYWwiLCJDb250cmFjdCIsImV0aGVycyIsInByb3ZpZGVycyIsInV0aWxzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNPTlRSQUNUX0FERFJFU1MiLCJhYmkiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwicHJlc2FsZVN0YXJ0ZWQiLCJzZXRQcmVzYWxlU3RhcnRlZCIsInByZXNhbGVFbmRlZCIsInNldFByZXNhbGVFbmRlZCIsInRva2VuSWRzTWludGVkIiwic2V0VG9rZW5JZHNNaW50ZWQiLCJpc093bmVyIiwic2V0SXNPd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid2ViM01vZGFsUmVmIiwiZ2V0T3duZXIiLCJwcm92aWRlciIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZnRDb250cmFjdCIsIl9vd25lciIsIm93bmVyIiwic2lnbmVyIiwiYWRkcmVzcyIsImdldEFkZHJlc3MiLCJ0b0xvd2VyQ2FzZSIsImVycm9yIiwiY29uc29sZSIsImNvbm5lY3RXYWxsZXQiLCJsb2ciLCJuZWVkU2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJ3ZWIzUHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsIndpbmRvdyIsImFsZXJ0IiwiRXJyb3IiLCJyZW5kZXJCdXR0b24iLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3RhcnRQcmVzYWxlIiwiZGl2IiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});