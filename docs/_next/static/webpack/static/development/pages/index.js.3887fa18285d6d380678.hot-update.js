webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ \"./components/splashpage/intropage.css\");\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/shaquillewyanque/git/McMurtry-Website/components/splashpage/intropage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import Banner from '../10/banner/banner';\n\n\nvar iconFolder = '../../static/icons/';\nvar quickLinks = [{\n  name: \"Calendar\",\n  icon: \"calendar\",\n  to: \"/events/calendar\"\n}, {\n  name: \"O-Week\",\n  icon: \"people\",\n  // href: \"https://mcmurtryoweek.wixsite.com/home-page\"\n  to: \"/oweek\"\n}, {\n  name: \"Book a Room\",\n  icon: \"event\",\n  to: \"/resources/roomreservations/\"\n}, {\n  name: \"Financial Inclusivity\",\n  icon: \"https://icon.now.sh/public\",\n  to: \"/about/financialinclusivity\"\n}];\n\nvar Intro = function Intro() {\n  return __jsx(\"div\", {\n    className: \"intro-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/resources/coronavirus\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"coronavirus-banner\",\n    width: [0.9, 0.5],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"Click here for Resources and Questions regarding the coronavirus response at Rice/McMurtry\"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: [0.95, 0.8],\n    className: \"yurt-graphic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"../../static/YurtTrees.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  })), __jsx(\"h1\", {\n    className: \"welcome-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Welcome to McMurtry!\"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justifyContent: \"center\",\n    flexWrap: \"wrap\",\n    flexDirection: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, quickLinks.map(function (_ref) {\n    var name = _ref.name,\n        icon = _ref.icon,\n        to = _ref.to;\n    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"quick-link-container\",\n      width: [130, 220],\n      key: \"\".concat(name),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 21\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: to,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      className: \"quick-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-large.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-large\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 33\n      }\n    }), __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-small.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 33\n      }\n    }), __jsx(\"h2\", {\n      className: \"quick-link-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 33\n      }\n    }, name))));\n  })));\n};\n\n_c = Intro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzPzY4YWMiXSwibmFtZXMiOlsiaWNvbkZvbGRlciIsInF1aWNrTGlua3MiLCJuYW1lIiwiaWNvbiIsInRvIiwiSW50cm8iLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcscUJBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQ2Y7QUFDSUMsTUFBSSxFQUFFLFVBRFY7QUFFSUMsTUFBSSxFQUFFLFVBRlY7QUFHSUMsSUFBRSxFQUFFO0FBSFIsQ0FEZSxFQU1mO0FBQ0lGLE1BQUksRUFBRSxRQURWO0FBRUlDLE1BQUksRUFBRSxRQUZWO0FBR0k7QUFDQUMsSUFBRSxFQUFFO0FBSlIsQ0FOZSxFQVlmO0FBQ0lGLE1BQUksRUFBRSxhQURWO0FBRUlDLE1BQUksRUFBRSxPQUZWO0FBR0lDLElBQUUsRUFBRTtBQUhSLENBWmUsRUFpQmY7QUFDSUYsTUFBSSxFQUFFLHVCQURWO0FBRUlDLE1BQUksRUFBRSw0QkFGVjtBQUdJQyxJQUFFLEVBQUU7QUFIUixDQWpCZSxDQUFuQjs7QUF3QkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUNWO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsd0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQ7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBb0MsU0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBREosQ0FESixDQUZKLEVBT0ksTUFBQywwQ0FBRDtBQUFLLFNBQUssRUFBRSxDQUFDLElBQUQsRUFBTyxHQUFQLENBQVo7QUFBeUIsYUFBUyxFQUFDLGNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQU8sT0FBRyxFQUFDLDRCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBVUk7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVZKLEVBV0ksTUFBQywyQ0FBRDtBQUFNLGtCQUFjLEVBQUMsUUFBckI7QUFBOEIsWUFBUSxFQUFDLE1BQXZDO0FBQThDLGlCQUFhLEVBQUMsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRSixVQUFVLENBQUNLLEdBQVgsQ0FBZTtBQUFBLFFBQUdKLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLFFBQWVDLEVBQWYsUUFBZUEsRUFBZjtBQUFBLFdBQ1gsTUFBQywwQ0FBRDtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFzQyxXQUFLLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUE3QztBQUF5RCxTQUFHLFlBQUtGLElBQUwsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJO0FBQUssU0FBRyxZQUFLSixVQUFMLFNBQWtCRyxJQUFsQixlQUFSO0FBQTRDLFNBQUcsRUFBQyxFQUFoRDtBQUFtRCxlQUFTLEVBQUMsc0JBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQUlJO0FBQUssU0FBRyxZQUFLSCxVQUFMLFNBQWtCRyxJQUFsQixlQUFSO0FBQTRDLFNBQUcsRUFBQyxFQUFoRDtBQUFtRCxlQUFTLEVBQUMsc0JBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixFQUtJO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNELElBQWpDLENBTEosQ0FESixDQURKLENBRFc7QUFBQSxHQUFmLENBRlIsQ0FYSixDQURVO0FBQUEsQ0FBZDs7S0FBTUcsSztBQWlDU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCBCYW5uZXIgZnJvbSAnLi4vMTAvYmFubmVyL2Jhbm5lcic7XG5pbXBvcnQgJy4vaW50cm9wYWdlLmNzcyc7XG5cbmNvbnN0IGljb25Gb2xkZXIgPSAnLi4vLi4vc3RhdGljL2ljb25zLydcbmNvbnN0IHF1aWNrTGlua3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNhbGVuZGFyXCIsXG4gICAgICAgIGljb246IFwiY2FsZW5kYXJcIixcbiAgICAgICAgdG86IFwiL2V2ZW50cy9jYWxlbmRhclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTy1XZWVrXCIsXG4gICAgICAgIGljb246IFwicGVvcGxlXCIsXG4gICAgICAgIC8vIGhyZWY6IFwiaHR0cHM6Ly9tY211cnRyeW93ZWVrLndpeHNpdGUuY29tL2hvbWUtcGFnZVwiXG4gICAgICAgIHRvOiBcIi9vd2Vla1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQm9vayBhIFJvb21cIixcbiAgICAgICAgaWNvbjogXCJldmVudFwiLFxuICAgICAgICB0bzogXCIvcmVzb3VyY2VzL3Jvb21yZXNlcnZhdGlvbnMvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJGaW5hbmNpYWwgSW5jbHVzaXZpdHlcIixcbiAgICAgICAgaWNvbjogXCJodHRwczovL2ljb24ubm93LnNoL3B1YmxpY1wiLFxuICAgICAgICB0bzogXCIvYWJvdXQvZmluYW5jaWFsaW5jbHVzaXZpdHlcIlxuICAgIH1cbl1cblxuY29uc3QgSW50cm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLXBhZ2UnPlxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cbiAgICAgICAgPExpbmsgaHJlZj17XCIvcmVzb3VyY2VzL2Nvcm9uYXZpcnVzXCJ9PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjb3JvbmF2aXJ1cy1iYW5uZXJcIiB3aWR0aD17WzAuOSwgMC41XX0+XG4gICAgICAgICAgICAgICAgPHA+Q2xpY2sgaGVyZSBmb3IgUmVzb3VyY2VzIGFuZCBRdWVzdGlvbnMgcmVnYXJkaW5nIHRoZSBjb3JvbmF2aXJ1cyByZXNwb25zZSBhdCBSaWNlL01jTXVydHJ5PC9wPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEJveCB3aWR0aD17WzAuOTUsIDAuOF19IGNsYXNzTmFtZT0neXVydC1ncmFwaGljJz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy4uLy4uL3N0YXRpYy9ZdXJ0VHJlZXMuc3ZnJyAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nd2VsY29tZS10aXRsZSc+V2VsY29tZSB0byBNY011cnRyeSE8L2gxPlxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93JyA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcXVpY2tMaW5rcy5tYXAoKHsgbmFtZSwgaWNvbiwgdG8gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0ncXVpY2stbGluay1jb250YWluZXInIHdpZHRoPXtbMTMwLCAyMjBdfSBrZXk9e2Ake25hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS83MGB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzQ1YH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LXNtYWxsLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdxdWljay1saW5rLW5hbWUnPntuYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9GbGV4PlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/splashpage/intropage.js\n");

/***/ })

})