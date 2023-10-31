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

/***/ "./src/components/fragments/timeline/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/fragments/timeline/index.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Timeline_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Timeline.module.css */ \"./src/components/fragments/timeline/Timeline.module.css\");\n/* harmony import */ var _Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n// pages/ourprocess.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Timeline = ()=>{\n    _s();\n    const lineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const maxLineHeight = 1250;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init({\n            duration: 900,\n            offset: 200,\n            easing: \"ease-in-out\"\n        });\n        const handleScroll = ()=>{\n            const line = lineRef.current;\n            if (line) {\n                const rect = line.getBoundingClientRect();\n                const windowHeight = window.innerHeight;\n                const lineTop = rect.top;\n                let lineHeight = Math.max(0, windowHeight - lineTop);\n                if (lineHeight > maxLineHeight) {\n                    lineHeight = maxLineHeight;\n                }\n                line.style.height = \"\".concat(lineHeight, \"px\");\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Mengambil referensi ke elemen dengan ID \"mySection\"\n        const section = document.getElementById(\"mySection\");\n        // Periksa lebar layar saat komponen dimuat\n        const handleResize = ()=>{\n            if (window.innerWidth <= 768) {\n                section.setAttribute(\"data-aos\", \"fade-right\");\n            } else {\n                section.setAttribute(\"data-aos\", \"apa yang Anda inginkan di layar desktop\");\n            }\n        };\n        // Panggil fungsi handleResize saat komponen dimuat\n        handleResize();\n        // Tambahkan event listener untuk merespons perubahan lebar layar\n        window.addEventListener(\"resize\", handleResize);\n        // Bersihkan event listener saat komponen dibongkar\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().topSection),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().timelineTitle),\n                    children: \"Timeline GFF 2024\"\n                }, void 0, false, {\n                    fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().timeline),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: lineRef,\n                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)\n                    }, void 0, false, {\n                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"data-aos\": \"fade-right\",\n                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().section),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().bead)\n                            }, void 0, false, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventTitle),\n                                        children: \"Calling Entry\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"1 November 2023\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"data-aos\": \"fade-left\",\n                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().bead)\n                            }, void 0, false, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventTitle),\n                                        children: \"Roadshow Komunitas\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"November-Desember 2023\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"data-aos\": \"fade-right\",\n                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().section),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().bead)\n                            }, void 0, false, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventTitle),\n                                        children: \"Malam Komunitas\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Desember 2023\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"data-aos\": \"fade-left\",\n                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().bead)\n                            }, void 0, false, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventTitle),\n                                        children: \"Sinema Keliling\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Januari-Februari 2024\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"data-aos\": \"fade-right\",\n                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().section),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().bead)\n                            }, void 0, false, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventTitle),\n                                        children: \"Main Event\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_Timeline_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventDate),\n                                        children: \"Maret 2024\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syauqijannatan/Documents/GitHub/ganffest/src/components/fragments/timeline/index.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Timeline, \"/9JiJ4wGP5mY3wyc8kY7ySeDom4=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mcmFnbWVudHMvdGltZWxpbmUvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7QUFFMEI7QUFFTjtBQUNyQjtBQUNJO0FBSTFCLE1BQU1LLFdBQVc7O0lBQ2YsTUFBTUMsVUFBVUosNkNBQU1BLENBQXdCO0lBQzlDLE1BQU1LLGdCQUFnQjtJQUN0Qk4sZ0RBQVNBLENBQUM7UUFDUkcsK0NBQVEsQ0FBQztZQUNQSyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsUUFBUTtRQUNWO1FBRUEsTUFBTUMsZUFBZTtZQUNuQixNQUFNQyxPQUFPUCxRQUFRUSxPQUFPO1lBRTVCLElBQUlELE1BQU07Z0JBQ1IsTUFBTUUsT0FBT0YsS0FBS0cscUJBQXFCO2dCQUN2QyxNQUFNQyxlQUFlQyxPQUFPQyxXQUFXO2dCQUN2QyxNQUFNQyxVQUFVTCxLQUFLTSxHQUFHO2dCQUV4QixJQUFJQyxhQUFhQyxLQUFLQyxHQUFHLENBQUMsR0FBR1AsZUFBZUc7Z0JBRTVDLElBQUlFLGFBQWFmLGVBQWU7b0JBQzlCZSxhQUFhZjtnQkFDZjtnQkFDQU0sS0FBS1ksS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBYyxPQUFYSixZQUFXO1lBQ3BDO1FBQ0Y7UUFFQUosT0FBT1MsZ0JBQWdCLENBQUMsVUFBVWY7UUFFbEMsT0FBTztZQUNMTSxPQUFPVSxtQkFBbUIsQ0FBQyxVQUFVaEI7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFDTFgsZ0RBQVNBLENBQUM7UUFDUixzREFBc0Q7UUFDdEQsTUFBTTRCLFVBQVVDLFNBQVNDLGNBQWMsQ0FBQztRQUV4QywyQ0FBMkM7UUFDM0MsTUFBTUMsZUFBZTtZQUNuQixJQUFJZCxPQUFPZSxVQUFVLElBQUksS0FBSztnQkFDNUJKLFFBQVFLLFlBQVksQ0FBQyxZQUFZO1lBQ25DLE9BQU87Z0JBQ0xMLFFBQVFLLFlBQVksQ0FBQyxZQUFZO1lBQ25DO1FBQ0Y7UUFFQSxtREFBbUQ7UUFDbkRGO1FBRUEsaUVBQWlFO1FBQ2pFZCxPQUFPUyxnQkFBZ0IsQ0FBQyxVQUFVSztRQUVsQyxtREFBbUQ7UUFDbkQsT0FBTztZQUNMZCxPQUFPVSxtQkFBbUIsQ0FBQyxVQUFVSTtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQU9MLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXakMsdUVBQWdCOzswQkFDOUIsOERBQUNnQztnQkFBSUMsV0FBV2pDLHdFQUFpQjswQkFDL0IsNEVBQUNvQztvQkFBR0gsV0FBV2pDLDJFQUFvQjs4QkFBRTs7Ozs7Ozs7Ozs7MEJBS3ZDLDhEQUFDZ0M7Z0JBQUlDLFdBQVdqQyxzRUFBZTs7a0NBQy9CLDhEQUFDZ0M7d0JBQUlPLEtBQUtwQzt3QkFBUzhCLFdBQVdqQyxrRUFBVzs7Ozs7O2tDQUd2Qyw4REFBQ2dDO3dCQUFJUSxZQUFTO3dCQUFhUCxXQUFXakMscUVBQWM7OzBDQUNsRCw4REFBQ2dDO2dDQUFJQyxXQUFXakMsa0VBQVc7Ozs7OzswQ0FDM0IsOERBQUNnQztnQ0FBSUMsV0FBV2pDLHFFQUFjOztrREFDNUIsOERBQUMyQzt3Q0FBR1YsV0FBV2pDLHdFQUFpQjtrREFBRTs7Ozs7O2tEQUNsQyw4REFBQzZDO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVAsOERBQUNiO3dCQUFJUSxZQUFTO3dCQUFZUCxXQUFXakMsMEVBQW1COzswQ0FDdEQsOERBQUNnQztnQ0FBSUMsV0FBV2pDLGtFQUFXOzs7Ozs7MENBQzNCLDhEQUFDZ0M7Z0NBQUlDLFdBQVdqQyxxRUFBYzs7a0RBQzVCLDhEQUFDMkM7d0NBQUdWLFdBQVdqQyx3RUFBaUI7a0RBQUU7Ozs7OztrREFDbEMsOERBQUM2QztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1QLDhEQUFDYjt3QkFBSVEsWUFBUzt3QkFBYVAsV0FBV2pDLHFFQUFjOzswQ0FDbEQsOERBQUNnQztnQ0FBSUMsV0FBV2pDLGtFQUFXOzs7Ozs7MENBQzNCLDhEQUFDZ0M7Z0NBQUlDLFdBQVdqQyxxRUFBYzs7a0RBQzVCLDhEQUFDMkM7d0NBQUdWLFdBQVdqQyx3RUFBaUI7a0RBQUU7Ozs7OztrREFDbEMsOERBQUM2QztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1QLDhEQUFDYjt3QkFBSVEsWUFBUzt3QkFBWVAsV0FBV2pDLDBFQUFtQjs7MENBQ3RELDhEQUFDZ0M7Z0NBQUlDLFdBQVdqQyxrRUFBVzs7Ozs7OzBDQUMzQiw4REFBQ2dDO2dDQUFJQyxXQUFXakMscUVBQWM7O2tEQUM1Qiw4REFBQzJDO3dDQUFHVixXQUFXakMsd0VBQWlCO2tEQUFFOzs7Ozs7a0RBQ2xDLDhEQUFDNkM7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNUCw4REFBQ2I7d0JBQUlRLFlBQVM7d0JBQWFQLFdBQVdqQyxxRUFBYzs7MENBQ2xELDhEQUFDZ0M7Z0NBQUlDLFdBQVdqQyxrRUFBVzs7Ozs7OzBDQUMzQiw4REFBQ2dDO2dDQUFJQyxXQUFXakMscUVBQWM7O2tEQUM1Qiw4REFBQzJDO3dDQUFHVixXQUFXakMsd0VBQWlCO2tEQUFFOzs7Ozs7a0RBQ2xDLDhEQUFDNkM7d0NBQUVaLFdBQVdqQyx1RUFBZ0I7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU1QztHQWpJTUU7S0FBQUE7QUFtSU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZnJhZ21lbnRzL3RpbWVsaW5lL2luZGV4LnRzeD9jZDgyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL291cnByb2Nlc3MudHN4XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UaW1lbGluZS5tb2R1bGUuY3NzJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7IFxuXG5cblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTsgXG4gIGNvbnN0IG1heExpbmVIZWlnaHQgPSAxMjUwO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KHtcbiAgICAgIGR1cmF0aW9uOiA5MDAsIFxuICAgICAgb2Zmc2V0OiAyMDAsIFxuICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCBcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSBsaW5lUmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBsaW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGxpbmVUb3AgPSByZWN0LnRvcDtcblxuICAgICAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgubWF4KDAsIHdpbmRvd0hlaWdodCAtIGxpbmVUb3ApO1xuXG4gICAgICAgIGlmIChsaW5lSGVpZ2h0ID4gbWF4TGluZUhlaWdodCkge1xuICAgICAgICAgIGxpbmVIZWlnaHQgPSBtYXhMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGxpbmUuc3R5bGUuaGVpZ2h0ID0gYCR7bGluZUhlaWdodH1weGA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBNZW5nYW1iaWwgcmVmZXJlbnNpIGtlIGVsZW1lbiBkZW5nYW4gSUQgXCJteVNlY3Rpb25cIlxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2VjdGlvblwiKTtcbiAgXG4gICAgLy8gUGVyaWtzYSBsZWJhciBsYXlhciBzYWF0IGtvbXBvbmVuIGRpbXVhdFxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiLCBcImZhZGUtcmlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zXCIsIFwiYXBhIHlhbmcgQW5kYSBpbmdpbmthbiBkaSBsYXlhciBkZXNrdG9wXCIpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIFBhbmdnaWwgZnVuZ3NpIGhhbmRsZVJlc2l6ZSBzYWF0IGtvbXBvbmVuIGRpbXVhdFxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICBcbiAgICAvLyBUYW1iYWhrYW4gZXZlbnQgbGlzdGVuZXIgdW50dWsgbWVyZXNwb25zIHBlcnViYWhhbiBsZWJhciBsYXlhclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIFxuICAgIC8vIEJlcnNpaGthbiBldmVudCBsaXN0ZW5lciBzYWF0IGtvbXBvbmVuIGRpYm9uZ2thclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcFNlY3Rpb259PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVUaXRsZX0+VGltZWxpbmUgR0ZGIDIwMjQ8L2gxPlxuICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgIERvbid0IG1pc3Mgb3VyIHRpbWVsaW5lIVxuICAgICAgICAgIDwvcD4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9ID5cbiAgICAgIDxkaXYgcmVmPXtsaW5lUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmVhZH0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudFRpdGxlfT5DYWxsaW5nIEVudHJ5PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAxIE5vdmVtYmVyIDIwMjNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25SaWdodH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZWFkfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50VGl0bGV9PlJvYWRzaG93IEtvbXVuaXRhczwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTm92ZW1iZXItRGVzZW1iZXIgMjAyM1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmVhZH0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudFRpdGxlfT5NYWxhbSBLb211bml0YXM8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIERlc2VtYmVyIDIwMjNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25SaWdodH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZWFkfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50VGl0bGV9PlNpbmVtYSBLZWxpbGluZzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSmFudWFyaS1GZWJydWFyaSAyMDI0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZWFkfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50VGl0bGV9Pk1haW4gRXZlbnQ8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnREYXRlfT5cbiAgICAgICAgICAgICAgTWFyZXQgMjAyNFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkFPUyIsIlRpbWVsaW5lIiwibGluZVJlZiIsIm1heExpbmVIZWlnaHQiLCJpbml0IiwiZHVyYXRpb24iLCJvZmZzZXQiLCJlYXNpbmciLCJoYW5kbGVTY3JvbGwiLCJsaW5lIiwiY3VycmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImxpbmVUb3AiLCJ0b3AiLCJsaW5lSGVpZ2h0IiwiTWF0aCIsIm1heCIsInN0eWxlIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZVJlc2l6ZSIsImlubmVyV2lkdGgiLCJzZXRBdHRyaWJ1dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0b3BTZWN0aW9uIiwiaDEiLCJ0aW1lbGluZVRpdGxlIiwidGltZWxpbmUiLCJyZWYiLCJkYXRhLWFvcyIsImJlYWQiLCJjb250ZW50IiwiaDIiLCJldmVudFRpdGxlIiwicCIsInNlY3Rpb25SaWdodCIsImV2ZW50RGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/fragments/timeline/index.tsx\n"));

/***/ })

});