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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3Modal */ \"./node_modules/web3Modal/dist/index.js\");\n/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleStarted, setPresaleStarted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [presaleEnded, setPresaleEnded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [tokenIdsMinted, setTokenIdsMinted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const startPresale = async ()=>{\n        try {\n            const signer = await getProviderOrSigner(true);\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n            const tx = await nftContract.startPresale();\n            setLoading(true);\n            await tx.wait();\n            setLoading(false);\n            checkIfPresaleStarted();\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const presaleMint = async ()=>{\n        const signer = await getProviderOrSigner(true);\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n        const tx = await nftContract.presaleMint({\n            value: ethers__WEBPACK_IMPORTED_MODULE_6__.utils.parseEther(\"0.01\")\n        });\n        setLoading(true);\n        await tx.wait();\n        setLoading(false);\n        window.alert(\"You have successfully minted a Crypto Dev!\");\n    };\n    const publicMInt = async ()=>{\n        const signer = await getProviderOrSigner(true);\n        const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n        const tx = await nftContract.mint();\n        setLoading(true);\n        await setLoading(false);\n    };\n    const checkIfPresaleStarted = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _presaleStarted = await nftContract.presaleStarted();\n            if (!presaleStarted) {\n                await getOwner();\n            }\n            setPresaleStarted(_presaleStarted);\n            return _presaleStarted;\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const checkIfPresaleEnded = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _presaleEnded = await nftContract.presaleEnded();\n            const hasEnded = _presaleEnded.lt(Math.floor(Date.now() / 1000));\n            if (hasEnded) {\n                setPresaleEnded(true);\n            } else {\n                setPresaleEnded(false);\n            }\n            return hasEnded;\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const getOwner = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            const _owner = await nftContract.owner();\n            const signer = await getProviderOrSigner(true);\n            const address = await signer.getAddress();\n            if (address.toLowerCase() === _owner.toLowerCase()) {\n                setIsOwner(true);\n            }\n        } catch (error) {\n            console.error(error);\n            return false;\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        const provider = await web3ModalRef.current.connect();\n        // const web3Provider = ethers.getDefaultProvider(providers);\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (!chainId == 5) {\n            window.alert(\"change the network to Goerli\");\n            throw new Error(\"Change the network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.getSigner();\n            return signer;\n        }\n        return web3Provider;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!walletConnected) {\n            // Assign the Web3Modal class to the reference object by setting it's `current` value\n            // The `current` value is persisted throughout as long as this page is open\n            web3ModalRef.current = new (web3Modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n            const _presaleStarted = checkIfPresaleStarted();\n            if (_presaleStarted) {\n                checkIfPresaleEnded();\n            }\n        }\n    }, [\n        walletConnected\n    ]);\n    const renderButton = ()=>{\n        if (!walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 176,\n                columnNumber: 9\n            }, this);\n        }\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 182,\n                columnNumber: 14\n            }, this);\n        }\n        if (!presaleStarted && isOwner) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startPresale,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Start Presale\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, this);\n        }\n        if (presaleStarted && !presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"PreSale is Live Mint and Nft is you have Whitelisted your address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 194,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Mint and preSale Nft\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 197,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true);\n        }\n        if (presaleStarted && presaleStarted) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: \"Public Mint \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 202,\n                columnNumber: 14\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 209,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 210,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 211,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 208,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 215,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 216,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"/20 have been minted\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 219,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 214,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 223,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 222,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 213,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 227,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LEARNWeb3Dao\\\\sophomore\\\\NFT-Collection\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 207,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6In2mTI+BqytAeCGNSy1/xr9cVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCOzBCQUFFOzs7Ozs7UUFDN0MsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNtRTs7MEJBQ0MsOERBQUM5RSxrREFBSUE7O2tDQUNILDhEQUFDZ0Y7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDUjtnQkFBSUQsV0FBV2xFLHFFQUFXOztrQ0FDekIsOERBQUNtRTs7MENBQ0MsOERBQUNVO2dDQUFHWCxXQUFXbEUsc0VBQVk7MENBQUU7Ozs7OzswQ0FDN0IsOERBQUNtRTtnQ0FBSUQsV0FBV2xFLDRFQUFrQjswQ0FBRTs7Ozs7OzBDQUdwQyw4REFBQ21FO2dDQUFJRCxXQUFXbEUsNEVBQWtCOzBDQUFJOzs7Ozs7NEJBQ3JDK0Q7Ozs7Ozs7a0NBRUgsOERBQUNJO2tDQUNDLDRFQUFDVzs0QkFBSVosV0FBV2xFLHNFQUFZOzRCQUFFZ0YsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRDLDhEQUFDQztnQkFBT2YsV0FBV2xFLHVFQUFhOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFLeEMsQ0FBQztHQS9OdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzTW9kYWxcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBldGhlcnMsIHByb3ZpZGVycywgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBDT05UUkFDVF9BRERSRVNTLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3ByZXNhbGVTdGFydGVkLCBzZXRQcmVzYWxlU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3ByZXNhbGVFbmRlZCwgc2V0UHJlc2FsZUVuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbdG9rZW5JZHNNaW50ZWQsIHNldFRva2VuSWRzTWludGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc3RhcnRQcmVzYWxlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuXG4gICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHNpZ25lcik7XG5cbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgbmZ0Q29udHJhY3Quc3RhcnRQcmVzYWxlKCk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBjaGVja0lmUHJlc2FsZVN0YXJ0ZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZXNhbGVNaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG5cbiAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHNpZ25lcik7XG5cbiAgICBjb25zdCB0eCA9IGF3YWl0IG5mdENvbnRyYWN0LnByZXNhbGVNaW50KHtcbiAgICAgIHZhbHVlOiB1dGlscy5wYXJzZUV0aGVyKFwiMC4wMVwiKSxcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB3aW5kb3cuYWxlcnQoXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgbWludGVkIGEgQ3J5cHRvIERldiFcIik7XG4gIH07XG5cbiAgY29uc3QgcHVibGljTUludCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuXG4gICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgYWJpLCBzaWduZXIpO1xuXG4gICAgY29uc3QgdHggPSBhd2FpdCBuZnRDb250cmFjdC5taW50KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBhd2FpdCBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0lmUHJlc2FsZVN0YXJ0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuXG4gICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHByb3ZpZGVyKTtcblxuICAgICAgY29uc3QgX3ByZXNhbGVTdGFydGVkID0gYXdhaXQgbmZ0Q29udHJhY3QucHJlc2FsZVN0YXJ0ZWQoKTtcbiAgICAgIGlmICghcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgICAgYXdhaXQgZ2V0T3duZXIoKTtcbiAgICAgIH1cbiAgICAgIHNldFByZXNhbGVTdGFydGVkKF9wcmVzYWxlU3RhcnRlZCk7XG4gICAgICByZXR1cm4gX3ByZXNhbGVTdGFydGVkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJZlByZXNhbGVFbmRlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG5cbiAgICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgcHJvdmlkZXIpO1xuXG4gICAgICBjb25zdCBfcHJlc2FsZUVuZGVkID0gYXdhaXQgbmZ0Q29udHJhY3QucHJlc2FsZUVuZGVkKCk7XG5cbiAgICAgIGNvbnN0IGhhc0VuZGVkID0gX3ByZXNhbGVFbmRlZC5sdChNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSk7XG5cbiAgICAgIGlmIChoYXNFbmRlZCkge1xuICAgICAgICBzZXRQcmVzYWxlRW5kZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQcmVzYWxlRW5kZWQoZmFsc2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0VuZGVkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0T3duZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuXG4gICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBhYmksIHByb3ZpZGVyKTtcblxuICAgICAgY29uc3QgX293bmVyID0gYXdhaXQgbmZ0Q29udHJhY3Qub3duZXIoKTtcblxuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcblxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG5cbiAgICAgIGlmIChhZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IF9vd25lci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHNldElzT3duZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVyID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZi5jdXJyZW50LmNvbm5lY3QoKTtcbiAgICAvLyBjb25zdCB3ZWIzUHJvdmlkZXIgPSBldGhlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKHByb3ZpZGVycyk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuXG4gICAgaWYgKCFjaGFpbklkID09IDUpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcImNoYW5nZSB0aGUgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cbiAgICAgIHJldHVybiBzaWduZXI7XG4gICAgfVxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgLy8gQXNzaWduIHRoZSBXZWIzTW9kYWwgY2xhc3MgdG8gdGhlIHJlZmVyZW5jZSBvYmplY3QgYnkgc2V0dGluZyBpdCdzIGBjdXJyZW50YCB2YWx1ZVxuICAgICAgLy8gVGhlIGBjdXJyZW50YCB2YWx1ZSBpcyBwZXJzaXN0ZWQgdGhyb3VnaG91dCBhcyBsb25nIGFzIHRoaXMgcGFnZSBpcyBvcGVuXG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImdvZXJsaVwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcblxuICAgICAgY29uc3QgX3ByZXNhbGVTdGFydGVkID0gY2hlY2tJZlByZXNhbGVTdGFydGVkKCk7XG4gICAgICBpZiAoX3ByZXNhbGVTdGFydGVkKSB7XG4gICAgICAgIGNoZWNrSWZQcmVzYWxlRW5kZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkxvYWRpbmcuLi48L2J1dHRvbj47XG4gICAgfVxuICAgIGlmICghcHJlc2FsZVN0YXJ0ZWQgJiYgaXNPd25lcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydFByZXNhbGV9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgU3RhcnQgUHJlc2FsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwcmVzYWxlU3RhcnRlZCAmJiAhcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBQcmVTYWxlIGlzIExpdmUgTWludCBhbmQgTmZ0IGlzIHlvdSBoYXZlIFdoaXRlbGlzdGVkIHlvdXIgYWRkcmVzc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5NaW50IGFuZCBwcmVTYWxlIE5mdDwvYnV0dG9uPjtcbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocHJlc2FsZVN0YXJ0ZWQgJiYgcHJlc2FsZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5QdWJsaWMgTWludCDwn5qAPC9kaXY+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyeXB0byBEZXZzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdC1EYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e30vMjAgaGF2ZSBiZWVuIG1pbnRlZDwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJCdXR0b24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPVwiLi9jcnlwdG9kZXZzLzAuc3ZnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICBNYWRlIHdpdGggJiMxMDA4NDsgYnkgQ3J5cHRvIERldnNcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIldlYjNNb2RhbCIsIkNvbnRyYWN0IiwiZXRoZXJzIiwicHJvdmlkZXJzIiwidXRpbHMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJwcmVzYWxlU3RhcnRlZCIsInNldFByZXNhbGVTdGFydGVkIiwicHJlc2FsZUVuZGVkIiwic2V0UHJlc2FsZUVuZGVkIiwidG9rZW5JZHNNaW50ZWQiLCJzZXRUb2tlbklkc01pbnRlZCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ3ZWIzTW9kYWxSZWYiLCJzdGFydFByZXNhbGUiLCJzaWduZXIiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwibmZ0Q29udHJhY3QiLCJ0eCIsIndhaXQiLCJjaGVja0lmUHJlc2FsZVN0YXJ0ZWQiLCJlcnJvciIsImNvbnNvbGUiLCJwcmVzYWxlTWludCIsInZhbHVlIiwicGFyc2VFdGhlciIsIndpbmRvdyIsImFsZXJ0IiwicHVibGljTUludCIsIm1pbnQiLCJwcm92aWRlciIsIl9wcmVzYWxlU3RhcnRlZCIsImdldE93bmVyIiwiY2hlY2tJZlByZXNhbGVFbmRlZCIsIl9wcmVzYWxlRW5kZWQiLCJoYXNFbmRlZCIsImx0IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIl9vd25lciIsIm93bmVyIiwiYWRkcmVzcyIsImdldEFkZHJlc3MiLCJ0b0xvd2VyQ2FzZSIsImNvbm5lY3RXYWxsZXQiLCJsb2ciLCJuZWVkU2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJ3ZWIzUHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsIkVycm9yIiwiZ2V0U2lnbmVyIiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVJbmplY3RlZFByb3ZpZGVyIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImRpdiIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImltZyIsImltYWdlIiwic3JjIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});