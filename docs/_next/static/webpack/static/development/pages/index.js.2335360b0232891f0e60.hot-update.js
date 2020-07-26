webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ \"./components/splashpage/intropage.css\");\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/shaquillewyanque/git/McMurtry-Website/components/splashpage/intropage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import Banner from '../10/banner/banner';\n\n\nvar iconFolder = '../../static/icons/';\nvar quickLinks = [{\n  name: \"Calendar\",\n  icon: \"calendar\",\n  to: \"/events/calendar\"\n}, {\n  name: \"O-Week\",\n  icon: \"https://icon.now.sh/people\",\n  // href: \"https://mcmurtryoweek.wixsite.com/home-page\"\n  to: \"/oweek\"\n}, {\n  name: \"Book a Room\",\n  icon: \"https://icon.now.sh/event_note\",\n  to: \"/resources/roomreservations/\"\n}, {\n  name: \"Financial Inclusivity\",\n  icon: \"https://icon.now.sh/public\",\n  to: \"/about/financialinclusivity\"\n}];\n\nvar Intro = function Intro() {\n  return __jsx(\"div\", {\n    className: \"intro-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/resources/coronavirus\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"coronavirus-banner\",\n    width: [0.9, 0.5],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"Click here for Resources and Questions regarding the coronavirus response at Rice/McMurtry\"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: [0.95, 0.8],\n    className: \"yurt-graphic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"../../static/YurtTrees.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  })), __jsx(\"h1\", {\n    className: \"welcome-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Welcome to McMurtry!\"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justifyContent: \"center\",\n    flexWrap: \"wrap\",\n    flexDirection: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, quickLinks.map(function (_ref) {\n    var name = _ref.name,\n        icon = _ref.icon,\n        to = _ref.to;\n    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"quick-link-container\",\n      width: [130, 220],\n      key: \"\".concat(name),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 21\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: to,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      className: \"quick-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: \"large-\".concat(icon),\n      alt: \"\",\n      className: \"intro-link-img-large\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 33\n      }\n    }), __jsx(\"img\", {\n      src: \"small-\".concat(icon),\n      alt: \"\",\n      className: \"intro-link-img-small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 33\n      }\n    }), __jsx(\"h2\", {\n      className: \"quick-link-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 33\n      }\n    }, name))));\n  })));\n};\n\n_c = Intro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzPzY4YWMiXSwibmFtZXMiOlsiaWNvbkZvbGRlciIsInF1aWNrTGlua3MiLCJuYW1lIiwiaWNvbiIsInRvIiwiSW50cm8iLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcscUJBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQ2Y7QUFDSUMsTUFBSSxFQUFFLFVBRFY7QUFFSUMsTUFBSSxFQUFFLFVBRlY7QUFHSUMsSUFBRSxFQUFFO0FBSFIsQ0FEZSxFQU1mO0FBQ0lGLE1BQUksRUFBRSxRQURWO0FBRUlDLE1BQUksRUFBRSw0QkFGVjtBQUdJO0FBQ0FDLElBQUUsRUFBRTtBQUpSLENBTmUsRUFZZjtBQUNJRixNQUFJLEVBQUUsYUFEVjtBQUVJQyxNQUFJLEVBQUUsZ0NBRlY7QUFHSUMsSUFBRSxFQUFFO0FBSFIsQ0FaZSxFQWlCZjtBQUNJRixNQUFJLEVBQUUsdUJBRFY7QUFFSUMsTUFBSSxFQUFFLDRCQUZWO0FBR0lDLElBQUUsRUFBRTtBQUhSLENBakJlLENBQW5COztBQXdCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1Y7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSx3QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwQ0FBRDtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFvQyxTQUFLLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FESixDQURKLENBRkosRUFPSSxNQUFDLDBDQUFEO0FBQUssU0FBSyxFQUFFLENBQUMsSUFBRCxFQUFPLEdBQVAsQ0FBWjtBQUF5QixhQUFTLEVBQUMsY0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBTyxPQUFHLEVBQUMsNEJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosRUFVSTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVkosRUFXSSxNQUFDLDJDQUFEO0FBQU0sa0JBQWMsRUFBQyxRQUFyQjtBQUE4QixZQUFRLEVBQUMsTUFBdkM7QUFBOEMsaUJBQWEsRUFBQyxLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFKLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlO0FBQUEsUUFBR0osSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsUUFBZUMsRUFBZixRQUFlQSxFQUFmO0FBQUEsV0FDWCxNQUFDLDBDQUFEO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQXNDLFdBQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTdDO0FBQXlELFNBQUcsWUFBS0YsSUFBTCxDQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBSyxTQUFHLGtCQUFXRCxJQUFYLENBQVI7QUFBMkIsU0FBRyxFQUFDLEVBQS9CO0FBQWtDLGVBQVMsRUFBQyxzQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLEVBSUk7QUFBSyxTQUFHLGtCQUFXQSxJQUFYLENBQVI7QUFBMkIsU0FBRyxFQUFDLEVBQS9CO0FBQWtDLGVBQVMsRUFBQyxzQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBS0k7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ0QsSUFBakMsQ0FMSixDQURKLENBREosQ0FEVztBQUFBLEdBQWYsQ0FGUixDQVhKLENBRFU7QUFBQSxDQUFkOztLQUFNRyxLO0FBaUNTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BsYXNocGFnZS9pbnRyb3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi8xMC9iYW5uZXIvYmFubmVyJztcbmltcG9ydCAnLi9pbnRyb3BhZ2UuY3NzJztcblxuY29uc3QgaWNvbkZvbGRlciA9ICcuLi8uLi9zdGF0aWMvaWNvbnMvJ1xuY29uc3QgcXVpY2tMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FsZW5kYXJcIixcbiAgICAgICAgaWNvbjogXCJjYWxlbmRhclwiLFxuICAgICAgICB0bzogXCIvZXZlbnRzL2NhbGVuZGFyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJPLVdlZWtcIixcbiAgICAgICAgaWNvbjogXCJodHRwczovL2ljb24ubm93LnNoL3Blb3BsZVwiLFxuICAgICAgICAvLyBocmVmOiBcImh0dHBzOi8vbWNtdXJ0cnlvd2Vlay53aXhzaXRlLmNvbS9ob21lLXBhZ2VcIlxuICAgICAgICB0bzogXCIvb3dlZWtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJvb2sgYSBSb29tXCIsXG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC9ldmVudF9ub3RlXCIsXG4gICAgICAgIHRvOiBcIi9yZXNvdXJjZXMvcm9vbXJlc2VydmF0aW9ucy9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkZpbmFuY2lhbCBJbmNsdXNpdml0eVwiLFxuICAgICAgICBpY29uOiBcImh0dHBzOi8vaWNvbi5ub3cuc2gvcHVibGljXCIsXG4gICAgICAgIHRvOiBcIi9hYm91dC9maW5hbmNpYWxpbmNsdXNpdml0eVwiXG4gICAgfVxuXVxuXG5jb25zdCBJbnRybyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm8tcGFnZSc+XG4gICAgICAgIHsvKiA8QmFubmVyIC8+ICovfVxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXNvdXJjZXMvY29yb25hdmlydXNcIn0+XG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImNvcm9uYXZpcnVzLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cbiAgICAgICAgICAgICAgICA8cD5DbGljayBoZXJlIGZvciBSZXNvdXJjZXMgYW5kIFF1ZXN0aW9ucyByZWdhcmRpbmcgdGhlIGNvcm9uYXZpcnVzIHJlc3BvbnNlIGF0IFJpY2UvTWNNdXJ0cnk8L3A+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Qm94IHdpZHRoPXtbMC45NSwgMC44XX0gY2xhc3NOYW1lPSd5dXJ0LWdyYXBoaWMnPlxuICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vc3RhdGljL1l1cnRUcmVlcy5zdmcnIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd3ZWxjb21lLXRpdGxlJz5XZWxjb21lIHRvIE1jTXVydHJ5ITwvaDE+XG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBxdWlja0xpbmtzLm1hcCgoeyBuYW1lLCBpY29uLCB0byB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdxdWljay1saW5rLWNvbnRhaW5lcicgd2lkdGg9e1sxMzAsIDIyMF19IGtleT17YCR7bmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncXVpY2stbGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29ufS9EQ0RGRTUvNDVgfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgbGFyZ2UtJHtpY29ufWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YHNtYWxsLSR7aWNvbn1gfSBhbHQ9JycgY2xhc3NOYW1lPSdpbnRyby1saW5rLWltZy1zbWFsbCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW50cm87Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/splashpage/intropage.js\n");

/***/ })

})