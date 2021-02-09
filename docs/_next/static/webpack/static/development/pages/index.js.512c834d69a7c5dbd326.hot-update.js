webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ \"./components/splashpage/intropage.css\");\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/shaquillewyanque/git/McMurtry-Website/components/splashpage/intropage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import Banner from '../10/banner/banner';\n\n\nvar iconFolder = '../../static/icons/';\nvar quickLinks = [{\n  name: \"Calendar\",\n  icon: \"calendar\",\n  to: \"/events/calendar\",\n  absolute: \"\"\n}, {\n  name: \"O-Week\",\n  icon: \"people\",\n  // href: \"https://mcmurtryoweek.wixsite.com/home-page\"\n  to: \"/oweek\",\n  absolute: \"\"\n}, {\n  name: \"Book a Room\",\n  icon: \"event\",\n  to: \"/resources/roomreservations/\",\n  absolute: \"\"\n}, {\n  name: \"Financial Inclusivity\",\n  icon: \"hand-heart\",\n  to: \"/about/financialinclusivity\",\n  absolute: \"\"\n}, {\n  name: \"Donate\",\n  icon: \"hand-coin\",\n  to: \"\",\n  absolute: \"https://riceconnect.rice.edu/donation/mcmurtry-college\"\n}];\n\nvar Intro = function Intro() {\n  return __jsx(\"div\", {\n    className: \"intro-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/resources/BlackLivesMatter\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"blm-banner\",\n    width: [0.9, 0.5],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, \"McMurtry College stands with the Black Lives Matter movement \\u2192\"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: [0.95, 0.8],\n    className: \"yurt-graphic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"../../static/YurtTrees.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  })), __jsx(\"h1\", {\n    className: \"welcome-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"Welcome to McMurtry!\"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"turbovote-banner\",\n    width: [0.9, 0.5],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"TurboVote makes sure you always know when elections are happening and have the information you need to vote with confidence. Launched in 2010 by the nonpartisan nonprofit Democracy Works, TurboVote is an online voter platform that helps you start the voter registration process, request a ballot by mail, and sign up for email and text reminders for upcoming election deadlines, all in less than five minutes.\"), __jsx(\"a\", {\n    href: \"https://rice.turbovote.org/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"turbovote-signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, \"Sign up today!\"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justifyContent: \"center\",\n    flexWrap: \"wrap\",\n    flexDirection: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, quickLinks.map(function (_ref) {\n    var name = _ref.name,\n        icon = _ref.icon,\n        to = _ref.to,\n        absolute = _ref.absolute;\n    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"quick-link-container\",\n      width: [130, 220],\n      key: \"\".concat(name),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }\n    }, to !== \"\" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: to,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"quick-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 37\n      }\n    }, __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-large.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-large\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 41\n      }\n    }), __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-small.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 41\n      }\n    }), __jsx(\"h2\", {\n      className: \"quick-link-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 41\n      }\n    }, name))) : __jsx(\"a\", {\n      href: absolute,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"quick-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 37\n      }\n    }, __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-large.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-large\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 41\n      }\n    }), __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-small.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 41\n      }\n    }), __jsx(\"h2\", {\n      className: \"quick-link-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 41\n      }\n    }, name))));\n  })));\n};\n\n_c = Intro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzPzY4YWMiXSwibmFtZXMiOlsiaWNvbkZvbGRlciIsInF1aWNrTGlua3MiLCJuYW1lIiwiaWNvbiIsInRvIiwiYWJzb2x1dGUiLCJJbnRybyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxxQkFBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtBQUNJQyxNQUFJLEVBQUUsVUFEVjtBQUVJQyxNQUFJLEVBQUUsVUFGVjtBQUdJQyxJQUFFLEVBQUUsa0JBSFI7QUFJSUMsVUFBUSxFQUFFO0FBSmQsQ0FEZSxFQU9mO0FBQ0lILE1BQUksRUFBRSxRQURWO0FBRUlDLE1BQUksRUFBRSxRQUZWO0FBR0k7QUFDQUMsSUFBRSxFQUFFLFFBSlI7QUFLSUMsVUFBUSxFQUFFO0FBTGQsQ0FQZSxFQWNmO0FBQ0lILE1BQUksRUFBRSxhQURWO0FBRUlDLE1BQUksRUFBRSxPQUZWO0FBR0lDLElBQUUsRUFBRSw4QkFIUjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQWRlLEVBb0JmO0FBQ0lILE1BQUksRUFBRSx1QkFEVjtBQUVJQyxNQUFJLEVBQUUsWUFGVjtBQUdJQyxJQUFFLEVBQUUsNkJBSFI7QUFJSUMsVUFBUSxFQUFFO0FBSmQsQ0FwQmUsRUEwQmY7QUFDSUgsTUFBSSxFQUFFLFFBRFY7QUFFSUMsTUFBSSxFQUFFLFdBRlY7QUFHSUMsSUFBRSxFQUFFLEVBSFI7QUFJSUMsVUFBUSxFQUFFO0FBSmQsQ0ExQmUsQ0FBbkI7O0FBa0NBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FDVjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLDZCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHSTtBQUFLLFNBQUcsWUFBS0wsVUFBTCxTQUFrQkcsSUFBbEIsZUFBUjtBQUE0QyxTQUFHLEVBQUMsRUFBaEQ7QUFBbUQsZUFBUyxFQUFDLHNCQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosRUFJSTtBQUFLLFNBQUcsWUFBS0gsVUFBTCxTQUFrQkcsSUFBbEIsZUFBUjtBQUE0QyxTQUFHLEVBQUMsRUFBaEQ7QUFBbUQsZUFBUyxFQUFDLHNCQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkosRUFLSTtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDRCxJQUFqQyxDQUxKLENBREosQ0FiWixDQURXO0FBQUEsR0FBZixDQUZSLENBakNKLENBRFU7QUFBQSxDQUFkOztLQUFNSSxLO0FBc0VTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BsYXNocGFnZS9pbnRyb3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi8xMC9iYW5uZXIvYmFubmVyJztcbmltcG9ydCAnLi9pbnRyb3BhZ2UuY3NzJztcblxuY29uc3QgaWNvbkZvbGRlciA9ICcuLi8uLi9zdGF0aWMvaWNvbnMvJ1xuY29uc3QgcXVpY2tMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FsZW5kYXJcIixcbiAgICAgICAgaWNvbjogXCJjYWxlbmRhclwiLFxuICAgICAgICB0bzogXCIvZXZlbnRzL2NhbGVuZGFyXCIsXG4gICAgICAgIGFic29sdXRlOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTy1XZWVrXCIsXG4gICAgICAgIGljb246IFwicGVvcGxlXCIsXG4gICAgICAgIC8vIGhyZWY6IFwiaHR0cHM6Ly9tY211cnRyeW93ZWVrLndpeHNpdGUuY29tL2hvbWUtcGFnZVwiXG4gICAgICAgIHRvOiBcIi9vd2Vla1wiLFxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJvb2sgYSBSb29tXCIsXG4gICAgICAgIGljb246IFwiZXZlbnRcIixcbiAgICAgICAgdG86IFwiL3Jlc291cmNlcy9yb29tcmVzZXJ2YXRpb25zL1wiLFxuICAgICAgICBhYnNvbHV0ZTogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkZpbmFuY2lhbCBJbmNsdXNpdml0eVwiLFxuICAgICAgICBpY29uOiBcImhhbmQtaGVhcnRcIixcbiAgICAgICAgdG86IFwiL2Fib3V0L2ZpbmFuY2lhbGluY2x1c2l2aXR5XCIsXG4gICAgICAgIGFic29sdXRlOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRG9uYXRlXCIsXG4gICAgICAgIGljb246IFwiaGFuZC1jb2luXCIsXG4gICAgICAgIHRvOiBcIlwiLFxuICAgICAgICBhYnNvbHV0ZTogXCJodHRwczovL3JpY2Vjb25uZWN0LnJpY2UuZWR1L2RvbmF0aW9uL21jbXVydHJ5LWNvbGxlZ2VcIlxuICAgIH1cbl1cblxuY29uc3QgSW50cm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLXBhZ2UnPlxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiL3Jlc291cmNlcy9jb3JvbmF2aXJ1c1wifT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29yb25hdmlydXMtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIGhlcmUgZm9yIFJlc291cmNlcyBhbmQgUXVlc3Rpb25zIHJlZ2FyZGluZyB0aGUgY29yb25hdmlydXMgcmVzcG9uc2UgYXQgUmljZS9NY011cnRyeTwvcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXNvdXJjZXMvQmxhY2tMaXZlc01hdHRlclwifT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYmxtLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cbiAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlIHN0YW5kcyB3aXRoIHRoZSBCbGFjayBMaXZlcyBNYXR0ZXIgbW92ZW1lbnQgJiM4NTk0OzwvcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxCb3ggd2lkdGg9e1swLjk1LCAwLjhdfSBjbGFzc05hbWU9J3l1cnQtZ3JhcGhpYyc+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvWXVydFRyZWVzLnN2ZycgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3dlbGNvbWUtdGl0bGUnPldlbGNvbWUgdG8gTWNNdXJ0cnkhPC9oMT5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJ0dXJib3ZvdGUtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHVyYm9Wb3RlIG1ha2VzIHN1cmUgeW91IGFsd2F5cyBrbm93IHdoZW4gZWxlY3Rpb25zIGFyZSBoYXBwZW5pbmcgYW5kIGhhdmUgdGhlIGluZm9ybWF0aW9uIHlvdSBuZWVkXG4gICAgICAgICAgICAgICAgdG8gdm90ZSB3aXRoIGNvbmZpZGVuY2UuIExhdW5jaGVkIGluIDIwMTAgYnkgdGhlIG5vbnBhcnRpc2FuIG5vbnByb2ZpdCBEZW1vY3JhY3kgV29ya3MsIFR1cmJvVm90ZVxuICAgICAgICAgICAgICAgIGlzIGFuIG9ubGluZSB2b3RlciBwbGF0Zm9ybSB0aGF0IGhlbHBzIHlvdSBzdGFydCB0aGUgdm90ZXIgcmVnaXN0cmF0aW9uIHByb2Nlc3MsIHJlcXVlc3QgYSBiYWxsb3RcbiAgICAgICAgICAgICAgICBieSBtYWlsLCBhbmQgc2lnbiB1cCBmb3IgZW1haWwgYW5kIHRleHQgcmVtaW5kZXJzIGZvciB1cGNvbWluZyBlbGVjdGlvbiBkZWFkbGluZXMsIGFsbCBpbiBsZXNzXG4gICAgICAgICAgICAgICAgdGhhbiBmaXZlIG1pbnV0ZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgICAgVGhyb3VnaCBhIHBhcnRuZXJzaGlwIHdpdGggdGhlIFJpY2UgVW5pdmVyc2l0eSBDZW50ZXIgZm9yIENpdmljIExlYWRlcnNoaXAsIFJpY2Ugc3R1ZGVudHMgY2FuIG9wdFxuICAgICAgICAgICAgICAgIHRvIHJlY2VpdmUgdm90ZXIgcmVnaXN0cmF0aW9uIGZvcm1zIGFuZCBiYWxsb3QgcmVxdWVzdCBhcHBsaWNhdGlvbnMgdGhyb3VnaCBUdXJib1ZvdGUgaW4gcHJlLXBhaWQsXG4gICAgICAgICAgICAgICAgcHJlLWFkZHJlc3NlZCBlbnZlbG9wZXMuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmljZS50dXJib3ZvdGUub3JnL1wiPlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSd0dXJib3ZvdGUtc2lnbnVwJz5TaWduIHVwIHRvZGF5ITwvQm94PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3JvdycgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1aWNrTGlua3MubWFwKCh7IG5hbWUsIGljb24sIHRvLCBhYnNvbHV0ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdxdWljay1saW5rLWNvbnRhaW5lcicgd2lkdGg9e1sxMzAsIDIyMF19IGtleT17YCR7bmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byAhPT0gXCJcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dG99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS80NWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tc21hbGwuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthYnNvbHV0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzcwYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctbGFyZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS80NWB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpY29uRm9sZGVyfSR7aWNvbn0tc21hbGwuc3ZnYH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncXVpY2stbGluay1uYW1lJz57bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgfVxuICAgICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEludHJvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/splashpage/intropage.js\n");

/***/ })

})