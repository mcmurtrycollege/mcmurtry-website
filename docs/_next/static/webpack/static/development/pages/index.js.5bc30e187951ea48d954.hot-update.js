webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/splashpage/intropage.js":
/*!********************************************!*\
  !*** ./components/splashpage/intropage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intropage.css */ \"./components/splashpage/intropage.css\");\n/* harmony import */ var _intropage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intropage_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/shaquillewyanque/git/McMurtry-Website/components/splashpage/intropage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import Banner from '../10/banner/banner';\n\n\nvar iconFolder = '../../static/icons/';\nvar quickLinks = [{\n  name: \"Calendar\",\n  icon: \"calendar\",\n  to: \"/events/calendar\"\n}, {\n  name: \"O-Week\",\n  icon: \"people\",\n  // href: \"https://mcmurtryoweek.wixsite.com/home-page\"\n  to: \"/oweek\"\n}, {\n  name: \"Book a Room\",\n  icon: \"event\",\n  to: \"/resources/roomreservations/\"\n}, {\n  name: \"Financial Inclusivity\",\n  icon: \"hand-heart\",\n  to: \"/about/financialinclusivity\"\n}];\n\nvar Intro = function Intro() {\n  return __jsx(\"div\", {\n    className: \"intro-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/resources/BlackLivesMatter\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"blm-banner\",\n    width: [0.9, 0.5],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"McMurtry College stands with the Black Lives Matter movement \\u2192\"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: [0.95, 0.8],\n    className: \"yurt-graphic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"../../static/YurtTrees.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  })), __jsx(\"h1\", {\n    className: \"welcome-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"Welcome to McMurtry!\"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"turbovote-banner\",\n    width: [0.9, 0.5],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"../../static/turbovote-rice.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"TurboVote makes sure you always know when elections are happening and have the information you need to vote with confidence. Launched in 2010 by the nonpartisan nonprofit Democracy Works, TurboVote is an online voter platform that helps you start the voter registration process, request a ballot by mail, and sign up for email and text reminders for upcoming election deadlines, all in less than five minutes.\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Through a partnership with the Rice University Center for Civic Leadership, Rice students can opt to receive voter registration forms and ballot request applications through TurboVote in pre-paid, pre-addressed envelopes.\"), __jsx(Button, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"Sign up today!\")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justifyContent: \"center\",\n    flexWrap: \"wrap\",\n    flexDirection: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, quickLinks.map(function (_ref) {\n    var name = _ref.name,\n        icon = _ref.icon,\n        to = _ref.to;\n    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"quick-link-container\",\n      width: [130, 220],\n      key: \"\".concat(name),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 21\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: to,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      className: \"quick-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-large.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-large\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 33\n      }\n    }), __jsx(\"img\", {\n      src: \"\".concat(iconFolder).concat(icon, \"-small.svg\"),\n      alt: \"\",\n      className: \"intro-link-img-small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 33\n      }\n    }), __jsx(\"h2\", {\n      className: \"quick-link-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 33\n      }\n    }, name))));\n  })));\n};\n\n_c = Intro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwbGFzaHBhZ2UvaW50cm9wYWdlLmpzPzY4YWMiXSwibmFtZXMiOlsiaWNvbkZvbGRlciIsInF1aWNrTGlua3MiLCJuYW1lIiwiaWNvbiIsInRvIiwiSW50cm8iLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcscUJBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQ2Y7QUFDSUMsTUFBSSxFQUFFLFVBRFY7QUFFSUMsTUFBSSxFQUFFLFVBRlY7QUFHSUMsSUFBRSxFQUFFO0FBSFIsQ0FEZSxFQU1mO0FBQ0lGLE1BQUksRUFBRSxRQURWO0FBRUlDLE1BQUksRUFBRSxRQUZWO0FBR0k7QUFDQUMsSUFBRSxFQUFFO0FBSlIsQ0FOZSxFQVlmO0FBQ0lGLE1BQUksRUFBRSxhQURWO0FBRUlDLE1BQUksRUFBRSxPQUZWO0FBR0lDLElBQUUsRUFBRTtBQUhSLENBWmUsRUFpQmY7QUFDSUYsTUFBSSxFQUFFLHVCQURWO0FBRUlDLE1BQUksRUFBRSxZQUZWO0FBR0lDLElBQUUsRUFBRTtBQUhSLENBakJlLENBQW5COztBQXdCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1Y7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwQ0FBRDtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLFNBQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQURKLENBREosQ0FQSixFQVlJLE1BQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQUFaO0FBQXlCLGFBQVMsRUFBQyxjQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFPLE9BQUcsRUFBQyw0QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FaSixFQWVJO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFmSixFQWdCSSxNQUFDLDBDQUFEO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQWtDLFNBQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQU8sT0FBRyxFQUFDLGlDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWFBRkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFPQVRKLEVBY0ksTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZEosQ0FoQkosRUFnQ0ksTUFBQywyQ0FBRDtBQUFNLGtCQUFjLEVBQUMsUUFBckI7QUFBOEIsWUFBUSxFQUFDLE1BQXZDO0FBQThDLGlCQUFhLEVBQUMsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRSixVQUFVLENBQUNLLEdBQVgsQ0FBZTtBQUFBLFFBQUdKLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLFFBQWVDLEVBQWYsUUFBZUEsRUFBZjtBQUFBLFdBQ1gsTUFBQywwQ0FBRDtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFzQyxXQUFLLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUE3QztBQUF5RCxTQUFHLFlBQUtGLElBQUwsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJO0FBQUssU0FBRyxZQUFLSixVQUFMLFNBQWtCRyxJQUFsQixlQUFSO0FBQTRDLFNBQUcsRUFBQyxFQUFoRDtBQUFtRCxlQUFTLEVBQUMsc0JBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQUlJO0FBQUssU0FBRyxZQUFLSCxVQUFMLFNBQWtCRyxJQUFsQixlQUFSO0FBQTRDLFNBQUcsRUFBQyxFQUFoRDtBQUFtRCxlQUFTLEVBQUMsc0JBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixFQUtJO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNELElBQWpDLENBTEosQ0FESixDQURKLENBRFc7QUFBQSxHQUFmLENBRlIsQ0FoQ0osQ0FEVTtBQUFBLENBQWQ7O0tBQU1HLEs7QUFzRFNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zcGxhc2hwYWdlL2ludHJvcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIEltYWdlIH0gZnJvbSAncmViYXNzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgQmFubmVyIGZyb20gJy4uLzEwL2Jhbm5lci9iYW5uZXInO1xuaW1wb3J0ICcuL2ludHJvcGFnZS5jc3MnO1xuXG5jb25zdCBpY29uRm9sZGVyID0gJy4uLy4uL3N0YXRpYy9pY29ucy8nXG5jb25zdCBxdWlja0xpbmtzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJDYWxlbmRhclwiLFxuICAgICAgICBpY29uOiBcImNhbGVuZGFyXCIsXG4gICAgICAgIHRvOiBcIi9ldmVudHMvY2FsZW5kYXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIk8tV2Vla1wiLFxuICAgICAgICBpY29uOiBcInBlb3BsZVwiLFxuICAgICAgICAvLyBocmVmOiBcImh0dHBzOi8vbWNtdXJ0cnlvd2Vlay53aXhzaXRlLmNvbS9ob21lLXBhZ2VcIlxuICAgICAgICB0bzogXCIvb3dlZWtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJvb2sgYSBSb29tXCIsXG4gICAgICAgIGljb246IFwiZXZlbnRcIixcbiAgICAgICAgdG86IFwiL3Jlc291cmNlcy9yb29tcmVzZXJ2YXRpb25zL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsXG4gICAgICAgIGljb246IFwiaGFuZC1oZWFydFwiLFxuICAgICAgICB0bzogXCIvYWJvdXQvZmluYW5jaWFsaW5jbHVzaXZpdHlcIlxuICAgIH1cbl1cblxuY29uc3QgSW50cm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLXBhZ2UnPlxuICAgICAgICB7LyogPEJhbm5lciAvPiAqL31cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiL3Jlc291cmNlcy9jb3JvbmF2aXJ1c1wifT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29yb25hdmlydXMtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIGhlcmUgZm9yIFJlc291cmNlcyBhbmQgUXVlc3Rpb25zIHJlZ2FyZGluZyB0aGUgY29yb25hdmlydXMgcmVzcG9uc2UgYXQgUmljZS9NY011cnRyeTwvcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXNvdXJjZXMvQmxhY2tMaXZlc01hdHRlclwifT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYmxtLWJhbm5lclwiIHdpZHRoPXtbMC45LCAwLjVdfT5cbiAgICAgICAgICAgICAgICA8cD5NY011cnRyeSBDb2xsZWdlIHN0YW5kcyB3aXRoIHRoZSBCbGFjayBMaXZlcyBNYXR0ZXIgbW92ZW1lbnQgJiM4NTk0OzwvcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxCb3ggd2lkdGg9e1swLjk1LCAwLjhdfSBjbGFzc05hbWU9J3l1cnQtZ3JhcGhpYyc+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi8uLi9zdGF0aWMvWXVydFRyZWVzLnN2ZycgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3dlbGNvbWUtdGl0bGUnPldlbGNvbWUgdG8gTWNNdXJ0cnkhPC9oMT5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJ0dXJib3ZvdGUtYmFubmVyXCIgd2lkdGg9e1swLjksIDAuNV19PlxuICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vLi4vc3RhdGljL3R1cmJvdm90ZS1yaWNlLnBuZycgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFR1cmJvVm90ZSBtYWtlcyBzdXJlIHlvdSBhbHdheXMga25vdyB3aGVuIGVsZWN0aW9ucyBhcmUgaGFwcGVuaW5nIGFuZCBoYXZlIHRoZSBpbmZvcm1hdGlvbiB5b3UgbmVlZFxuICAgICAgICAgICAgICAgIHRvIHZvdGUgd2l0aCBjb25maWRlbmNlLiBMYXVuY2hlZCBpbiAyMDEwIGJ5IHRoZSBub25wYXJ0aXNhbiBub25wcm9maXQgRGVtb2NyYWN5IFdvcmtzLCBUdXJib1ZvdGVcbiAgICAgICAgICAgICAgICBpcyBhbiBvbmxpbmUgdm90ZXIgcGxhdGZvcm0gdGhhdCBoZWxwcyB5b3Ugc3RhcnQgdGhlIHZvdGVyIHJlZ2lzdHJhdGlvbiBwcm9jZXNzLCByZXF1ZXN0IGEgYmFsbG90XG4gICAgICAgICAgICAgICAgYnkgbWFpbCwgYW5kIHNpZ24gdXAgZm9yIGVtYWlsIGFuZCB0ZXh0IHJlbWluZGVycyBmb3IgdXBjb21pbmcgZWxlY3Rpb24gZGVhZGxpbmVzLCBhbGwgaW4gbGVzc1xuICAgICAgICAgICAgICAgIHRoYW4gZml2ZSBtaW51dGVzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGhyb3VnaCBhIHBhcnRuZXJzaGlwIHdpdGggdGhlIFJpY2UgVW5pdmVyc2l0eSBDZW50ZXIgZm9yIENpdmljIExlYWRlcnNoaXAsIFJpY2Ugc3R1ZGVudHMgY2FuIG9wdFxuICAgICAgICAgICAgICAgIHRvIHJlY2VpdmUgdm90ZXIgcmVnaXN0cmF0aW9uIGZvcm1zIGFuZCBiYWxsb3QgcmVxdWVzdCBhcHBsaWNhdGlvbnMgdGhyb3VnaCBUdXJib1ZvdGUgaW4gcHJlLXBhaWQsXG4gICAgICAgICAgICAgICAgcHJlLWFkZHJlc3NlZCBlbnZlbG9wZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QnV0dG9uPlNpZ24gdXAgdG9kYXkhPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93JyA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcXVpY2tMaW5rcy5tYXAoKHsgbmFtZSwgaWNvbiwgdG8gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0ncXVpY2stbGluay1jb250YWluZXInIHdpZHRoPXtbMTMwLCAyMjBdfSBrZXk9e2Ake25hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0b30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3F1aWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2Ake2ljb259L0RDREZFNS83MGB9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbn0vRENERkU1LzQ1YH0gYWx0PScnIGNsYXNzTmFtZT0naW50cm8tbGluay1pbWctc21hbGwnIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LWxhcmdlLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLWxhcmdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aWNvbkZvbGRlcn0ke2ljb259LXNtYWxsLnN2Z2B9IGFsdD0nJyBjbGFzc05hbWU9J2ludHJvLWxpbmstaW1nLXNtYWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdxdWljay1saW5rLW5hbWUnPntuYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9GbGV4PlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/splashpage/intropage.js\n");

/***/ })

})