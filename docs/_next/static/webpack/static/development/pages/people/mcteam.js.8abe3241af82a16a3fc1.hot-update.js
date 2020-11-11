webpackHotUpdate("static/development/pages/people/mcteam.js",{

/***/ "./components/people/mcteam/mcteam.js":
/*!********************************************!*\
  !*** ./components/people/mcteam/mcteam.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return McTeam; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mcteam.css */ \"./components/people/mcteam/mcteam.css\");\n/* harmony import */ var _mcteam_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mcteam_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _general_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/title */ \"./components/general/title.js\");\n/* harmony import */ var _mcteam_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mcteam.json */ \"./components/people/mcteam/mcteam.json\");\nvar _mcteam_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mcteam.json */ \"./components/people/mcteam/mcteam.json\", 1);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/shaquillewyanque/git/McMurtry-Website/components/people/mcteam/mcteam.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar McTeam = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(McTeam, _React$Component);\n\n  var _super = _createSuper(McTeam);\n\n  function McTeam(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, McTeam);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      current: 0\n    };\n    _this.handleEvent = _this.handleEvent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(McTeam, [{\n    key: \"handleEvent\",\n    value: function handleEvent(index) {\n      this.setState({\n        current: index\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var keys = [];\n\n      var _loop = function _loop(n) {\n        keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n          key: _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][n].position,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 17\n          }\n        }, __jsx(\"div\", {\n          onClick: function onClick() {\n            return _this2.handleEvent(n);\n          },\n          className: _this2.state.current === n ? \"active-key\" : \"inactive-key\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 21\n          }\n        }, __jsx(\"p\", {\n          className: \"mcteam-key\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }\n        }, _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][n].position))));\n      };\n\n      for (var n = 0; n < _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"].length; n++) {\n        _loop(n);\n      }\n\n      return __jsx(\"div\", {\n        className: \"mcteam-page\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }\n      }, __jsx(_general_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        title: \"McTeam\",\n        width: 200,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }\n      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"], {\n        justifyContent: \"center\",\n        flex: \"wrap\",\n        flexDirection: \"row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }\n      }, keys)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n        width: [1, 0.9, 0.8, 0.7],\n        ml: \"auto\",\n        mr: \"auto\",\n        mb: 50,\n        className: \"position-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 17\n        }\n      }, __jsx(\"h2\", {\n        className: \"mcteam-name\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }\n      }, _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][this.state.current].names), _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][this.state.current].image === \"\" ? null : __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n        width: [0.8, 0.6, 0.4, 0.3],\n        mx: \"auto\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 29\n        }\n      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__[\"Image\"], {\n        src: _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][this.state.current].image,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 25\n        }\n      })), _mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][this.state.current].body.map(function (line) {\n        return __jsx(\"p\", {\n          key: \"L-\".concat(_mcteam_json__WEBPACK_IMPORTED_MODULE_10__[\"mcteam_positions\"][_this2.state.current].body.indexOf(line)),\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 29\n          }\n        }, line);\n      }), this.state.current === 4 ? __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 29\n        }\n      }, __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 33\n        }\n      }, \"Buy stamps and get envelopes\"), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 33\n        }\n      }, \"Pick up mail and packages\"), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 33\n        }\n      }, \"Borrow an extra key to your room\"), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 33\n        }\n      }, \"Use the staplers, packing tape, scissors, shredder, etc.\"), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 33\n        }\n      }, \"Get a hug\"), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 33\n        }\n      }, \"Do homework or take a study break\")) : null));\n    }\n  }]);\n\n  return McTeam;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Blb3BsZS9tY3RlYW0vbWN0ZWFtLmpzPzRlMzkiXSwibmFtZXMiOlsiTWNUZWFtIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnQiLCJoYW5kbGVFdmVudCIsImJpbmQiLCJpbmRleCIsInNldFN0YXRlIiwia2V5cyIsIm4iLCJwdXNoIiwibWN0ZWFtX3Bvc2l0aW9ucyIsInBvc2l0aW9uIiwibGVuZ3RoIiwibmFtZXMiLCJpbWFnZSIsImJvZHkiLCJtYXAiLCJsaW5lIiwiaW5kZXhPZiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxhQUFPLEVBQUU7QUFEQSxLQUFiO0FBR0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix5R0FBbkI7QUFMZTtBQU1sQjs7OztnQ0FFV0MsSyxFQUFPO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQUVKLGVBQU8sRUFBRUc7QUFBWCxPQUFkO0FBQ0g7Ozs2QkFFUTtBQUFBOztBQUVMLFVBQUlFLElBQUksR0FBRyxFQUFYOztBQUZLLGlDQUdJQyxDQUhKO0FBSURELFlBQUksQ0FBQ0UsSUFBTCxDQUNJLE1BQUMsMENBQUQ7QUFBSyxhQUFHLEVBQUVDLDhEQUFnQixDQUFDRixDQUFELENBQWhCLENBQW9CRyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBSyxpQkFBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDUixXQUFMLENBQWlCSyxDQUFqQixDQUFOO0FBQUEsV0FBZDtBQUNJLG1CQUFTLEVBQUUsTUFBSSxDQUFDUCxLQUFMLENBQVdD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBTkosQ0FESixHQVVRLElBN0JoQixDQVBKLENBREo7QUE0Q0g7Ozs7RUF2RStCaUIsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGVvcGxlL21jdGVhbS9tY3RlYW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgJy4vbWN0ZWFtLmNzcyc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vZ2VuZXJhbC90aXRsZSc7XG5pbXBvcnQgeyBtY3RlYW1fcG9zaXRpb25zIH0gZnJvbSAnLi9tY3RlYW0uanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1jVGVhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudDogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IGluZGV4IH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBrZXlzID0gW11cbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBtY3RlYW1fcG9zaXRpb25zLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e21jdGVhbV9wb3NpdGlvbnNbbl0ucG9zaXRpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXZlbnQobil9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudCA9PT0gbiA/IFwiYWN0aXZlLWtleVwiIDogXCJpbmFjdGl2ZS1rZXlcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21jdGVhbS1rZXknPnttY3RlYW1fcG9zaXRpb25zW25dLnBvc2l0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jdGVhbS1wYWdlJz5cbiAgICAgICAgICAgICAgICA8VGl0bGUgdGl0bGU9XCJNY1RlYW1cIiB3aWR0aD17MjAwfSAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXg9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7a2V5c31cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAwLjksIDAuOCwgMC43XX0gbWw9J2F1dG8nIG1yPSdhdXRvJyBtYj17NTB9IGNsYXNzTmFtZT0ncG9zaXRpb24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21jdGVhbS1uYW1lJz57bWN0ZWFtX3Bvc2l0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRdLm5hbWVzfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1jdGVhbV9wb3NpdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50XS5pbWFnZSA9PT0gXCJcIiA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzAuOCwgMC42LCAwLjQsIDAuM119IG14PSdhdXRvJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXttY3RlYW1fcG9zaXRpb25zW3RoaXMuc3RhdGUuY3VycmVudF0uaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtY3RlYW1fcG9zaXRpb25zW3RoaXMuc3RhdGUuY3VycmVudF0uYm9keS5tYXAobGluZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtgTC0ke21jdGVhbV9wb3NpdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50XS5ib2R5LmluZGV4T2YobGluZSl9YH0+e2xpbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQgPT09IDQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnV5IHN0YW1wcyBhbmQgZ2V0IGVudmVsb3BlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QaWNrIHVwIG1haWwgYW5kIHBhY2thZ2VzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJvcnJvdyBhbiBleHRyYSBrZXkgdG8geW91ciByb29tPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZSB0aGUgc3RhcGxlcnMsIHBhY2tpbmcgdGFwZSwgc2Npc3NvcnMsIHNocmVkZGVyLCBldGMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdldCBhIGh1ZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EbyBob21ld29yayBvciB0YWtlIGEgc3R1ZHkgYnJlYWs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/people/mcteam/mcteam.js\n");

/***/ })

})