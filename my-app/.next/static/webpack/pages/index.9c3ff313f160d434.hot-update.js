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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const startPresale = async ()=>{\n        const signer = getProviderOrSigner(true);\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n        const tx = await nftContract.startPresale();\n        setLoading(true);\n        await tx.wait();\n        setLoading(false);\n        checkIfPresaleStarted();\n    };\n    const checkIfPresaleStarted = async ()=>{\n        const provider = await getProviderOrSigner();\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n        const _presaleStarted = await nftContract.presaleStarted();\n        if (!presaleStarted) {\n            await getOwner();\n        }\n        setPresaleStarted(_presaleStarted);\n        return _presaleStarted;\n    };\n    const checkIfPresaleEnded = async ()=>{\n        try {} catch (error) {\n            console.error(error);\n        }\n        const provider = await getProviderOrSigner();\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n        const _presaleEnded = await nftContract.presaleEnded();\n        const hasEnded = _presaleEnded.lt(Math.floor(Date.now() / 1000));\n        if (hasEnded) {\n            setPresaleEnded(true);\n        } else {\n            setPresaleEnded(false);\n        }\n        return hasEnded;\n    };\n    const getOwner = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _owner = await nftContract.owner();\n            const signer = await getProviderOrSigner(true);\n            const address = await signer.getAddress();\n            if (address.toLowerCase() === _owner.toLowerCase()) {\n                setIsOwner(true);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        const provider = await web3ModalRef.current.connect();\n        // const web3Provider = ethers.getDefaultProvider(providers);\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.getSigner();\n            return signer;\n        }\n        return web3Provider;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!walletConnected) {\n            // Assign the Web3Modal class to the reference object by setting it's `current` value\n            // The `current` value is persisted throughout as long as this page is open\n            web3ModalRef.current = new (web3Modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n            const _presaleStarted = checkIfPresaleStarted();\n            if (_presaleStarted) {\n                checkIfPresaleEnded();\n            }\n        }\n    }, [\n        walletConnected\n    ]);\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, this);\n        }\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 146,\n                columnNumber: 14\n            }, this);\n        }\n        if (!presaleStarted && isOwner) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startPresale,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Start Presale\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this);\n        }\n        if (presaleStarted && !presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"PreSale is Live Mint and Nft is you have Whitelisted your address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Mint and preSale Nft\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true);\n        }\n        if (presaleStarted && presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: \"Public Mint \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 166,\n                columnNumber: 14\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 173,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 179,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 180,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 183,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 187,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 186,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 171,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6In2mTI+BqytAeCGNSy1/xr9cVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztRQUk3RCxDQUFDO1FBQ0QsSUFBSU0sa0JBQWtCLENBQUNBLGdCQUFnQjtZQUNyQyxxQkFDRTs7a0NBQ0UsOERBQUN3RDt3QkFBSUQsV0FBVzdELDRFQUFrQjtrQ0FBRTs7Ozs7O2tDQUdwQyw4REFBQzJEO3dCQUFPRSxXQUFXN0QsdUVBQWE7a0NBQUU7Ozs7OztvQkFBNkI7OztRQUdyRSxDQUFDO1FBQ0QsSUFBSU0sa0JBQWtCQSxnQkFBZ0I7WUFDcEMscUJBQU8sOERBQUN3RDtnQkFBSUQsV0FBVzdELDRFQUFrQjswQkFBRTs7Ozs7O1FBQzdDLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDOEQ7OzBCQUNDLDhEQUFDekUsa0RBQUlBOztrQ0FDSCw4REFBQzJFO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1I7Z0JBQUlELFdBQVc3RCxxRUFBVzs7a0NBQ3pCLDhEQUFDOEQ7OzBDQUNDLDhEQUFDVTtnQ0FBR1gsV0FBVzdELHNFQUFZOzBDQUFFOzs7Ozs7MENBQzdCLDhEQUFDOEQ7Z0NBQUlELFdBQVc3RCw0RUFBa0I7MENBQUU7Ozs7OzswQ0FHcEMsOERBQUM4RDtnQ0FBSUQsV0FBVzdELDRFQUFrQjswQ0FBSTs7Ozs7OzRCQUNyQzBEOzs7Ozs7O2tDQUVILDhEQUFDSTtrQ0FDQyw0RUFBQ1c7NEJBQUlaLFdBQVc3RCxzRUFBWTs0QkFBRTJFLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ0M7Z0JBQU9mLFdBQVc3RCx1RUFBYTswQkFBRTs7Ozs7Ozs7Ozs7O0FBS3hDLENBQUM7R0EzTHVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM01vZGFsXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgZXRoZXJzLCBwcm92aWRlcnMsIHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQ09OVFJBQ1RfQUREUkVTUywgYWJpIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwcmVzYWxlU3RhcnRlZCwgc2V0UHJlc2FsZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwcmVzYWxlRW5kZWQsIHNldFByZXNhbGVFbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3Rva2VuSWRzTWludGVkLCBzZXRUb2tlbklkc01pbnRlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbaXNPd25lciwgc2V0SXNPd25lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHN0YXJ0UHJlc2FsZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzaWduZXIgPSBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuXG4gICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgYWJpLCBzaWduZXIpO1xuXG4gICAgY29uc3QgdHggPSBhd2FpdCBuZnRDb250cmFjdC5zdGFydFByZXNhbGUoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBjaGVja0lmUHJlc2FsZVN0YXJ0ZWQoKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0lmUHJlc2FsZVN0YXJ0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG5cbiAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHByb3ZpZGVyKTtcblxuICAgIGNvbnN0IF9wcmVzYWxlU3RhcnRlZCA9IGF3YWl0IG5mdENvbnRyYWN0LnByZXNhbGVTdGFydGVkKCk7XG4gICAgaWYgKCFwcmVzYWxlU3RhcnRlZCkge1xuICAgICAgYXdhaXQgZ2V0T3duZXIoKTtcbiAgICB9XG4gICAgc2V0UHJlc2FsZVN0YXJ0ZWQoX3ByZXNhbGVTdGFydGVkKTtcbiAgICByZXR1cm4gX3ByZXNhbGVTdGFydGVkO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrSWZQcmVzYWxlRW5kZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuXG4gICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgYWJpLCBwcm92aWRlcik7XG5cbiAgICBjb25zdCBfcHJlc2FsZUVuZGVkID0gYXdhaXQgbmZ0Q29udHJhY3QucHJlc2FsZUVuZGVkKCk7XG5cbiAgICBjb25zdCBoYXNFbmRlZCA9IF9wcmVzYWxlRW5kZWQubHQoTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpO1xuXG4gICAgaWYgKGhhc0VuZGVkKSB7XG4gICAgICBzZXRQcmVzYWxlRW5kZWQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFByZXNhbGVFbmRlZChmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNFbmRlZDtcbiAgfTtcblxuICBjb25zdCBnZXRPd25lciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG5cbiAgICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgcHJvdmlkZXIpO1xuXG4gICAgICBjb25zdCBfb3duZXIgPSBhd2FpdCBuZnRDb250cmFjdC5vd25lcigpO1xuXG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcblxuICAgICAgaWYgKGFkZHJlc3MudG9Mb3dlckNhc2UoKSA9PT0gX293bmVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgc2V0SXNPd25lcih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIC8vIGNvbnN0IHdlYjNQcm92aWRlciA9IGV0aGVycy5nZXREZWZhdWx0UHJvdmlkZXIocHJvdmlkZXJzKTtcbiAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG5cbiAgICBpZiAoIWNoYWluSWQgPT0gNSkge1xuICAgICAgd2luZG93LmFsZXJ0KFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIEdvZXJsaVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNoYW5nZSB0aGUgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcblxuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIFdlYjNNb2RhbCBjbGFzcyB0byB0aGUgcmVmZXJlbmNlIG9iamVjdCBieSBzZXR0aW5nIGl0J3MgYGN1cnJlbnRgIHZhbHVlXG4gICAgICAvLyBUaGUgYGN1cnJlbnRgIHZhbHVlIGlzIHBlcnNpc3RlZCB0aHJvdWdob3V0IGFzIGxvbmcgYXMgdGhpcyBwYWdlIGlzIG9wZW5cbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwiZ29lcmxpXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29ubmVjdFdhbGxldCgpO1xuXG4gICAgICBjb25zdCBfcHJlc2FsZVN0YXJ0ZWQgPSBjaGVja0lmUHJlc2FsZVN0YXJ0ZWQoKTtcbiAgICAgIGlmIChfcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgICAgY2hlY2tJZlByZXNhbGVFbmRlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIGNvbnN0IHJlbmRlckJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TG9hZGluZy4uLjwvYnV0dG9uPjtcbiAgICB9XG4gICAgaWYgKCFwcmVzYWxlU3RhcnRlZCAmJiBpc093bmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0UHJlc2FsZX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBTdGFydCBQcmVzYWxlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHByZXNhbGVTdGFydGVkICYmICFwcmVzYWxlU3RhcnRlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIFByZVNhbGUgaXMgTGl2ZSBNaW50IGFuZCBOZnQgaXMgeW91IGhhdmUgV2hpdGVsaXN0ZWQgeW91ciBhZGRyZXNzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259Pk1pbnQgYW5kIHByZVNhbGUgTmZ0PC9idXR0b24+O1xuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwcmVzYWxlU3RhcnRlZCAmJiBwcmVzYWxlU3RhcnRlZCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlB1YmxpYyBNaW50IPCfmoA8L2Rpdj47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3J5cHRvIERldnM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2hpdGVsaXN0LURhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byBDcnlwdG8gRGV2cyE8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgSXRzIGFuIE5GVCBjb2xsZWN0aW9uIGZvciBkZXZlbG9wZXJzIGluIENyeXB0by5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57fS8yMCBoYXZlIGJlZW4gbWludGVkPC9kaXY+XG4gICAgICAgICAge3JlbmRlckJ1dHRvbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0b2RldnMvMC5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiV2ViM01vZGFsIiwiQ29udHJhY3QiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJ1dGlscyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDT05UUkFDVF9BRERSRVNTIiwiYWJpIiwiSG9tZSIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsInByZXNhbGVTdGFydGVkIiwic2V0UHJlc2FsZVN0YXJ0ZWQiLCJwcmVzYWxlRW5kZWQiLCJzZXRQcmVzYWxlRW5kZWQiLCJ0b2tlbklkc01pbnRlZCIsInNldFRva2VuSWRzTWludGVkIiwiaXNPd25lciIsInNldElzT3duZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIndlYjNNb2RhbFJlZiIsInN0YXJ0UHJlc2FsZSIsInNpZ25lciIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZnRDb250cmFjdCIsInR4Iiwid2FpdCIsImNoZWNrSWZQcmVzYWxlU3RhcnRlZCIsInByb3ZpZGVyIiwiX3ByZXNhbGVTdGFydGVkIiwiZ2V0T3duZXIiLCJjaGVja0lmUHJlc2FsZUVuZGVkIiwiZXJyb3IiLCJjb25zb2xlIiwiX3ByZXNhbGVFbmRlZCIsImhhc0VuZGVkIiwibHQiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiX293bmVyIiwib3duZXIiLCJhZGRyZXNzIiwiZ2V0QWRkcmVzcyIsInRvTG93ZXJDYXNlIiwiY29ubmVjdFdhbGxldCIsImxvZyIsIm5lZWRTaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIndlYjNQcm92aWRlciIsIldlYjNQcm92aWRlciIsImNoYWluSWQiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlSW5qZWN0ZWRQcm92aWRlciIsInJlbmRlckJ1dHRvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbWciLCJpbWFnZSIsInNyYyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});