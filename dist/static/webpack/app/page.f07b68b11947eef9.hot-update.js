"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/skills.tsx":
/*!***********************************!*\
  !*** ./src/components/skills.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/data */ \"(app-client)/./src/lib/data.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Skills() {\n    // TODO:: Add infinit scroll on skills section, hover effects, animations\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container lg:max-w-6xl overflow-hidden mx-auto py-4 text-dark-light dark:text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:px-16 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \" text-4xl font-bold mb-4\",\n                        children: [\n                            \"Skills\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary\",\n                                children: \"_\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                                lineNumber: 10,\n                                columnNumber: 68\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Here are some of the skills that I have obtained and worked with over my three year software development experience.\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"skills flex flex-wrap my-4\",\n                        children: _lib_data__WEBPACK_IMPORTED_MODULE_1__.skills.map((skill, index)=>{\n                            return(// <div key={index + 'skills'} className=\"card w-28 h-28 bg-opacity-70 backdrop-blur shadow-sm bg-white dark:bg-dark m-2 border-1 border-transparent hover:ring-1 hover:ring-slate-700\">\n                            //     <div className=\"max-w-18 max-h-18  p-0\">\n                            //         <img alt={skill?.title} src={skill?.icon} className=\"object-contain\"/>\n                            //     </div>\n                            //     <div className=\"actions gap-1 text-center\">\n                            //         <small className=\"text-xs\">{skill?.title}</small>\n                            //     </div>\n                            // </div>\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card p-2 w-24 h-24 bg-opacity-70 backdrop-blur shadow-sm bg-white dark:bg-dark m-2  border-transparent hover:ring-1 hover:ring-slate-700\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col items-center justify-around \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"w-10 h-10 mb-2 object-contain\",\n                                            src: skill === null || skill === void 0 ? void 0 : skill.icon,\n                                            alt: skill === null || skill === void 0 ? void 0 : skill.title\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 45\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                                            children: skill === null || skill === void 0 ? void 0 : skill.title\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 45\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 41\n                                }, this)\n                            }, index + \"skills\", false, {\n                                fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 37\n                            }, this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Volumes/Store/Code/100daysofcode/next-playground/src/components/skills.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvc2tpbGxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ29DO0FBRXJCLFNBQVNDO0lBQ3BCLHlFQUF5RTtJQUN6RSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTs7NEJBQTJCOzBDQUFNLDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUM5RSw4REFBQ0c7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0o7d0JBQUlDLFdBQVU7a0NBRVBILDZDQUFNQSxDQUFDTyxJQUFJLENBQUNDLE9BQU9DOzRCQUNmLE9BQ0ksd0xBQXdMOzRCQUN4TCwrQ0FBK0M7NEJBQy9DLGlGQUFpRjs0QkFDakYsYUFBYTs0QkFDYixrREFBa0Q7NEJBQ2xELDREQUE0RDs0QkFDNUQsYUFBYTs0QkFDYixTQUFTOzBDQUVULDhEQUFDUDtnQ0FBNEJDLFdBQVU7MENBQ25DLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNPOzRDQUFJUCxXQUFVOzRDQUFnQ1EsS0FBS0gsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPSTs0Q0FBTUMsS0FBS0wsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPTTs7Ozs7O3NEQUM3RSw4REFBQ1Q7NENBQUtGLFdBQVU7c0RBQTRDSyxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9NOzs7Ozs7Ozs7Ozs7K0JBSGpFTCxRQUFROzs7Ozt3QkFPMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUI7S0FuQ3dCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9za2lsbHMudHN4PzI2ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBza2lsbHMgfSBmcm9tIFwiQC9saWIvZGF0YVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gICAgLy8gVE9ETzo6IEFkZCBpbmZpbml0IHNjcm9sbCBvbiBza2lsbHMgc2VjdGlvbiwgaG92ZXIgZWZmZWN0cywgYW5pbWF0aW9uc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGxnOm1heC13LTZ4bCBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byBweS00IHRleHQtZGFyay1saWdodCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtMTYgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIiB0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPlNraWxsczxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPl88L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGVyZSBhcmUgc29tZSBvZiB0aGUgc2tpbGxzIHRoYXQgSSBoYXZlIG9idGFpbmVkIGFuZCB3b3JrZWQgd2l0aCBvdmVyIG15IHRocmVlIHllYXIgc29mdHdhcmUgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzIGZsZXggZmxleC13cmFwIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbHMubWFwKChza2lsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYga2V5PXtpbmRleCArICdza2lsbHMnfSBjbGFzc05hbWU9XCJjYXJkIHctMjggaC0yOCBiZy1vcGFjaXR5LTcwIGJhY2tkcm9wLWJsdXIgc2hhZG93LXNtIGJnLXdoaXRlIGRhcms6YmctZGFyayBtLTIgYm9yZGVyLTEgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOnJpbmctMSBob3ZlcjpyaW5nLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMTggbWF4LWgtMTggIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8aW1nIGFsdD17c2tpbGw/LnRpdGxlfSBzcmM9e3NraWxsPy5pY29ufSBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnMgZ2FwLTEgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQteHNcIj57c2tpbGw/LnRpdGxlfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4ICsgJ3NraWxscyd9ICBjbGFzc05hbWU9XCJjYXJkIHAtMiB3LTI0IGgtMjQgYmctb3BhY2l0eS03MCBiYWNrZHJvcC1ibHVyIHNoYWRvdy1zbSBiZy13aGl0ZSBkYXJrOmJnLWRhcmsgbS0yICBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6cmluZy0xIGhvdmVyOnJpbmctc2xhdGUtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbWItMiBvYmplY3QtY29udGFpblwiIHNyYz17c2tpbGw/Lmljb259IGFsdD17c2tpbGw/LnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e3NraWxsPy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJza2lsbHMiLCJTa2lsbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJwIiwibWFwIiwic2tpbGwiLCJpbmRleCIsImltZyIsInNyYyIsImljb24iLCJhbHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/skills.tsx\n"));

/***/ })

});