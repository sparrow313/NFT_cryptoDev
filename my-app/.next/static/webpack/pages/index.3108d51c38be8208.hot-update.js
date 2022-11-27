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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const startPresale = async ()=>{\n        try {\n            const signer = await getProviderOrSigner(true);\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n            const tx = await nftContract.startPresale();\n            setLoading(true);\n            await tx.wait();\n            setLoading(false);\n            checkIfPresaleStarted();\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const presaleMint = async ()=>{\n        const signer = await getProviderOrSigner(true);\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n        const tx = await nftContract.presaleMint({\n            value: ethers__WEBPACK_IMPORTED_MODULE_6__.utils.parseEther(\"0.01\")\n        });\n        setLoading(true);\n        await tx.wait();\n        setLoading(false);\n        window.alert(\"You have successfully minted a Crypto Dev!\");\n    };\n    const publicMInt = async ()=>{\n        const signer = await getProviderOrSigner(true);\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n    };\n    const checkIfPresaleStarted = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _presaleStarted = await nftContract.presaleStarted();\n            if (!presaleStarted) {\n                await getOwner();\n            }\n            setPresaleStarted(_presaleStarted);\n            return _presaleStarted;\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const checkIfPresaleEnded = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _presaleEnded = await nftContract.presaleEnded();\n            const hasEnded = _presaleEnded.lt(Math.floor(Date.now() / 1000));\n            if (hasEnded) {\n                setPresaleEnded(true);\n            } else {\n                setPresaleEnded(false);\n            }\n            return hasEnded;\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const getOwner = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _owner = await nftContract.owner();\n            const signer = await getProviderOrSigner(true);\n            const address = await signer.getAddress();\n            if (address.toLowerCase() === _owner.toLowerCase()) {\n                setIsOwner(true);\n            }\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        const provider = await web3ModalRef.current.connect();\n        // const web3Provider = ethers.getDefaultProvider(providers);\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.getSigner();\n            return signer;\n        }\n        return web3Provider;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!walletConnected) {\n            // Assign the Web3Modal class to the reference object by setting it's `current` value\n            // The `current` value is persisted throughout as long as this page is open\n            web3ModalRef.current = new (web3Modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n            const _presaleStarted = checkIfPresaleStarted();\n            if (_presaleStarted) {\n                checkIfPresaleEnded();\n            }\n        }\n    }, [\n        walletConnected\n    ]);\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 172,\n                columnNumber: 9\n            }, this);\n        }\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 178,\n                columnNumber: 14\n            }, this);\n        }\n        if (!presaleStarted && isOwner) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startPresale,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Start Presale\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 182,\n                columnNumber: 9\n            }, this);\n        }\n        if (presaleStarted && !presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"PreSale is Live Mint and Nft is you have Whitelisted your address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 190,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Mint and preSale Nft\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 193,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true);\n        }\n        if (presaleStarted && presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: \"Public Mint \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 198,\n                columnNumber: 14\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 205,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 206,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 207,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 204,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 211,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 212,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 215,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 210,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 219,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 218,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 209,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 223,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 203,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6In2mTI+BqytAeCGNSy1/xr9cVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQ0gsOERBQUMrRTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNSO2dCQUFJRCxXQUFXakUscUVBQVc7O2tDQUN6Qiw4REFBQ2tFOzswQ0FDQyw4REFBQ1U7Z0NBQUdYLFdBQVdqRSxzRUFBWTswQ0FBRTs7Ozs7OzBDQUM3Qiw4REFBQ2tFO2dDQUFJRCxXQUFXakUsNEVBQWtCOzBDQUFFOzs7Ozs7MENBR3BDLDhEQUFDa0U7Z0NBQUlELFdBQVdqRSw0RUFBa0I7MENBQUk7Ozs7Ozs0QkFDckM4RDs7Ozs7OztrQ0FFSCw4REFBQ0k7a0NBQ0MsNEVBQUNXOzRCQUFJWixXQUFXakUsc0VBQVk7NEJBQUUrRSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEMsOERBQUNDO2dCQUFPZixXQUFXakUsdUVBQWE7MEJBQUU7Ozs7Ozs7Ozs7OztBQUt4QyxDQUFDO0dBM051Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNNb2RhbFwiO1xuaW1wb3J0IHsgQ29udHJhY3QsIGV0aGVycywgcHJvdmlkZXJzLCB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MsIGFiaSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcHJlc2FsZVN0YXJ0ZWQsIHNldFByZXNhbGVTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcHJlc2FsZUVuZGVkLCBzZXRQcmVzYWxlRW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFt0b2tlbklkc01pbnRlZCwgc2V0VG9rZW5JZHNNaW50ZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBzdGFydFByZXNhbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgc2lnbmVyKTtcblxuICAgICAgY29uc3QgdHggPSBhd2FpdCBuZnRDb250cmFjdC5zdGFydFByZXNhbGUoKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNoZWNrSWZQcmVzYWxlU3RhcnRlZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlc2FsZU1pbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcblxuICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgc2lnbmVyKTtcblxuICAgIGNvbnN0IHR4ID0gYXdhaXQgbmZ0Q29udHJhY3QucHJlc2FsZU1pbnQoe1xuICAgICAgdmFsdWU6IHV0aWxzLnBhcnNlRXRoZXIoXCIwLjAxXCIpLFxuICAgIH0pO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgYXdhaXQgdHgud2FpdCgpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHdpbmRvdy5hbGVydChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBtaW50ZWQgYSBDcnlwdG8gRGV2IVwiKTtcbiAgfTtcblxuICBjb25zdCBwdWJsaWNNSW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG5cbiAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHNpZ25lcik7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJZlByZXNhbGVTdGFydGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcblxuICAgICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgYWJpLCBwcm92aWRlcik7XG5cbiAgICAgIGNvbnN0IF9wcmVzYWxlU3RhcnRlZCA9IGF3YWl0IG5mdENvbnRyYWN0LnByZXNhbGVTdGFydGVkKCk7XG4gICAgICBpZiAoIXByZXNhbGVTdGFydGVkKSB7XG4gICAgICAgIGF3YWl0IGdldE93bmVyKCk7XG4gICAgICB9XG4gICAgICBzZXRQcmVzYWxlU3RhcnRlZChfcHJlc2FsZVN0YXJ0ZWQpO1xuICAgICAgcmV0dXJuIF9wcmVzYWxlU3RhcnRlZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrSWZQcmVzYWxlRW5kZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuXG4gICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHByb3ZpZGVyKTtcblxuICAgICAgY29uc3QgX3ByZXNhbGVFbmRlZCA9IGF3YWl0IG5mdENvbnRyYWN0LnByZXNhbGVFbmRlZCgpO1xuXG4gICAgICBjb25zdCBoYXNFbmRlZCA9IF9wcmVzYWxlRW5kZWQubHQoTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpO1xuXG4gICAgICBpZiAoaGFzRW5kZWQpIHtcbiAgICAgICAgc2V0UHJlc2FsZUVuZGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UHJlc2FsZUVuZGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNFbmRlZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE93bmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcblxuICAgICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgYWJpLCBwcm92aWRlcik7XG5cbiAgICAgIGNvbnN0IF9vd25lciA9IGF3YWl0IG5mdENvbnRyYWN0Lm93bmVyKCk7XG5cbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuXG4gICAgICBpZiAoYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSBfb3duZXIudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBzZXRJc093bmVyKHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgLy8gY29uc3Qgd2ViM1Byb3ZpZGVyID0gZXRoZXJzLmdldERlZmF1bHRQcm92aWRlcihwcm92aWRlcnMpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcblxuICAgIGlmICghY2hhaW5JZCA9PSA1KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJjaGFuZ2UgdGhlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIHRoZSBuZXR3b3JrIHRvIEdvZXJsaVwiKTtcbiAgICB9XG5cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpO1xuXG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgV2ViM01vZGFsIGNsYXNzIHRvIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGJ5IHNldHRpbmcgaXQncyBgY3VycmVudGAgdmFsdWVcbiAgICAgIC8vIFRoZSBgY3VycmVudGAgdmFsdWUgaXMgcGVyc2lzdGVkIHRocm91Z2hvdXQgYXMgbG9uZyBhcyB0aGlzIHBhZ2UgaXMgb3BlblxuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJnb2VybGlcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZUluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25uZWN0V2FsbGV0KCk7XG5cbiAgICAgIGNvbnN0IF9wcmVzYWxlU3RhcnRlZCA9IGNoZWNrSWZQcmVzYWxlU3RhcnRlZCgpO1xuICAgICAgaWYgKF9wcmVzYWxlU3RhcnRlZCkge1xuICAgICAgICBjaGVja0lmUHJlc2FsZUVuZGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbd2FsbGV0Q29ubmVjdGVkXSk7XG5cbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5Mb2FkaW5nLi4uPC9idXR0b24+O1xuICAgIH1cbiAgICBpZiAoIXByZXNhbGVTdGFydGVkICYmIGlzT3duZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRQcmVzYWxlfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgIFN0YXJ0IFByZXNhbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocHJlc2FsZVN0YXJ0ZWQgJiYgIXByZXNhbGVTdGFydGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgUHJlU2FsZSBpcyBMaXZlIE1pbnQgYW5kIE5mdCBpcyB5b3UgaGF2ZSBXaGl0ZWxpc3RlZCB5b3VyIGFkZHJlc3NcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TWludCBhbmQgcHJlU2FsZSBOZnQ8L2J1dHRvbj47XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHByZXNhbGVTdGFydGVkICYmIHByZXNhbGVTdGFydGVkKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+UHVibGljIE1pbnQg8J+agDwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcnlwdG8gRGV2czwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXaGl0ZWxpc3QtRGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJdHMgYW4gTkZUIGNvbGxlY3Rpb24gZm9yIGRldmVsb3BlcnMgaW4gQ3J5cHRvLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt9LzIwIGhhdmUgYmVlbiBtaW50ZWQ8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyQnV0dG9uKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz1cIi4vY3J5cHRvZGV2cy8wLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJXZWIzTW9kYWwiLCJDb250cmFjdCIsImV0aGVycyIsInByb3ZpZGVycyIsInV0aWxzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNPTlRSQUNUX0FERFJFU1MiLCJhYmkiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwicHJlc2FsZVN0YXJ0ZWQiLCJzZXRQcmVzYWxlU3RhcnRlZCIsInByZXNhbGVFbmRlZCIsInNldFByZXNhbGVFbmRlZCIsInRva2VuSWRzTWludGVkIiwic2V0VG9rZW5JZHNNaW50ZWQiLCJpc093bmVyIiwic2V0SXNPd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid2ViM01vZGFsUmVmIiwic3RhcnRQcmVzYWxlIiwic2lnbmVyIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5mdENvbnRyYWN0IiwidHgiLCJ3YWl0IiwiY2hlY2tJZlByZXNhbGVTdGFydGVkIiwiZXJyb3IiLCJjb25zb2xlIiwicHJlc2FsZU1pbnQiLCJ2YWx1ZSIsInBhcnNlRXRoZXIiLCJ3aW5kb3ciLCJhbGVydCIsInB1YmxpY01JbnQiLCJwcm92aWRlciIsIl9wcmVzYWxlU3RhcnRlZCIsImdldE93bmVyIiwiY2hlY2tJZlByZXNhbGVFbmRlZCIsIl9wcmVzYWxlRW5kZWQiLCJoYXNFbmRlZCIsImx0IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIl9vd25lciIsIm93bmVyIiwiYWRkcmVzcyIsImdldEFkZHJlc3MiLCJ0b0xvd2VyQ2FzZSIsImNvbm5lY3RXYWxsZXQiLCJsb2ciLCJuZWVkU2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJ3ZWIzUHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsIkVycm9yIiwiZ2V0U2lnbmVyIiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVJbmplY3RlZFByb3ZpZGVyIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImRpdiIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImltZyIsImltYWdlIiwic3JjIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});