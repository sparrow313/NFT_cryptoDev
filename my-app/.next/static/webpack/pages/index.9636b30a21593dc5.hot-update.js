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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const checkIfPresaleStarted = async ()=>{\n        const provider = getProviderOrSigner();\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract({\n            CONTRACT_ADDRESS: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS,\n            abi: _constants__WEBPACK_IMPORTED_MODULE_5__.abi,\n            provider\n        });\n        const _presaleStarted = await nftContract.presaleStarted();\n    };\n    const getOwner = async ()=>{\n        try {\n            const provider = getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _owner = await nftContract.owner();\n            const signer = getProviderOrSigner(true);\n            const address = signer.getAddress();\n            if (_owner.toLowerCase() === address.toLowerCase()) {\n                setIsOwner(true);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        const provider = await web3ModalRef.current.connect();\n        // const web3Provider = ethers.getDefaultProvider(providers);\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.signer();\n            console.log(signer);\n            return signer;\n        }\n        return web3Provider;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!walletConnected) {\n            // Assign the Web3Modal class to the reference object by setting it's `current` value\n            // The `current` value is persisted throughout as long as this page is open\n            web3ModalRef.current = new (web3Modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n            const _presaleStarted = checkIfPresaleStarted();\n            if (_presaleStarted) {\n                checkIfPresaleEnded();\n            }\n        }\n    }, [\n        walletConnected\n    ]);\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this);\n        }\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 112,\n                columnNumber: 14\n            }, this);\n        }\n        if (!presaleStarted && isOwner) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startPresale(),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Start Presale\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this);\n        }\n        if (presaleStarted && !presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"PreSale is Live Mint and Nft is you have Whitelisted your address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Mint and preSale Nft\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true);\n        }\n        if (presaleStarted && presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: \"Public Mint \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 132,\n                columnNumber: 14\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 145,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 146,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6In2mTI+BqytAeCGNSy1/xr9cVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUNXOzRCQUFJYixXQUFXbEQsc0VBQVk7NEJBQUVpRSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEMsOERBQUNDO2dCQUFPaEIsV0FBV2xELHVFQUFhOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFLeEMsQ0FBQztHQXpKdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzTW9kYWxcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBldGhlcnMsIHByb3ZpZGVycywgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBDT05UUkFDVF9BRERSRVNTLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3ByZXNhbGVTdGFydGVkLCBzZXRQcmVzYWxlU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3ByZXNhbGVFbmRlZCwgc2V0UHJlc2FsZUVuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbdG9rZW5JZHNNaW50ZWQsIHNldFRva2VuSWRzTWludGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2hlY2tJZlByZXNhbGVTdGFydGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuXG4gICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgQ29udHJhY3Qoe1xuICAgICAgQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgIGFiaSxcbiAgICAgIHByb3ZpZGVyLFxuICAgIH0pO1xuXG4gICAgY29uc3QgX3ByZXNhbGVTdGFydGVkID0gYXdhaXQgbmZ0Q29udHJhY3QucHJlc2FsZVN0YXJ0ZWQoKTtcbiAgfTtcblxuICBjb25zdCBnZXRPd25lciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG5cbiAgICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgcHJvdmlkZXIpO1xuXG4gICAgICBjb25zdCBfb3duZXIgPSBhd2FpdCBuZnRDb250cmFjdC5vd25lcigpO1xuXG4gICAgICBjb25zdCBzaWduZXIgPSBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuXG4gICAgICBjb25zdCBhZGRyZXNzID0gc2lnbmVyLmdldEFkZHJlc3MoKTtcblxuICAgICAgaWYgKF9vd25lci50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgc2V0SXNPd25lcih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIC8vIGNvbnN0IHdlYjNQcm92aWRlciA9IGV0aGVycy5nZXREZWZhdWx0UHJvdmlkZXIocHJvdmlkZXJzKTtcbiAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG5cbiAgICBpZiAoIWNoYWluSWQgPT0gNSkge1xuICAgICAgd2luZG93LmFsZXJ0KFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIEdvZXJsaVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNoYW5nZSB0aGUgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5zaWduZXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKHNpZ25lcik7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgV2ViM01vZGFsIGNsYXNzIHRvIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGJ5IHNldHRpbmcgaXQncyBgY3VycmVudGAgdmFsdWVcbiAgICAgIC8vIFRoZSBgY3VycmVudGAgdmFsdWUgaXMgcGVyc2lzdGVkIHRocm91Z2hvdXQgYXMgbG9uZyBhcyB0aGlzIHBhZ2UgaXMgb3BlblxuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJnb2VybGlcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZUluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25uZWN0V2FsbGV0KCk7XG5cbiAgICAgIGNvbnN0IF9wcmVzYWxlU3RhcnRlZCA9IGNoZWNrSWZQcmVzYWxlU3RhcnRlZCgpO1xuICAgICAgaWYgKF9wcmVzYWxlU3RhcnRlZCkge1xuICAgICAgICBjaGVja0lmUHJlc2FsZUVuZGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbd2FsbGV0Q29ubmVjdGVkXSk7XG5cbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5Mb2FkaW5nLi4uPC9idXR0b24+O1xuICAgIH1cbiAgICBpZiAoIXByZXNhbGVTdGFydGVkICYmIGlzT3duZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRQcmVzYWxlKCl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgU3RhcnQgUHJlc2FsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwcmVzYWxlU3RhcnRlZCAmJiAhcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBQcmVTYWxlIGlzIExpdmUgTWludCBhbmQgTmZ0IGlzIHlvdSBoYXZlIFdoaXRlbGlzdGVkIHlvdXIgYWRkcmVzc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5NaW50IGFuZCBwcmVTYWxlIE5mdDwvYnV0dG9uPjtcbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocHJlc2FsZVN0YXJ0ZWQgJiYgcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5QdWJsaWMgTWludCDwn5qAPC9kaXY+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyeXB0byBEZXZzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdC1EYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e30vMjAgaGF2ZSBiZWVuIG1pbnRlZDwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJCdXR0b24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPVwiLi9jcnlwdG9kZXZzLzAuc3ZnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICBNYWRlIHdpdGggJiMxMDA4NDsgYnkgQ3J5cHRvIERldnNcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIldlYjNNb2RhbCIsIkNvbnRyYWN0IiwiZXRoZXJzIiwicHJvdmlkZXJzIiwidXRpbHMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJwcmVzYWxlU3RhcnRlZCIsInNldFByZXNhbGVTdGFydGVkIiwicHJlc2FsZUVuZGVkIiwic2V0UHJlc2FsZUVuZGVkIiwidG9rZW5JZHNNaW50ZWQiLCJzZXRUb2tlbklkc01pbnRlZCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ3ZWIzTW9kYWxSZWYiLCJjaGVja0lmUHJlc2FsZVN0YXJ0ZWQiLCJwcm92aWRlciIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZnRDb250cmFjdCIsIl9wcmVzYWxlU3RhcnRlZCIsImdldE93bmVyIiwiX293bmVyIiwib3duZXIiLCJzaWduZXIiLCJhZGRyZXNzIiwiZ2V0QWRkcmVzcyIsInRvTG93ZXJDYXNlIiwiZXJyb3IiLCJjb25zb2xlIiwiY29ubmVjdFdhbGxldCIsImxvZyIsIm5lZWRTaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIndlYjNQcm92aWRlciIsIldlYjNQcm92aWRlciIsImNoYWluSWQiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlSW5qZWN0ZWRQcm92aWRlciIsImNoZWNrSWZQcmVzYWxlRW5kZWQiLCJyZW5kZXJCdXR0b24iLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3RhcnRQcmVzYWxlIiwiZGl2IiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});